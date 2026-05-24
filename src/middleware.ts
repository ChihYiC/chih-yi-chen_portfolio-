// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = context.url;
  
  // 如果 TinaCMS 誤傳了這種路徑，強制把它導向正確的 Astro 頁面
  if (url.pathname.includes('/~/')) {
    const fixedPath = url.pathname.replace('/~/', '/');
    return context.redirect(fixedPath);
  }
  
  return next();
});