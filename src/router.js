import {  createRouter, createWebHistory } from "vue-router"
import eco from "./views/Eco.vue"
import getInfo from "./views/get_info.vue"

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: "/",
      name: "eco",
      component: eco,
    },
    {
      path: "/info",
      name: "get_info",
      component: getInfo,
    }
    ]
})

export default router