# GitHub Pages + shadcn-vue MCP 实操

## A. 本地运行
```bash
npm install
npm test
npm run dev
```
在本地打开 Vite 输出的地址，检查仪表盘、登录页和组件页面。`npm test` 生成并校验 `public/r/*.json`。

## B. 发布 Registry
创建**公开** GitHub 仓库，建议名 `element-plus-registry-mcp-demo`，将本项目推送到 `main`。在 Settings → Pages → Build and deployment 选择 **GitHub Actions**。推送后等待工作流通过。
默认 GitHub Pages 地址为：
`https://YOUR-USER.github.io/element-plus-registry-mcp-demo/`
Registry 项目地址如：
`https://YOUR-USER.github.io/element-plus-registry-mcp-demo/r/user-card.json`
**注意：公开 Pages 会公开组件源码（嵌入 JSON），切勿放机密组件。**

## C. 在另一个 Vue 3 项目中消费（和发布仓库分开）
1. 创建空 Vue 3 + Vite 项目，安装 `element-plus`；按官方 shadcn-vue 文档先 `init` 以生成完整 `components.json`，避免只复制部分配置导致 CLI 不可用。
2. 添加到 `components.json`：
```json
"registries": {
  "@element-lab": "https://YOUR-USER.github.io/element-plus-registry-mcp-demo/r/{name}.json"
}
```
3. 安装/配置 MCP：
```bash
pnpm dlx shadcn-vue@latest mcp init --client claude
```
4. 重启 Claude Code，运行 `/mcp` 检查 MCP 状态。然后让 Agent 搜索 `@element-lab`，或命令行使用：
```bash
pnpm dlx shadcn-vue@latest add @element-lab/user-card
```
5. 根据 CLI 安装输出确认文件位置和依赖；创建页面引用已安装的组件。根据需要导入 Element Plus CSS / 使用 `app.use(ElementPlus)`。

## D. 更新闭环
- 在**发布仓库**中编辑 `src/components/UserCard.vue`。
- 运行 `npm test`，它会重新生成 `public/r/user-card.json`。
- `git diff` 检查组件源码和 JSON，再 commit + push。
- 待 Pages 部署完，在浏览器检查新的 JSON。客户端重新安装时检查差异；同名文件更新可能需要明确覆盖确认。

## 常见误区
- MCP 不会自动监控 Git 文件，也不是能写源码的 AI。
- 修改了源码但没重新 build/push，远程 Registry 不会更新。
- Registry 可运行在静态托管上；不需要单独后端。
- shadcn-vue MCP 和 Element Plus 没有自动共享的组件清单，本项目仅发布自定义包装组件/模板。
- 部分官方 CLI 命令和选项会随版本变化，运行前参照官方文档。
