//import './assets/main.css'
import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import { Analytics } from "@vercel/analytics/next"

// Pass an empty object or appropriate props if needed
Analytics({})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
