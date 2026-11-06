# 课前预备知识（设计师版，约 2–3 小时）

## 1. 组件是什么？（25 分钟）
Vue 组件是可复用的界面模块。`<template>` 是结构，`<script setup>` 是行为和输入，`<style>` 是样式。`Props` 控制组件输入，`emits` 向外报告操作，`slots` 允许传入任意内容。
练习：在 `SaveButton.vue` 修改默认 label，刷新网页观察变化。

## 2. Element Plus 是什么？（25 分钟）
Element Plus 是 Vue 3 的 UI 组件库。`<el-button>` / `<el-input>` / `<el-table>` 提供基础组件；我们的业务组件在其之上做封装。请查看官网 Props、Events、Slots 示例。
练习：把保存按钮类型从 `primary` 改成 `success`，再恢复。

## 3. npm、CLI、项目目录（25 分钟）
`package.json` 是依赖与脚本清单；`npm install` 安装依赖，`npm run dev` 启动预览；`src/` 是源码，`public/r/` 是对外发布的 Registry JSON。
练习：启动项目，找到 Dashboard.vue 的源码。

## 4. JSON 和 Registry（30 分钟）
JSON 是数据格式。`registry.json` 登记组件名字、介绍、文件位置、依赖；`npm run registry:build` 把源码嵌入单独 JSON，供外部 CLI / MCP 消费。不要把 Registry 理解成数据库或 MCP。
练习：找到 `user-card` 的 `description` 并更改，重新构建。

## 5. MCP、Agent、Git（35 分钟）
Agent 做决策并编辑文件；MCP 是标准化工具接口；shadcn-vue MCP 让 Agent 读取与安装 Registry 内容。Git 保存变更历史，提交前检查 diff。
练习：让 Agent 修改 UserCard 圆角，查看 diff，预览确认后才提交。

不需要先学习如何自己实现 MCP Server、JSON-RPC、复杂版本发布系统或数据库。
