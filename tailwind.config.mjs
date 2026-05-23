/** @type {import('tailwindcss').Config} */
export default {
  // 這裡告訴 Tailwind 要去哪裡尋找 class 名稱
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // 這裡就是我們自訂的專屬調色盤！
      colors: {
        primary: '#1E3A8A',   // 深藍色 (按鈕背景)
        secondary: '#38BDF8', // 亮藍色 (點擊效果)
        accent: '#E0F2FE',    // 淺藍色 (標籤背景)
        surface: '#F8FAFC',   // 淺灰背景
        slate: '#334155',     // 深灰文字
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
