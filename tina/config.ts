import { defineConfig } from "tinacms";

// 自訂顏色提示框模板
const calloutTemplate = {
  name: "Callout",
  label: "🎨 自訂顏色提示框",
  fields: [
    {
      name: "color",
      label: "選擇顏色 (HEX)",
      type: "string",
      ui: { component: "color" },
    },
    {
      name: "text",
      label: "文字內容",
      type: "string",
      ui: { component: "textarea" },
      required: true,
    },
  ],
};

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images", 
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "category",
        label: "Categories (分類管理)",
        path: "src/content/category",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "分類名稱",
            isTitle: true,
            required: true,
          },
        ],
      },
      {
        name: "projects", 
        label: "Projects",
        path: "src/content/projects",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "heroImageAlt", label: "Image Alt Text (SEO)" },
          {
            type: "reference",
            name: "category",
            label: "專案分類",
            collections: ["category"], 
          },
          {
            type: "rich-text",
            name: "body",
            label: "Case Study Content",
            isBody: true,
            templates: [calloutTemplate], 
          },
        ],
      },
      {
        name: "research",
        label: "Research",
        path: "src/content/research",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          {
            type: "rich-text",
            name: "body",
            label: "Research Findings",
            isBody: true,
            templates: [calloutTemplate],
          },
        ],
      },
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "mdx", 
        // ✨ 已移除 router 區塊，關閉即時預覽
        fields: [
          { type: "string", name: "title", label: "Post Title", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Publish Date", required: true },
          { type: "image", name: "heroImage", label: "Cover Image" },
          { type: "string", name: "heroImageAlt", label: "Image Alt Text (SEO)" },
          {
            type: "reference",
            name: "category",
            label: "文章分類",
            collections: ["category"], 
          },
          { type: "string", name: "excerpt", label: "Excerpt (文章摘要)", ui: { component: "textarea" } },
          {
            type: "rich-text",
            name: "body",
            label: "Blog Content",
            isBody: true,
            templates: [calloutTemplate], 
          },
        ],
      },
    ],
  },
});