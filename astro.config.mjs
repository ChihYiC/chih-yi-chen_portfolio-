import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind'; // ✨ 把排版魔法加回來！

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind() // ✨ 啟動排版魔法！
  ]
});