<script setup lang="ts">
withDefaults(defineProps<{ name: string; role?: string; email?: string; status?: 'active' | 'inactive' }>(), { role: '成员', email: '', status: 'active' })
</script>
<template>
  <el-card shadow="hover" class="user-card">
    <div class="user-card__inner">
      <el-avatar :size="44" class="user-card__avatar">{{ name.slice(0, 1) }}</el-avatar>
      <div class="user-card__info">
        <strong>{{ name }}</strong><span>{{ role }} · {{ email }}</span>
      </div>
      <el-tag :type="status === 'active' ? 'success' : 'info'" effect="light">{{ status === 'active' ? '活跃' : '停用' }}</el-tag>
    </div>
  </el-card>
</template>
<style scoped>
.user-card__inner{display:flex;align-items:center;gap:14px;min-width:0}.user-card__avatar{background:#e7efff;color:#3972d1;flex:none}.user-card__info{min-width:0;display:flex;flex:1;flex-direction:column;gap:6px}.user-card__info span{font-size:12px;color:#8a93a5;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
</style>
