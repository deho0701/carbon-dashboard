<template>
  <div class="measure-main">
      <navigation class="navigation"/>
      <div class="contents">
          <insight_header/>
          <div class="body" id="insight_body">
            <h3 style="font-size:24px; margin-top:0px; color:#5A5A5A;">탄소배출량 전체보기</h3>
            <p style ="font-size: 15px; color: #8D8D8D;">Carbon Emission Overview</p>
            <dashboard1Vue></dashboard1Vue>
            <div>
              <dashboard2Vue></dashboard2Vue>
              <dashboard3Vue></dashboard3Vue>
            </div>
            <div>
              <dashboard4Vue></dashboard4Vue>
              <Dashboard5></Dashboard5>
              <Dashboard6></Dashboard6>
            </div>
          </div>
      </div>
    </div>
</template>


<style>
  #insight_body{
    height: 130vh;
    padding-bottom: 2%;
    padding-top: 1%
  }
  .dashboard{
    background: #FFFFFF;
    width: 76.5vw;
    border-radius: 10px;
    border:2px solid #d5d5d5;
    margin-bottom: 2vh;
  }

</style>

<script>
import navigation from "@/components/Navigation.vue"
import insight_header from "@/components/insight/Header.vue"
import dashboard1Vue from "@/components/insight/dashboard1.vue"
import dashboard2Vue from "@/components/insight/dashboard2.vue"
import dashboard3Vue from "@/components/insight/dash3/dashboard3.vue"
import dashboard4Vue from "@/components/insight/dash4/dashboard4.vue"
import Dashboard6 from "@/components/insight/dash6/dashboard6.vue"
import Dashboard5 from "@/components/insight/dashboard5.vue"
  export default {
      name :"insight",
      components:{
          navigation,
          insight_header,
          dashboard1Vue,
          dashboard2Vue,
          dashboard3Vue,
          dashboard4Vue,
          Dashboard5,
          Dashboard6,
          
      },
      data() {
        return{
        }

      },
  }
</script>