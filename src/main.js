import './assets/main.css'
import directives from '@/directives';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faCalendarPlus, faTrash, faXmark} from '@fortawesome/free-solid-svg-icons'



library.add(faCalendarPlus, faTrash, faXmark)

const app = createApp(App)


directives.forEach(directive => {
  app.directive(directive.name, directive)
})

app.component('font-awesome-icon', FontAwesomeIcon)


.use(router)

.mount('#app')
