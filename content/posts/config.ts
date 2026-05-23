// src/content/config.ts
import { z, defineCollection } from 'astro:content';

// 1. 分類管理 (因為是 JSON 檔案，所以 type 必須是 'data')
const categoryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
  }),
});

// 2. 作品集 (MDX 檔案，type 為 'content')
const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    category: z.any().optional(), // 接收 TinaCMS 傳來的分類關聯
    tags: z.array(z.string()).optional(),
    date: z.any().optional(),
  }),
});

// 3. 部落格 (MDX 檔案，type 為 'content')
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.any(), // 接收日期字串
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    excerpt: z.string().optional(),
    category: z.any().optional(), // 接收 TinaCMS 傳來的分類關聯
  }),
});

// ✨ 最重要的一步：把這三個集合全部匯出給 Astro 認識
export const collections = {
  'category': categoryCollection,
  'portfolio': portfolioCollection,
  'blog': blogCollection,
};