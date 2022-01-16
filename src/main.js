import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import 'bootstrap'
// import store from './store/index.js'

import { IconsPlugin } from 'bootstrap-vue'


// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
    el: '#app',
    router,
    axios,
    // store,
    render: h => h(App)
})
