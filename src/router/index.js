import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import vcr1 from '@/pages/mp4/vcr1'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: home
        },
        {
            path: '/vcr1',
            name: 'vcr1',
            component: vcr1
        }
    ]
})
