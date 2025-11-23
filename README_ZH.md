<a href="https://chat.vercel.ai/">
  <img alt="Next.js 14 和 App Router 就绪的 AI 聊天机器人。" src="app/(chat)/opengraph-image.png">
  <h1 align="center">Chat SDK</h1>
</a>

<p align="center">
    Chat SDK 是一个免费、开源的模板，使用 Next.js 和 AI SDK 构建，帮助你快速构建强大的聊天机器人应用程序。
</p>

<p align="center">
  <a href="https://chat-sdk.dev"><strong>阅读文档</strong></a> ·
  <a href="#功能特性"><strong>功能特性</strong></a> ·
  <a href="#模型提供商"><strong>模型提供商</strong></a> ·
  <a href="#部署你自己的版本"><strong>部署你自己的版本</strong></a> ·
  <a href="#本地运行"><strong>本地运行</strong></a>
</p>
<br/>

## 功能特性

- [Next.js](https://nextjs.org) App Router
  - 高级路由，实现无缝导航和高性能
  - React 服务器组件（RSCs）和服务器操作，用于服务器端渲染和提升性能
- [AI SDK](https://ai-sdk.dev/docs/introduction)
  - 统一的 API，用于使用大语言模型生成文本、结构化对象和工具调用
  - 用于构建动态聊天和生成式用户界面的 Hooks
  - 支持 xAI（默认）、OpenAI、Fireworks 和其他模型提供商
- [shadcn/ui](https://ui.shadcn.com)
  - 使用 [Tailwind CSS](https://tailwindcss.com) 进行样式设计
  - 来自 [Radix UI](https://radix-ui.com) 的组件基元，提供无障碍性和灵活性
- 数据持久化
  - [Neon Serverless Postgres](https://vercel.com/marketplace/neon) 用于保存聊天历史和用户数据
  - [Vercel Blob](https://vercel.com/storage/blob) 用于高效的文件存储
- [Auth.js](https://authjs.dev)
  - 简单而安全的身份验证

## 模型提供商

此模板使用 [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) 通过统一接口访问多个 AI 模型。默认配置包括通过网关路由的 [xAI](https://x.ai) 模型（`grok-2-vision-1212`、`grok-3-mini`）。

### AI Gateway 身份验证

**对于 Vercel 部署**：身份验证通过 OIDC 令牌自动处理。

**对于非 Vercel 部署**：你需要通过在 `.env.local` 文件中设置 `AI_GATEWAY_API_KEY` 环境变量来提供 AI Gateway API 密钥。

通过 [AI SDK](https://ai-sdk.dev/docs/introduction)，你还可以只用几行代码切换到直接的大语言模型提供商，如 [OpenAI](https://openai.com)、[Anthropic](https://anthropic.com)、[Cohere](https://cohere.com/) 以及[更多提供商](https://ai-sdk.dev/providers/ai-sdk-providers)。

## 部署你自己的版本

你可以一键将自己的 Next.js AI 聊天机器人版本部署到 Vercel：

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/templates/next.js/nextjs-ai-chatbot)

## 本地运行

你需要使用 [`.env.example` 中定义的环境变量](.env.example) 来运行 Next.js AI 聊天机器人。建议使用 [Vercel 环境变量](https://vercel.com/docs/projects/environment-variables)，但只需要一个 `.env` 文件即可。

> 注意：你不应该提交你的 `.env` 文件，否则会暴露秘密信息，允许其他人控制访问你的各种 AI 和身份验证提供商账户。

1. 安装 Vercel CLI：`npm i -g vercel`
2. 将本地实例与 Vercel 和 GitHub 账户关联（创建 `.vercel` 目录）：`vercel link`
3. 下载你的环境变量：`vercel env pull`

```bash
pnpm install
pnpm db:migrate # 设置数据库或应用最新的数据库更改
pnpm dev
```

你的应用模板现在应该在 [localhost:3000](http://localhost:3000) 上运行了。

