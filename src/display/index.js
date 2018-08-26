import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'

import { createRouter } from './router'

Vue.use(VueRouter)

new Vue({
    router: createRouter(),
    template: '<router-view />'
}).$mount('#parcel-root')