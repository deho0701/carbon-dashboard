import {  createRouter, createWebHistory } from "vue-router"
import eco from "./views/Eco.vue"
import getInfo from "./views/get_info.vue"
import page1 from "./views/get_info2.vue"
import page2 from "./views/get_info3.vue"
import page3 from "./views/get_info4.vue"

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
    },
    {
      path: "/info/page1",
      name: "page1",
      component: page1,
    },
    {
      path: "/info/page1/page2",
      name: "page2",
      component: page2,
    },
    {
      path: "/info/page1/page2/page3",
      name: "page3",
      component: page3,
    }
    ]
})

export default router