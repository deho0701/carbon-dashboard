<template>
    <div style="float:left; margin-left:3.5vw">
        <div class="dash_title" >총 탄소 배출량 대비 Scope 비율</div>
        <div class="dashboard" id="dashboard1_scope">
            <div style="width:20vw; background-color:aquamarine; position:relative;">
                <chart4 style="height:12vh; width: 18vw; position:absolute;"></chart4>
            </div>
            <div style="float:right; margin-top:0.7vh;">
                <div class="scope_emission">{{ scope1 }}kt</div>
                <div class="scope_emission">{{ scope2 }}kt</div>
                <div class="scope_emission">{{ scope3 }}kt</div>
            </div>
        </div>
    </div>
    
</template>

<style>

    #dashboard1_scope{
        height: 12vh;
        width: 28.5vw;
        padding: 4.7%;
    }
    .scope_emission{
        margin-right:4vw;
        margin-top: 0.35vh;
        color:black;
    }


</style>

<script>
import chart4 from './chart1';
  export default {
      name :"dashboard1",
      components:{
        chart4
      },
      data() {
        return{
            total_emssion: '1,241',
            scope1:'1,241',
            scope2:'1,241',
            scope3:'1,241'
        }
      },
  }
</script>
  