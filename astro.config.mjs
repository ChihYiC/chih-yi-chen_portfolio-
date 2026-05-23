import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://chihyic.github.io',
  base: '/chih-yi-chen_portfolio-/',
  integrations: [
    mdx(), 
    tailwind()
    // 注意：TinaCMS 通常不需要放在這裡的 integrations 陣列中，
    // 它是透過 admin 資料夾內的設定與你的應用程式溝通的。
  ],
});