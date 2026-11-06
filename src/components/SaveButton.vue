<script setup lang="ts">
withDefaults(defineProps<{ loading?: boolean; label?: string }>(), { loading: false, label: '保存' })
const emit = defineEmits<{ save: [] }>()
</script>
<template>
  <el-button type="primary" :loading="loading" @click="emit('save')">{{ label }}</el-button>
</template>
