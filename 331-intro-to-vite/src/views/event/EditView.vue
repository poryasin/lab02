<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useRouter } from 'vue-router'
import { useMassageStore } from '@/stores/message'

const props = defineProps<{
    event: Event
    id: String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)

const store = useMassageStore()
const router = useRouter()
const edit = () => {
    store.updateMessage('You are successfully ' + props.event.title)
    setTimeout(() => {
        store.resetMessage()
    }, 3000)
    router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>

<template>
    <p>Edit event here</p>
    <button @click="edit">edit</button>
</template>
