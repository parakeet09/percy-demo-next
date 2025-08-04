<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Chain Calculator Next.js Project

This is a Next.js TypeScript project for a mathematical function chain calculator using ReactFlow for visual representation.

## Key Technologies

- Next.js 15+ with App Router
- TypeScript
- TailwindCSS for styling
- ReactFlow (@xyflow/react) for visual flow diagrams
- Percy for visual regression testing

## Project Structure

- Uses App Router with client components for interactive features
- Components are located in `src/components/`
- Utilities are in `src/utils/`
- Main calculator logic uses mathematical equation evaluation

## Development Guidelines

- All interactive components should use 'use client' directive
- ReactFlow components should be dynamically imported to avoid SSR issues
- Mathematical equations are evaluated using a custom parser that handles variables, arithmetic, and exponents
- Error handling is implemented for invalid equations and cyclic dependencies

## Visual Testing

- Percy snapshots are configured for CI/CD
- Build process generates static export for GitHub Pages deployment
