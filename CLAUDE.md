# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based landing page for "Extrema Limpeza" (a furniture/upholstery cleaning service website) built with modern web technologies. The project uses Vite, TypeScript, React, shadcn/ui components, and Tailwind CSS.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 8080)
- **Build for production**: `npm run build`  
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Project Architecture

### Tech Stack
- **Vite**: Build tool and dev server
- **React 18**: UI framework with TypeScript
- **shadcn/ui**: Pre-built UI component library based on Radix UI
- **Tailwind CSS**: Utility-first styling with custom design system
- **React Router**: Client-side routing
- **TanStack Query**: Server state management
- **React Hook Form + Zod**: Form handling and validation

### File Structure
```
src/
├── components/ui/          # shadcn/ui components (accordion, button, card, etc.)
├── hooks/                  # Custom React hooks (use-mobile, use-toast)
├── lib/                    # Utility functions (utils.ts for cn() helper)
├── pages/                  # Route components (Index.tsx, NotFound.tsx)
├── assets/                 # Static images
├── App.tsx                 # Main app with routing setup
├── main.tsx               # React entry point
└── index.css              # Global styles with Tailwind and CSS custom properties
```

### Design System
The project uses a custom brand design system defined in Tailwind config:
- **Brand colors**: `brand-blue`, `brand-gold`, `brand-dark`
- **Custom gradients**: `gradient-primary`, `gradient-accent`, `gradient-hero`, `gradient-brand`
- **Glow effects**: `shadow-glow`, `shadow-gold` for visual emphasis
- **CSS custom properties**: Defined in `index.css` for consistent theming

### Key Components
- **Landing Page**: Single-page layout in `src/pages/Index.tsx` with header, hero, services, testimonials, and contact sections
- **UI Components**: Extensive shadcn/ui component library for consistent design
- **Path Aliases**: `@/*` resolves to `src/*` for clean imports
- **Lovable Integration**: Uses `lovable-tagger` for development component tracking

### Development Notes
- Uses SWC for fast TypeScript compilation
- ESLint configured with React hooks and TypeScript rules
- TypeScript config has relaxed strictness settings (noImplicitAny: false, strictNullChecks: false)
- No testing framework currently configured
- Images stored in `public/` and imported as modules from `src/assets/`

### Styling Approach
- Tailwind-first with extensive custom design tokens
- CSS custom properties for dynamic theming
- shadcn/ui component variants for consistent styling
- Mobile-responsive design patterns throughout