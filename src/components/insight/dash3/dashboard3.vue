<template>
    <div class="dashboard" id="dashboard3">
      <chart3 style="width:inherit; height: inherit;"></chart3>
    </div>
</template>
<style>
    #dashboard3{
        float: left;
        margin-left:1vw;
        width: 58.5vw;
        height: 45vh;
        padding: 2%;
    }
</style>
<script>
import chart3 from './chart3';
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