<script setup lang="ts">
import { toRefs} from 'vue';
import { type Event } from '@/types';
import { useRouter } from 'vue-router'
import { useMassageStore } from '@/stores/message'


const props = defineProps<{
    event: Event
    id: String
}>()
//esline-disable-next-line @typescript-eslint/no-unused-vars
const {event} = toRefs (props)
const router = useRouter()
const store = useMassageStore()

function saveAndRedirect() {
  // **จำลองว่าเซฟข้อมูลเสร็จ**
  store.message = 'The data has been updated'
  router.push({ name: 'event-detail-view', params: { id: 123 } }) // เปลี่ยน id ให้ถูก
}

</script>

<template>
   <p>Edit event here</p>
    <button @click="saveAndRedirect">Save & Go to Details</button>
</template>