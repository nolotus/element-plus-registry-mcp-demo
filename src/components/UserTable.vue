<script setup lang="ts">
import { computed, ref } from 'vue'
export interface DemoUser { id: number; name: string; email: string; role: string; status: 'active' | 'inactive' }
const props = withDefaults(defineProps<{ users: DemoUser[]; loading?: boolean }>(), { loading: false })
const keyword = ref('')
const filtered = computed(() => props.users.filter(u => `${u.name} ${u.email}`.toLowerCase().includes(keyword.value.toLowerCase())))
</script>
<template>
  <section class="table-panel">
    <div class="table-toolbar"><div><h3>团队成员</h3><p>快速查找并查看成员状态</p></div><el-input v-model="keyword" placeholder="搜索姓名或邮箱" clearable style="width:220px" /></div>
    <el-table :data="filtered" :loading="loading" stripe style="width:100%">
      <el-table-column prop="name" label="姓名" min-width="110" />
      <el-table-column prop="email" label="邮箱" min-width="190" />
      <el-table-column prop="role" label="角色" min-width="100" />
      <el-table-column label="状态" width="100"><template #default="scope"><el-tag :type="scope.row.status === 'active' ? 'success' : 'info'">{{ scope.row.status === 'active' ? '活跃' : '停用' }}</el-tag></template></el-table-column>
    </el-table>
  </section>
</template>
<style scoped>.table-panel{background:white;border:1px solid #e9edf4;border-radius:16px;padding:20px}.table-toolbar{display:flex;align-items:center;justify-content:space-between;gap:15px;margin-bottom:16px}.table-toolbar h3{margin:0 0 6px;font-size:17px}.table-toolbar p{margin:0;color:#8a93a5;font-size:13px}@media(max-width:650px){.table-toolbar{align-items:stretch;flex-direction:column}.table-toolbar :deep(.el-input){width:100%!important}}</style>
