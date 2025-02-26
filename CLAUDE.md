# Durafloor Developer Guidelines

## Project Overview
Static HTML website for Durafloor vinyl flooring products using Tailwind CSS.

## Development Setup
- No build system required - static HTML/CSS
- Uses CDN for Tailwind CSS v2.2.19

## Page Structure
- `index.html`: Homepage with product overview
- Product pages: `duratile-xl.html`, `deluxe-tile.html`, etc.
- `portfolio.html`: Project showcase
- `contact.html`: Contact information

## Style Guidelines
- Use Tailwind utility classes for styling
- Custom CSS in `<style>` tags for animations/transitions
- Maintain consistent naming for product pages (kebab-case)
- Use semantic HTML elements
- Maintain responsive design with Tailwind breakpoints

## Deployment
GitHub Actions workflow deploys static content to GitHub Pages on push to main branch.

## Images
Store all images in the `/img` directory with descriptive filenames.