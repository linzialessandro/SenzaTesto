#!/usr/bin/env python3
"""Regenerate docs/knowledge/viz.html graphData from OKF Concept markdown files.

Usage (from repository root):
  python3 scripts/regenerate_okf_graph.py
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import yaml

PROJECT_ROOT = Path(__file__).resolve().parent.parent
KNOWLEDGE_ROOT = PROJECT_ROOT / "docs" / "knowledge"
VIZ_PATH = KNOWLEDGE_ROOT / "viz.html"
SKIP_NAMES = {"index.md", "log.md"}
FRONTMATTER_RE = re.compile(r"\A---\r?\n(.*?)\r?\n---\r?\n(.*)\Z", re.DOTALL)
LINK_RE = re.compile(r"\[[^\]]*\]\(([^)]+)\)")
BUNDLE_PREFIXES = ("agents/", "architecture/", "curriculum/", "database/")


def concept_id_from_path(rel: Path) -> str:
    return rel.with_suffix("").as_posix()


def normalize_link(raw: str, source_id: str) -> str | None:
    target = raw.strip()
    if not target or target.startswith(("http://", "https://", "mailto:", "#")):
        return None
    target = target.split("#", 1)[0].split("?", 1)[0]
    if not target:
        return None
    target = target.lstrip("/")
    if target.startswith("./"):
        target = target[2:]
    if not target.startswith(BUNDLE_PREFIXES):
        source_dir = source_id.rsplit("/", 1)[0] if "/" in source_id else ""
        if source_dir and not target.startswith(".."):
            target = f"{source_dir}/{target}"
        elif target.startswith("../"):
            parts = source_id.split("/")[:-1]
            rest = target
            while rest.startswith("../"):
                rest = rest[3:]
                if parts:
                    parts.pop()
            target = "/".join(parts + ([rest] if rest else []))
    if target.endswith(".md"):
        target = target[:-3]
    return target


def parse_concept(path: Path) -> dict | None:
    text = path.read_text(encoding="utf-8")
    match = FRONTMATTER_RE.match(text)
    if not match:
        return None
    meta = yaml.safe_load(match.group(1)) or {}
    if meta.get("type") != "Concept":
        return None

    body = match.group(2).strip()
    rel = path.relative_to(KNOWLEDGE_ROOT)
    concept_id = concept_id_from_path(rel)
    status = meta.get("status") or "active"
    if status == "superseded" or meta.get("superseded_by"):
        status = "superseded"

    tags = meta.get("tags") or []
    if isinstance(tags, str):
        tags = [tags]

    links: list[str] = []
    for raw in LINK_RE.findall(body):
        linked = normalize_link(raw, concept_id)
        if linked and linked != concept_id:
            links.append(linked)
    if meta.get("supersedes"):
        superseded = normalize_link(str(meta["supersedes"]), concept_id)
        if superseded:
            links.append(superseded)

    unique_links: list[str] = []
    seen: set[str] = set()
    for link in links:
        if link not in seen:
            seen.add(link)
            unique_links.append(link)

    return {
        "id": concept_id,
        "path": rel.as_posix(),
        "type": "Concept",
        "title": meta.get("title") or concept_id,
        "description": meta.get("description") or "",
        "tags": list(tags),
        "resource": meta.get("resource") or "",
        "status": status,
        "body": body,
        "links": unique_links,
        "cited_by": [],
    }


def build_graph() -> dict:
    concepts: list[dict] = []
    for path in sorted(KNOWLEDGE_ROOT.rglob("*.md")):
        if path.name in SKIP_NAMES:
            continue
        node = parse_concept(path)
        if node:
            concepts.append(node)

    concept_ids = {concept["id"] for concept in concepts}
    for concept in concepts:
        concept["links"] = [link for link in concept["links"] if link in concept_ids]

    backlinks: dict[str, list[str]] = {concept["id"]: [] for concept in concepts}
    for concept in concepts:
        for link in concept["links"]:
            backlinks[link].append(concept["id"])
    for concept in concepts:
        concept["cited_by"] = sorted(backlinks[concept["id"]])

    edges = [
        {"source": concept["id"], "target": link}
        for concept in concepts
        for link in concept["links"]
    ]
    concepts.sort(key=lambda item: item["id"])
    edges.sort(key=lambda edge: (edge["source"], edge["target"]))
    return {
        "bundle": "docs/knowledge",
        "nodes": concepts,
        "types": sorted({concept["type"] for concept in concepts}),
        "edges": edges,
    }


def write_viz(graph: dict) -> None:
    if not VIZ_PATH.is_file():
        raise FileNotFoundError(VIZ_PATH)
    html = VIZ_PATH.read_text(encoding="utf-8")
    start = html.find("const graphData = ")
    if start < 0:
        raise RuntimeError("const graphData assignment not found in viz.html")
    marker_end = "\n    </script>\n\n    <!-- Main Logic -->"
    end = html.find(marker_end, start)
    if end < 0:
        raise RuntimeError("end marker for graphData script block not found")
    payload = "const graphData = " + json.dumps(graph, ensure_ascii=True, separators=(",", ":")) + ";"
    VIZ_PATH.write_text(html[:start] + payload + "\n" + html[end:], encoding="utf-8")


def main() -> int:
    graph = build_graph()
    write_viz(graph)
    print(f"Regenerated {VIZ_PATH.relative_to(PROJECT_ROOT)}")
    print(f"nodes={len(graph['nodes'])} edges={len(graph['edges'])}")
    for node in graph["nodes"]:
        print(f"  {node['id']} [{node['status']}] -> {node['links']}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as error:  # noqa: BLE001 - CLI surface
        print(f"Failed to regenerate OKF graph: {error}", file=sys.stderr)
        raise SystemExit(1)
