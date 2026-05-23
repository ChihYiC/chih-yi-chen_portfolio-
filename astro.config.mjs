import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind'; // ✨ 把排版魔法加回來！

// https://astro.build/config
export default defineConfig({
  site: 'https://chihyic.github.io', // 填寫你的 GitHub 使用者帳號網址
  base: '/chih-yi-chen_portfolio-/',
  integrations: [tailwind(), tinacms()],
});