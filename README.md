# Element Plus × Registry × MCP — Designer Workshop

Vue 3 + Element Plus 示例项目：**3 个可维护业务组件、2 个页面模板、5 个 shadcn-vue 兼容 Registry 项**，以及可用 GitHub Pages 部署的静态 Registry。

## 快速开始
```bash
npm install
npm test
npm run dev
```
运行 Vite 打印的地址。`npm test` 构建并检查 `public/r/*.json`；`npm run build` 会 TypeScript 检查和前端打包。

## 文件说明
- `src/components/` — SaveButton、UserCard、UserTable，内部用 Element Plus。
- `src/templates/` — DashboardTemplate、LoginTemplate，组成业务页面。
- `registry.json` — 注册每个可分发资源及其依赖、源文件、目标路径。
- `scripts/build-registry.mjs` — 构建兼容 Registry Item 格式的独立 JSON，把源码作为 `files[].content` 嵌入。
- `public/r/` — 分发文件；`npm test` 后自动生成。
- `components.example.json` — 在**单独消费项目**中的 Registry 地址示例，不是可直接替换的完整工作配置。
- `docs/` — 设计师预习材料、6 小时课程、MCP 与 GitHub Pages 操作指南。
- `AGENTS.md` — Agent 维护规范。

## 三层架构
**Element Plus** 提供基础 Vue UI。**Registry** 负责描述和分发我们自己的 Vue 业务组件/模板。**shadcn-vue MCP** 向 Claude Code 等 Agent 提供 Registry 搜索、读取、安装接口。**Agent**（而不是 MCP）负责修改源码、检查 diff、执行测试和提交。

## Registry 测试
```bash
npm test
cat public/r/user-card.json
```
成功时包含 `files[0].content`、`target`、`dependencies: ["element-plus"]`。外部 MCP 使用者访问 HTTP URL，而不是仓库源码路径。

## 学习顺序
从 [预备知识](docs/00-prerequisites.md) → [课程表](docs/01-workshop.md) → [MCP/部署步骤](docs/02-mcp-setup.md)。

## 部署
附带 GitHub Actions workflow。发布到名为 `element-plus-registry-mcp-demo` 的公开仓库，Pages 选 GitHub Actions 后，组件 URL 应为 `https://YOUR-USER.github.io/element-plus-registry-mcp-demo/r/user-card.json`。若修改仓库名称，需要同步改 `vite.config.ts` 中的 `base` 设置以及文档 URL。

## 边界与说明
- 本仓库不是 Element Plus 全量源码 Registry，也不包含自定义 MCP Server。
- 登录页仅作前端 UI 示例，不做认证。
- 生成的 Registry 是静态 JSON，**公开托管会暴露组件源代码**。
- 未向 GitHub 发布前，远程 MCP 无法访问本 Registry。
- 依赖安装、Vite 生产打包、MCP 与远程安装应在有 npm 网络的环境完成最终端到端验收。

参考：[Element Plus](https://element-plus.org/zh-CN/guide/quickstart.html) · [shadcn-vue Registry](https://shadcn-vue.com/docs/registry/getting-started) · [shadcn-vue MCP](https://shadcn-vue.com/docs/mcp)

## 许可证

MIT，见 [`LICENSE`](LICENSE)。本仓库的示例组件与模板可自由复用、修改与再分发；Element Plus 按它自己的 MIT 许可提供。
