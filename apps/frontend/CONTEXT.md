# Frontend Context

## Ubiquitous Language

- **Exercise**: The core entity rendered in the UI, containing problem text, solution text, and metadata (difficulty, tags, topic).
- **MathRenderer**: A component responsible for rendering LaTeX math formulas securely using `react-katex` or similar.
- **Short Code**: A unique identifier starting with `#` used to quickly reference or share an exercise.
- **Curriculum Map**: A static structure mapping years (1-5) to Macro Areas and Specific Topics, used for the filter UI.

## Architecture

- **Framework**: Next.js (App Router).
- **Styling**: Tailwind CSS with custom `globals.css` utilities (e.g., `.glass-panel`).
- **Icons**: Lucide React.
- **Animations**: Framer Motion for list transitions, modals, and hover effects.
- **State Management**: React `useState` and `useEffect` with debouncing for the search query to minimize API calls.
- **Component Structure**: Divided into `layout`, `home` (Hero, Filters, Grid), and `modals` to keep `page.tsx` clean.
