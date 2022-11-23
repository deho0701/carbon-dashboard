<template>
    <div class="measure-main">
        <navigation class="navigation"/>
    </div>
  </template>
  
  
  <style>
  .navigation{
    z-index: 1;
    position:fixed;
  }
  </style>
  
  
  <script>
  import navigation from "@/components/Navigation.vue"
    export default {
        name :"insight",
        components:{
            navigation,
        },
        data() {
  
        },
    }
  </script>