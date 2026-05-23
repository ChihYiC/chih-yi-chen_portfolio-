import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // 本地端開發不需要 Client ID 與 Token，未來部署到 GitHub 時才會用到
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "a4438f2f-3ba4-4b0b-a879-be9166cfe258",
  token: process.env.TINA_TOKEN || "0583363a99581ae5905455a8d63bbe19f154b744",

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
      // 1. UX Portfolio (作品集) 的欄位設定
      // 1. UX Portfolio (作品集) 的欄位設定
        {
          name: "portfolio",
          label: "UX Portfolio",
          path: "src/content/portfolio",
          format: "mdx",
          fields: [
            { type: "string", name: "title", label: "Project Title", isTitle: true, required: true },
            { type: "datetime", name: "date", label: "Project Date" },
            { type: "string", name: "description", label: "Short Description", ui: { component: "textarea" } },
            // 👇 就是加上下面這行！
            { type: "image", name: "heroImage", label: "Cover Image" },
            // 👆 就是加上上面這行！
            { type: "string", name: "tags", label: "Tags / Methodologies (e.g., Mixed-methods, Prototyping)", list: true },
            { type: "rich-text", name: "body", label: "Case Study Content", isBody: true },
          ],
        },
      // 2. Blog (部落格) 的欄位設定
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Post Title", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Publish Date" },
          { 
            type: "string", 
            name: "category", 
            label: "Category", 
            options: ["Human-AI Interaction", "UX Research", "AI Disclosure", "Privacy & Security"]
          },
          { type: "string", name: "summary", label: "Post Summary", ui: { component: "textarea" } },
          { type: "rich-text", name: "body", label: "Post Content", isBody: true },
        ],
      },
    ],
  },
});
