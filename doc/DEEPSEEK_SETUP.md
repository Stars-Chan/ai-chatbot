# DeepSeek API 配置指南

## 获取 DeepSeek API Key

1. 访问 [DeepSeek 开放平台](https://platform.deepseek.com)
2. 注册或登录你的账户
3. 进入 API Keys 管理页面
4. 创建一个新的 API Key
5. 复制生成的 API Key

## 配置环境变量

在项目根目录创建 `.env.local` 文件（如果还没有的话），并添加以下内容：

```bash
# DeepSeek API 配置
DEEPSEEK_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# 数据库配置（如果你还没有配置）
POSTGRES_URL=your_postgres_connection_string

# 认证配置
AUTH_SECRET=your_random_secret_string_here
```

## 可用的模型

当前配置使用以下 DeepSeek 模型：

- **deepseek-chat**: 主要的对话模型，用于一般聊天、标题生成和 artifact 创建
- **deepseek-reasoner**: 专门的推理模型，用于复杂的思维链推理任务

## 测试配置

配置完成后，运行以下命令启动开发服务器：

```bash
pnpm install  # 如果还没有安装依赖
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 并尝试发送一条消息来测试连接。

## 常见问题

### 404 Not Found 错误

如果遇到 404 错误，请检查：

- API Key 是否正确配置
- 环境变量名称是否为 `DEEPSEEK_API_KEY`
- 是否重启了开发服务器（修改 `.env.local` 后需要重启）

### API Key 无效

确保：

- API Key 以 `sk-` 开头
- API Key 已在 DeepSeek 平台激活
- 账户有足够的额度

### 模型名称错误

DeepSeek 支持的模型名称：

- `deepseek-chat` - 通用对话模型
- `deepseek-reasoner` - 推理模型

## 切换回其他模型

如果需要切换到其他 AI 提供商（如 OpenAI、Anthropic 等），请参考 `lib/ai/providers.ts` 文件并根据 [AI SDK 文档](https://ai-sdk.dev/providers/ai-sdk-providers)进行配置。
