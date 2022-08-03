import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import Toaster from '@meforma/vue-toaster'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


createApp(App).use(router).use(BootstrapVue3).use(Toaster).use(BootstrapIconsVue).mount('#app')
