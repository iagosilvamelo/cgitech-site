import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import scrollToPlugin from './plugins/scrollTo'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(scrollToPlugin, { offset: 100 })

app.provide('links', {
  whatsapp: 'https://wa.me/5551991714144',
  instagram: 'https://www.instagram.com/cgi.technology/',
  facebook: 'https://www.facebook.com/profile.php?id=61575501173137',
  linkedin: 'https://www.linkedin.com/company/106373849',
})

app.mount('#app')
