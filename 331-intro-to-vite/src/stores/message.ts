import type { MessageState } from "@/types";
import { defineStore } from "pinia";
export const useMassageStore = defineStore('message',{
    state: (): MessageState => ({
        message: ''
    }),
    actions: {
        updateMessage(message: string): void {
            this.message = message
        },
        resetMessage(): void {
            this.message =''
        }
    }
})