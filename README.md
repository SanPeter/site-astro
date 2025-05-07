# eric.st-pierre.xyz - Personal Website

This is my personal website built with [Astro](https://astro.build) using the [Starlight](https://starlight.astro.build) theme. Starlight is a documentation theme that provides a clean, accessible, and fast user experience.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/eric.st-pierre.xyz.git
cd eric.st-pierre.xyz/site-astro

# Install dependencies
npm install
```

## Available Scripts

- `npm start` or `npm run dev`: Start the development server
- `npm run build`: Build the site for production
- `npm run preview`: Preview the production build locally
- `npm run astro ...`: Run Astro CLI commands directly

## Project Structure

```
site-astro/
├── public/          # Static files
├── src/
│   ├── content/     # Markdown content
│   ├── components/  # Astro components
│   └── pages/       # Site pages
└── astro.config.mjs # Astro configuration
```

## Technology Stack

- [Astro](https://astro.build) - Static Site Generator
- [Starlight](https://starlight.astro.build) - Documentation theme
- Markdown/MDX for content

## GraphQL Integration

This site uses GraphQL as a data source for blog posts. The integration is primarily handled in the `src/pages/posts/[...slug].astro` template.

### Blog Post Data Fetching

Posts are fetched at build time using GraphQL queries:
```typescript
// Example query from [...slug].astro
query ArticlePageQuery {
    ArticlePage(limit: 40) {
        items {
            Title
            PublishDate
            ArticleBody {
                html
            }
            // ...other fields
        }
    }
}
```

### Environment Configuration

The GraphQL endpoint requires the following environment variables:
- `API_ENDPOINT`: The GraphQL API endpoint URL
- `API_KEY`: Authentication key for the API

These are loaded using Vite's `loadEnv` utility during the static site generation process.
