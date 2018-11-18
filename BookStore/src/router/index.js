import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import contain from '@/components/home/contain'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path:'/contain',
      component:contain,
    }
  ]
})
