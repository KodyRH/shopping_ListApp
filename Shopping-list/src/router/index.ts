import { createRouter, createWebHistory } from 'vue-router'
import shoppingListIndex from '@/views/shopping-list-index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shopping-list-index',
      component: shoppingListIndex,
    },
   
  ],
})

export default router
