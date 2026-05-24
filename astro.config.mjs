import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // ✨ 如果在開發環境，base 就是根目錄 (/)；發佈時才使用子目錄路徑
  base: process.env.NODE_ENV === 'production' ? '/chih-yi-chen_portfolio-/' : '/',
  
  integrations: [tailwind(), mdx()],
});