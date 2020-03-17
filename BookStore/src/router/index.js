import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../page/login.vue')
    },
    {
      path: '/home',
      component: () => import('../components/home.vue'),
      children: [
        {
          path: '',
          redirect: 'content',
        },
        {
          path: 'content',
          component: () => import('../components/content.vue')
        },
        {
          path: 'componey',
          component: () => import('../components/componey.vue')
        },
        {
          path: 'message',
          component: () => import('../components/message.vue')
        },
        {
          path: 'own',
          component: () => import('../components/own.vue')
        }
      ]
    }
  ]
});


