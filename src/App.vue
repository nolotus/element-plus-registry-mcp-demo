<script setup lang="ts">
import { computed, ref } from 'vue'
import { ElMessage } from 'element-plus'
import SaveButton from './components/SaveButton.vue'
import UserCard from './components/UserCard.vue'
import UserTable, { type DemoUser } from './components/UserTable.vue'
import DashboardTemplate from './templates/DashboardTemplate.vue'
import LoginTemplate from './templates/LoginTemplate.vue'
const current = ref('dashboard')
const loading = ref(false)
const tabs = [{key:'dashboard',label:'仪表盘模板',type:'BLOCK'}, {key:'login',label:'登录模板',type:'BLOCK'}, {key:'components',label:'组件库',type:'COMPONENTS'}, {key:'registry',label:'Registry 原理',type:'REFERENCE'}]
const activeTab = computed(() => tabs.find(tab => tab.key === current.value)!)
const users: DemoUser[] = [{id:1,name:'林晓',email:'lin@example.com',role:'设计师',status:'active'},{id:2,name:'周舟',email:'zhou@example.com',role:'开发者',status:'active'}]
const save = () => { loading.value = true; setTimeout(() => { loading.value = false; ElMessage.success('保存成功（模拟操作）') }, 650) }
</script>
<template>
  <div class="shell"><aside class="sidebar"><div class="brand"><div class="brand-icon">E</div><div><b>ELEMENT LAB</b><span>Registry × MCP Workshop</span></div></div><div class="side-label">WORKSPACE</div><nav><button v-for="tab in tabs" :key="tab.key" :class="['navitem',{active:current===tab.key}]" @click="current=tab.key"><span>{{tab.label}}</span><small>{{tab.type}}</small></button></nav><div class="sidebar-foot"><div class="status-dot"></div><span>Vue 3 · Element Plus · shadcn-vue</span></div></aside>
  <main class="main"><header class="topbar"><div class="crumb">Workshop <span>/</span> {{activeTab.label}}</div><a href="https://github.com/nolotus" target="_blank" rel="noreferrer">GitHub ↗</a></header><div class="content"><div class="intro"><div><div class="overline">DESIGN SYSTEM / LEARNING PLAYGROUND</div><h1>{{activeTab.label}}</h1><p>用 Element Plus 维护自己的 Vue 组件和模板，并通过 Registry + MCP 供 AI Agent 调用。</p></div><span class="pill">LIVE PREVIEW</span></div>
  <DashboardTemplate v-if="current==='dashboard'"/><LoginTemplate v-else-if="current==='login'"/>
  <section v-else-if="current==='components'" class="showcase"><article class="demo"><span class="caption">01 · SaveButton.vue</span><h3>业务按钮</h3><p>内部封装 el-button，统一行为和默认文案。</p><SaveButton :loading="loading" @save="save"/></article><article class="demo"><span class="caption">02 · UserCard.vue</span><h3>用户卡片</h3><p>封装头像、角色、邮箱和状态。</p><UserCard name="林晓" role="设计师" email="lin@example.com"/></article><article class="demo wide"><span class="caption">03 · UserTable.vue</span><h3>用户表格</h3><p>封装 el-table，提供过滤和状态展示。</p><UserTable :users="users" /></article></section>
  <section v-else class="explain"><div class="step" v-for="(s,i) in [{name:'组件源码',desc:'src/components/ 与 src/templates/ — 由设计师和 Agent 维护'}, {name:'registry.json',desc:'登记组件名称、描述、依赖和源码文件'}, {name:'静态 JSON',desc:'npm run registry:build 产出 public/r/*.json'}, {name:'MCP / CLI',desc:'配置 components.json，让 Claude Code 搜索和安装组件'}]" :key="s.name"><div class="step-no">0{{i+1}}</div><div><b>{{s.name}}</b><p>{{s.desc}}</p></div></div><p class="hint">当前站点用于预览，详细教程见 docs/ 目录。发布 GitHub Pages 后，组件 JSON 可通过 /r/*.json 被读取。</p></section>
  <footer>ELEMENT LAB · Open teaching demo · No backend or real user data</footer></div></main></div>
</template>
