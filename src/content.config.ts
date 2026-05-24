// src/content.config.ts
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. 定義 Projects
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projects" }),
  schema: z.object({ title: z.string().default('Untitled Project') }).catchall(z.any()),
});

// 2. 定義 Research
const researchCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/research" }),
  schema: z.object({ title: z.string().default('Untitled Research') }).catchall(z.any()),
});

// 3. 定義 Blog
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({ title: z.string().default('Untitled Blog Post') }).catchall(z.any()),
});

// ✨ 確保這裡的名稱與上面宣告的一致
export const collections = {
  projects: projectsCollection, // 使用正確的變數名
  research: researchCollection,
  blog: blogCollection,
};