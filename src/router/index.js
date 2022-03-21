import { createRouter, createWebHistory } from 'vue-router'
import adminloginView from '../views/adminloginView.vue'
import backstagemanagementView from '../views/backstagemanagementView.vue'
import messageView from '../views/messageView.vue'
import moodframView from '../views/moodframView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: moodframView,
    // redirect: '/moodfram',
  },
  //{
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/adminloginView',
    name: 'adminlogin',
    component: adminloginView,
  },
  {
    path: '/backstagemanagementView',
    name: 'backstagemanagement',
    component: backstagemanagementView,
  },
  {
    path: '/messageView',
    name: 'message',
    component: messageView,
  },
  // {
  //   path: '/',
  //   name: 'moodfram',
  //   component: moodframView,
  // },
  // {
  //   path: '/404',
  //   name: '404',
  //   component: () => import('@/components/Page404Component.vue'),
  // },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },



];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
