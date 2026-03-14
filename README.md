# ammaransari.dev

My personal portfolio website built with Next.js, React, and TypeScript.

**Live:** [ammaransari.dev](https://ammaransari.dev)

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React Compiler
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Motion
- **Email:** Resend
- **Analytics:** Vercel Analytics & Speed Insights
- **Deployment:** Vercel

## Pages

| Route            | Description                                |
| ---------------- | ------------------------------------------ |
| `/`              | Home with hero section and contact form    |
| `/about`         | About me                                   |
| `/experience`    | Work experience timeline                   |
| `/skills`        | Filterable skill matrix by domain          |
| `/projects`      | Project listing with skill-based filtering |
| `/projects/[id]` | Project detail page                        |

## Project Structure

```
src/
├── app/          # Pages, layouts, and API routes
├── components/   # Shared React components
├── data/         # Static content (projects, skills, experience)
├── hooks/        # Custom React hooks
├── lib/          # Utilities and helpers
└── types/        # TypeScript type definitions
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint
npm run lint
```
