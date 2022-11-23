<template>
    <div class="dashboard" id="dashboard4s">
        <div style="font-size:20px; font-weight: 900; color: #5A5A5A; height: 8vh; ">총 탄소 배출량/상쇄량 
            <button class="더보기_btn">. . .</button>
        </div>
        <chart4 style="height: auto; position:absolute;" ></chart4>
    </div>
</template>

<style>
    #dashboard4s{
        float: left;
        width: 16vw;
        height: 35vh;
        padding: 2%;
        position:relative;
    }

    .더보기_btn{
        float: right;
        background: none;
        border: none;
        font-size: large;
        font-weight: 900;
        color: #aeaeae;
    }
    .더보기_btn:hover{
        color:#5A5A5A;
        cursor: pointer;
    }
</style>

<script>
import chart4 from './chart4';
  export default {
      name :"dashboard_4",
      components:{
        chart4
      },
      data() {
        return{
          
        }

      }
  }
</script>