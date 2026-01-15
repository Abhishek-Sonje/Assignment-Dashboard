# Dashboard UI Recreation

This project is a recreation of a Figma dashboard design using Next.js 16, Tailwind CSS, and Chart.js.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS (with custom configuration for colors and fonts)
- **Charts**: Chart.js + react-chartjs-2
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure
- `app/`: Next.js App Router structure.
  - `layout.tsx`: Root layout with Sidebar shell.
  - `page.tsx`: Main dashboard grid assembly.
- `components/`:
  - `dashboard/`: Individual widgets (RevenueCard, SocialStats, SalesTeam, etc).
  - `ui/`: Reusable small UI atoms (Avatar).
  - `charts/`: Chart.js configurations.
  - `Sidebar.tsx`, `Header.tsx`: Core layout components.
- `lib/`:
  - `mock-data.ts`: Static data to drive the UI.

## Assumptions & Decisions
- **Charts**: Used Chart.js for the complex line chart to demonstrate library usage, but used CSS/HTML for simple bar charts (Referrer chart, Platform bars) to achieve the specific rounded "pill" aesthetic more reliably and performantly.
- **Responsiveness**: The dashboard is optimized for Desktop (1280px+) as requested, but uses Grid/Flexbox to be fluidly responsive on smaller screens (Tablet).
- **Icons**: Used Lucide React as a close approximation to the custom icon set in the design.
- **Micro-interactions**: Added hover states to cards, buttons, and navigation items.

## Improvements with more time
- **Chart Interactivity**: Add real tooltips and hover effects to all charts.
- **Theme Switcher**: Implement the dark/light mode toggle functionality (UI for it exists in Header).
- **Data Fetching**: Replace `mock-data.ts` with React Query + API calls.
