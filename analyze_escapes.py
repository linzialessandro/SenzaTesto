import os
from pathlib import Path

accepted_dir = Path('submissions/accepted')
bad_chars = {
    '\x07': '\\a',
    '\x08': '\\b',
    '\x0c': '\\f',
    '\x0b': '\\v',
}

def analyze():
    for f in accepted_dir.glob('*.md'):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            for char, rep in bad_chars.items():
                if char in content:
                    print(f"Found {rep} in {f.name}")
            
            # check \r + 'ight'
            if '\right' in content:
                print(f"Found \\right as CR in {f.name}")
            # check \r + 'ho'
            if '\rho' in content:
                print(f"Found \\rho as CR in {f.name}")
            
            # check \t + 'heta', \t + 'o', \t + 'an', \t + 'imes'
            if '\theta' in content: print(f"Found \\theta as TAB in {f.name}")
            if '\to' in content: print(f"Found \\to as TAB in {f.name}")
            if '\tan' in content: print(f"Found \\tan as TAB in {f.name}")
            if '\times' in content: print(f"Found \\times as TAB in {f.name}")
            
            if '\nu ' in content: print(f"Found \\nu as NEWLINE in {f.name}")

analyze()
