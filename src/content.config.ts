// src/content.config.ts
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// Portfolio Collection
const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),

  schema: z.object({
    title: z.string().default('Untitled Project'),
    description: z.any().optional(),
    heroImage: z.any().optional(),
    tags: z.any().optional(),
    date: z.any().optional(),
  }).catchall(z.any()),
});

// Blog Collection
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),

  schema: z.object({
    title: z.string().default('Untitled Blog Post'),
    description: z.any().optional(),
    pubDate: z.any().optional(),
    category: z.any().optional(),
    tags: z.any().optional(),
    heroImage: z.any().optional(),
  }).catchall(z.any()),
});

export const collections = {
  portfolio: portfolioCollection,
  blog: blogCollection,
};