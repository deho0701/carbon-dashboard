import {  createRouter, createWebHistory } from "vue-router"
import group from "./views/Group"
import measure from "./views/measureVue/Measure"
import input1 from "./views/measureVue/Input1Measure"
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
      path: "/measure/input1",
      name: "input1",
      component: input1 ,
    },
    {
      path: "/insight",
      name: "insight",
      component: insight,
    }
    
    ]
})

export default router