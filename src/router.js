import {  createRouter, createWebHistory } from "vue-router"
import login from "./views/Login"
import group from "./views/Groups/Group"
import employee from "./views/Groups/Employee"
import measure from "./views/measureVue/Measure"
import input1 from "./views/measureVue/Input1Measure"
import register from "./views/measureVue/Register"
import insight from "./views/Insight"
import setting from "./views/Setting/Setting"
import survey from "./views/Survey"
import zaju from "./views/Drone"





const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: "/",
      name: "login",
      component: login,
    },
    {
      path: "/group/employee",
      name: "employee",
      component: employee,
    },
    {
      path: "/group",
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
      path: "/measure/register",
      name: "register",
      component: register,
    },
    {
      path: "/insight",
      name: "insight",
      component: insight,
    },
    {
      path: "/setting",
      name: "setting",
      component: setting,
    },
    {
      path: "/survey",
      name: "survey",
      component: survey,
    },{
      path: "/zaju",
      name: "zaju",
      component: zaju,
    }
    
    
    ]
})

export default router