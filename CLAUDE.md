# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React landing page for FiloDataBroker, built with Vite, TypeScript, React, shadcn/ui, and Tailwind CSS. The project is deployed to GitHub Pages and uses the Lovable development platform.

## Development Commands

### Core Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

### Installation

- `npm i` - Install dependencies

## Architecture

### Project Structure

- **Single Page Application**: Main page is `src/pages/Index.tsx` with routing via React Router
- **Component-based**: Landing page built from modular components in `src/components/`
- **shadcn/ui Integration**: UI components in `src/components/ui/` following shadcn/ui patterns
- **Asset Management**: Images stored in `src/assets/`

### Key Components

- `Navigation.tsx` - Site navigation
- `HeroSection.tsx` - Main hero section
- `ProblemSolution.tsx` - Problem/solution content
- `HowItWorks.tsx` - Process explanation
- `TechnologyStack.tsx` - Tech stack display
- `ContactSection.tsx` - Contact information
- `Footer.tsx` - Site footer

### Tech Stack Configuration

- **Vite**: Build tool with React SWC plugin
- **TypeScript**: Strict type checking enabled
- **Tailwind CSS**: Utility-first CSS framework
- **React Query**: Data fetching and state management
- **Path Aliases**: `@/` maps to `src/` directory

### Styling

- Uses Tailwind CSS with custom configuration in `tailwind.config.ts`
- shadcn/ui component theming system
- Responsive design patterns

## Deployment

- **GitHub Actions**: Automated deployment via `.github/workflows/deploy-github-pages.yml`
- **GitHub Pages**: Deployed automatically on push to main branch
- **Lovable Integration**: Connected to Lovable platform for visual editing

## Development Notes

- Development server runs on `host: "::"` and `port: 8080`
- ESLint configured with React hooks and TypeScript rules
- No test framework currently configured
- Uses `lovable-tagger` in development mode for visual editing integration
