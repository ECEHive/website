# The Hive Makerspace Website

This is a test redesign of the website for The Hive Makerspace at Georgia Tech.

## Project Overview

This site is built with [Astro](https://astro.build/) and uses technologies including TypeScript, Tailwind CSS, and MDX for content pages. The site is statically generated.

## Content Structure

The project is organized for clarity and ease of content updates:

- **src/content/**: Markdown content for the site, organized by topic:
  - `faq/`: Frequently asked questions (each file is a question/answer)
  - `team/`: Team member bios and info
  - `tools/`: Information about each tool available in the makerspace
- **src/data/**: TypeScript files with structured data (site metadata, navigation, announcements, hours, etc.)
- **src/pages/**: Top-level pages (MDX or Astro format) that make up the site’s main navigation.
- **src/components/**: Reusable UI components (Astro format) used throughout the site.
- **src/layouts/**: Layout templates for pages and content.
- **src/styles/**: Global CSS (mainly Tailwind CSS).

## How to Edit Content

### Editing Existing Content

- **FAQ, Team, and Tools:**
  - Edit the relevant Markdown file in `src/content/faq/`, `src/content/team/`, or `src/content/tools/`.
  - Use standard Markdown syntax. Frontmatter (YAML at the top) may be used for metadata.
- **Site Data (hours, announcements, nav, etc.):**
  - Edit the corresponding TypeScript file in `src/data/` (e.g., `hours.ts`, `announcements.ts`).
  - These files export objects/arrays used throughout the site.
- **Pages:**
  - Edit or add `.mdx` or `.astro` files in `src/pages/` for main site pages.

### Adding New Content

- **New FAQ/Tool/Team Entry:**
  - Add a new Markdown file in the appropriate folder under `src/content/`.
  - Follow the naming and formatting conventions of existing files.
- **New Page:**
  - Add a new `.mdx` or `.astro` file to `src/pages/`.
  - Use an existing page as a template if needed.

### Updating Site Metadata

- Edit `src/data/site.ts` to update the site name, description, contact info, address, and external links. Changes here are reflected site-wide.

## Development & Contribution

### Prerequisites

- [Node.js](https://nodejs.org/) (v22.12.0 or higher)
- [Bun](https://bun.sh/) (for formatting and running scripts)

### Install Dependencies

```sh
bun install
```

### Run the Development Server

```sh
bun run dev
```

The site will be available at [http://localhost:4321](http://localhost:4321) by default.

### Format Code

```sh
bun format
```

### Build for Production

```sh
bun run build
```

## Additional Notes

- All content and data changes are version controlled. Please use clear commit messages.
- For major changes, open a pull request and request review.
- For questions, contact the site maintainers or email [hive@ece.gatech.edu](mailto:hive@ece.gatech.edu).
