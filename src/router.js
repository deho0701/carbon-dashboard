import {  createRouter, createWebHistory } from "vue-router"
import group from "./views/Group"
import measure from "./views/Measure"
import insight from "./views/Insight"
import settingg from "./views/get_info2"

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: "/",
      name: "group",
      component: group,
    },
    {
      path: "/measure",
      name: "measure",
      component: measure,
    },
    {
      path: "/insight",
      name: "insight",
      component: insight,
    },
    {
      path: "/setting",
      name: "settingg",
      component: settingg,
    }
    
    ]
})

export default router