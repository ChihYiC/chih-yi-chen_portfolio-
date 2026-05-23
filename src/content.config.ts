// src/content.config.ts
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // ✨ Astro v6 的新魔法：載入器

const portfolioCollection = defineCollection({
  // ✨ v6 不再使用 type: 'content'，而是直接用 glob 去抓取資料夾裡的所有 md/mdx 檔案
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  
  // 保持終極寬鬆模式，不讓任何欄位格式錯誤阻擋專案顯示
  schema: z.object({
    title: z.string().default('Untitled Project'),
    description: z.any().optional(),
    heroImage: z.any().optional(),
    tags: z.any().optional(),        
    date: z.any().optional(),
  }).catchall(z.any()), 
});

export const collections = {
  'portfolio': portfolioCollection,
};
