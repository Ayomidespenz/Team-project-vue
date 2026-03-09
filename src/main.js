
import { createApp } from 'vue';
import './assets/main.css';
import './style.css'
import App from './App.vue'
import router from './router'
import 'animate.css';
import { Icon } from '@iconify/vue'

const app = createApp(App).use(router)
app.component('Icon', Icon)
app.mount('#app')
