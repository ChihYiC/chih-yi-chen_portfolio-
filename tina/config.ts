import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "", // 這裡修正了原本少掉的一個雙引號

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // ✨ 關鍵：確保這幾行存在，並確認 mediaRoot 設定正確
  media: {
    tina: {
      mediaRoot: "images", // 這代表你的圖片會存在 public/images/
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "portfolio",
        label: "UX Portfolio",
        path: "src/content/portfolio",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Project Title", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Project Date" },
          { type: "string", name: "description", label: "Short Description", ui: { component: "textarea" } },
          { type: "image", name: "heroImage", label: "Cover Image" }, // TinaCMS 會自動處理路徑
          { type: "string", name: "tags", label: "Tags", list: true },
          { type: "rich-text", name: "body", label: "Case Study Content", isBody: true },
        ],
      },
      // ... 其餘設定
    ],
  },
});