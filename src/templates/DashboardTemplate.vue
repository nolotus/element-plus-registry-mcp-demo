<script setup lang="ts">
import UserCard from '../components/UserCard.vue'
import UserTable, { type DemoUser } from '../components/UserTable.vue'
const users: DemoUser[] = [
  { id: 1, name: '林晓', email: 'lin@example.com', role: '设计师', status: 'active' },
  { id: 2, name: '周舟', email: 'zhou@example.com', role: '开发者', status: 'active' },
  { id: 3, name: '陈果', email: 'chen@example.com', role: '产品经理', status: 'inactive' },
]
</script>
<template>
  <div class="dashboard-template">
    <div class="template-heading"><div><span class="eyebrow">ELEMENT PLUS / TEMPLATE</span><h2>团队仪表盘</h2><p>复用业务组件构建完整页面，适合作为 Registry 的 block 模板。</p></div><el-button plain>导出报表</el-button></div>
    <div class="stats"><div v-for="item in [{label:'团队成员',value:'24',note:'+3 本月'}, {label:'活跃项目',value:'08',note:'2 个待发布'}, {label:'任务完成率',value:'92%',note:'+8% 本周'}]" :key="item.label" class="stat"><span>{{ item.label }}</span><strong>{{ item.value }}</strong><small>{{ item.note }}</small></div></div>
    <div class="cards"><UserCard name="林晓" role="视觉设计师" email="lin@example.com"/><UserCard name="周舟" role="前端开发" email="zhou@example.com"/></div>
    <UserTable :users="users" />
  </div>
</template>
<style scoped>.dashboard-template{display:grid;gap:20px}.template-heading{display:flex;justify-content:space-between;align-items:center;gap:14px}.template-heading h2{margin:7px 0;font-size:27px}.template-heading p{margin:0;color:#8792a4;font-size:13px}.eyebrow{letter-spacing:.13em;color:#6587c5;font-weight:750;font-size:10px}.stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px}.stat{display:flex;flex-direction:column;gap:10px;padding:20px;border:1px solid #e9edf4;border-radius:16px;background:#fff}.stat span{font-size:13px;color:#818da0}.stat strong{font-size:31px;letter-spacing:-.04em}.stat small{color:#58a180}.cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}@media(max-width:650px){.stats{grid-template-columns:1fr}.cards{grid-template-columns:1fr}.template-heading{align-items:flex-start;flex-direction:column}}</style>
