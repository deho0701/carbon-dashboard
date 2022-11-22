<template>
    <div class="dashboard" id="dashboard6">
        <chart6 style="  height: auto;"></chart6>
    </div>
</template>

<style>
    #dashboard6{
        float: left;
        width: 21vw;
        height: 35vh;
        padding: 2%;
    }
</style>

<script>
import chart6 from './chart6';
  export default {
      name :"dashboard_6",
      components:{
        chart6
      },
      data() {
        return{
          
        }

      }
  }
</script>