import {  createRouter, createWebHistory } from "vue-router"
import group from "./views/Group"
import measure from "./views/Measure"
import insight from "./views/Insight"


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
    
    ]
})

export default router