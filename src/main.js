import './assets/main.css'
import directives from '@/directives';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Vue3Mq } from "vue3-mq";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faCalendarPlus} from '@fortawesome/free-solid-svg-icons'


library.add(faCalendarPlus)

const app = createApp(App)


directives.forEach(directive => {
  app.directive(directive.name, directive)
})

app.component('font-awesome-icon', FontAwesomeIcon)


.use(Vue3Mq, {
  preset: 'devices'
})


.use(createPinia())
.use(router)

.mount('#app')
