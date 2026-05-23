// ✨ 1. 在最上方匯入 typography 外掛
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',   // 深藍色
        secondary: '#38BDF8', // 亮藍色
        accent: '#E0F2FE',    // 淺藍色
        surface: '#F8FAFC',   // 淺灰背景
        slate: '#334155',     // 深灰文字
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  // ✨ 2. 外掛必須放在這裡 (與 theme 和 content 同一級)
  plugins: [
    typography,
  ],
}