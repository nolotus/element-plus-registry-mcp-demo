# 6 小时课程 — Element Plus + Registry + MCP

| 时间 | 内容 | 验收 |
|---|---|---|
| 0:00–1:00 | Vue / Element Plus，组件、Props、事件、页面模板 | 能独立修改 SaveButton |
| 1:00–2:00 | 封装 UserCard、UserTable，组合 Dashboard | 看见修改后的页面 |
| 2:00–3:20 | registry.json、Build、JSON / HTTP | 5 个 JSON 可被访问 |
| 3:20–4:20 | 配置 Registry 与官方 MCP | Agent 可搜索、读取、安装自定义组件 |
| 4:20–5:20 | 自然语言维护、添加/修改、重新构建 | 修改组件后重新发布并获取新版 |
| 5:20–6:00 | Git diff、回退与独立练习 | 能解释每层职责并操作闭环 |

## 讲师实操验收
1. `npm install && npm run dev`，浏览器切换两个页面模板与组件展示。
2. `npm test` 验证 5 个组件/模板 Registry 项目。
3. 发布 GitHub Pages，打开 `/r/user-card.json` 检查是否含 `content`。
4. 在**另一个已初始化 shadcn-vue 的 Vue 项目**中配置 `components.json` 的 `registries`，启动 MCP，测试 Agent 是否能列出 `@element-lab`、检索 `user-card`、安装并预览。
5. 修改 `UserCard.vue` 的样式，重新构建、提交、发布，在消费项目再获取更新内容，检查 diff。

## 可直接复制给 Agent 的任务
- 请搜索 `@element-lab` registry 中包含 user 的组件，告诉我用途、文件和依赖，不要先安装。
- 请安装 `@element-lab/user-card`，然后新建页面展示林晓，注意项目依赖 Element Plus。
- 请更新组件源码使头像为方圆角，保留姓名与状态显示，修改后检查 diff、运行构建和测试。
- 请创建团队活动列表组件，补充 `registry.json` 并构建，显示新增的 JSON 地址。

## 评估准则
每项 0/1 分：能看见预览；能说出源码与 JSON 区别；Agent 找到指定组件；组件成功安装；修改重新构建生效；能用 Git 回退。建议 5/6 通过。
