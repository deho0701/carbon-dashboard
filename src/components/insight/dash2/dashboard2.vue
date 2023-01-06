<template>
    <div class="dashboard" id="dashboard2">
      <chart3 style="width:inherit; height: inherit; "></chart3>
    </div>
</template>
<style>
    #dashboard2{
        background-color:transparent;
        float: left;
        width: 76vw;
        height: 55vh;
        padding: 2%;
        margin-top:3vh;
        border: none;
    }
</style>
<script>
import chart3 from './chart2';
  export default {
      name :"dashboard_3",
      components:{
        chart3
      },
      data() {
        return{
          
        }

      }
  }
</script>