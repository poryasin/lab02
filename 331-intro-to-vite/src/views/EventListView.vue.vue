<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EvenMeta from '@/components/EvenMeta.vue'
import type { Event } from '@/types.ts'
import { ref } from 'vue'

const events = ref<Event[]>([
  {
    id: 5928101,
    category: 'animal welfare',
    title: 'Cat Adoption Day',
    description: 'Find your new feline friend at this event.',
    location: 'Meow Town',
    date: 'January 28, 2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Laydee'
  },
  {
    id: 4582797,
    category: 'food',
    title: 'Community Gardening',
    description: 'Join us as we tend to the community edible plamts.',
    location: 'Flora City',
    date: 'March 14, 2022',
    time: '10:00',
    petsAllowed: true,
    organizer: 'Fern Pollin'

  },
  {
    id: 8419988,
    category: 'sustainability',
    title: 'Beach Cleanup',
    description: 'Help pick up trash along the shore.',
    location: 'Playa Del Carmen',
    date: 'July 22, 2022',
    time: '11:00',
    petsAllowed: false,
    organizer: 'Carey Wales'
  },
  {
      id: 111111,
      category: "test",
      title: "porya",
      description: "yark go home leawww.",
      location: "cmu",
      date: "July 04, 2025",
      time: "14:35",
      petsAllowed: false,
      organizer: "prai"
  }
])


</script>

<template>
   <h1>Events For Good</h1>
    <!--new element-->
  <div class="events">
    <div v-for="event in events" :key="event.id" class="event-block">
      <EventCard :event="event" />
      <EvenMeta :category="event.category" :organizer="event.organizer" />
    </div>  </div>
</template>


<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-block{
  margin-bottom: 20px;
}

</style>
