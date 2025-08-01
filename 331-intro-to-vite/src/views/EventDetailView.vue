<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { type Event } from '@/types';
import EventService from '@/services/EventService';
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import { useMassageStore } from '@/stores/message'

const event = ref < Event | null> (null)
const router = useRouter()


// Pinia store สำหรับ flash message
const store = useMassageStore()
const { message } = storeToRefs(store)

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
onMounted(() => {
    EventService.getEvent(parseInt(props.id))
    .then((response) => {
        event.value = response.data
    })
    .catch((error) =>{
     console.error('There was an error!', error)
      if (error.response && error.response.status === 404) {
        router.push({ name: 'NotFound', params: { resource: 'event' } })
      } else {
        router.push({ name: 'NetworkError' })
      }    })
    // ลบ flash message หลัง 3 วินาที
  if (message.value) {
    setTimeout(() => {
      store.message = ''
    }, 3000)
  }
})

</script>

<template>
  <div v-if="event">
    <!-- Flash Message -->
    <div v-if="message" id="flashMessage">
      <h4>{{ message }}</h4>
    </div>

    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<style>
@keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}
#flashMessage {
  animation: yellofade 3s ease-in-out;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
}
</style>