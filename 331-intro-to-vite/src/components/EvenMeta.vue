<!-- src/components/EventMeta.vue -->
<template>
  <div class="event-meta">
    <p>{{ category }}</p>
    <p>{{ organizer }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  category: string
  organizer: string
}>()
</script>

<style scoped>
.event-meta {
  text-align: right;
  font-size: 16px;
}
</style>
