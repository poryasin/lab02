<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'


const router = useRouter()
const events = ref<Event[]>([])
const totalEvents = ref(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / size.value)
  return page.value < totalPages
})

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
   size: {
    type: Number,
    required: true
  }
})
const page = computed(() => props.page)
const size = computed(() => props.size)
onMounted(() => {
 watchEffect(() => {
  EventService.getEvents(size.value, page.value)
    .then((response) => {
      events.value = response.data
      totalEvents.value = Number(response.headers['x-total-count'])
    })
    .catch(() => {
      router.push({ name: 'network-error-view' })
    })
})
})
</script>


<template>
  <h1>Events For Good</h1>
  <div class="flex flex-col items-center">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <RouterLink
      id="page-prev"
      class="flex-1 text-left"
      :to="{ name: 'event-list-view', query: { page: page - 1, size: size } }" rel="prev" v-if="page != 1">
        &#60; Prev Page</RouterLink>


      <RouterLink id="page-next"
      class="flex-1 text-right"
      :to="{ name: 'event-list-view', query: { page: page + 1,size:size } }" rel="next"
        v-if="hasNextPage">Next Page &#62;</RouterLink>
    </div>
  </div>

</template>

