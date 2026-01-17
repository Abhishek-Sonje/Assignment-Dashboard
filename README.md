# Sales Dashboard

A modern, pixel-perfect dashboard UI built with Next.js and Tailwind CSS.

[![Dashboard Preview](screenshot.png)](https://drive.google.com/file/d/1UdVFviC-yVH12yA2iQNgIJUDSqwL3HlH/view?pli=1)

## Tech Stack

- **Next.js 16** - App Router
- **Tailwind CSS** - Styling
- **Chart.js** - Data visualization
- **Lucide React** - Icons
- **TypeScript** - Type safety

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with sidebar
│   └── page.tsx        # Dashboard page
├── components/
│   ├── dashboard/      # Dashboard cards & widgets
│   ├── charts/         # Chart components
│   ├── ui/             # Reusable UI components
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── Header.tsx      # Top header
└── lib/
    └── mock-data.ts    # Static demo data
```

## Features

- **Responsive Layout** - CSS Grid-based responsive design
- **Expandable Drawers** - Smooth animated expand/collapse in Sales Team card
- **Interactive Sidebar** - Collapsible sections with animations
- **Modern Charts** - Line charts, bar charts, and donut charts
- **Polished UI** - Hover effects, transitions, and micro-interactions

