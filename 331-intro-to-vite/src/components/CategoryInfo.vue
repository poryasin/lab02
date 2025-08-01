<script setup lang="ts">
import type { Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="CategoryInfo">
    <h2>Category :{{ event.category }}</h2>
    <h2>Organizer :{{ event.organizer }}</h2>
  </div>
</template>

<style scoped>
.CategoryInfo {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  margin-bottom: 18px;
  font-size: 10px;
  text-align: right;
}
</style>