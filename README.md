## Design Decisions

- TypeScript
- Tailwind for CSS
- ShadCN for UI defaults
- Turbopack, with the expectation that this becomes a monorepo for
  handling background jobs.

## TODO

- [ ] Add Drizzle schema file.

- [ ] Add Vitest and setup package.json to run it.

- [ ] Add GitHub Actions for linting, typechecking, and testing.

- [ ] Add GitHub Actions for Docker.

- [ ] Husky for precommit hooks.

- [ ] Add Dockerfile for web component

- [ ] Automatically generate OpenAPI schema file using Next tooling.

- [ ] Convert to monorepo style using Turborepo.

- [ ] Add SWR for loading from the frontend

- [ ] Add ShadCN components

- [ ] Add Storybook

- [ ] Add Cucumber for testing

- [ ] Add Playwright

- [ ] ESLint plugin for Zod.

- [ ] ESLint plugin for OpenAPI schema.

- [ ] Claude Code settings in an .mcp file

- [ ] Set up Turborepo for building Docker images.

- [ ] Set up Helm Chart building

- [ ] Set up writing to GitHub Packages.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# DONE

- [x] Add Drizzle
- [x] ESLint plugin for Drizzle
- [x] Add Effect for schema validation.
- [x] Claude Code hooks for formatting.
