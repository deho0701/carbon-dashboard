import {  createRouter, createWebHistory } from "vue-router"
import eco from "./views/Eco.vue"

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: "/",
      name: "eco",
      component: eco,
    },
    ]
})

export default router