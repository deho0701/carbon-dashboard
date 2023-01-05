<template>
  <div class="measure-main">
      <navigation class="navigation"/>
      <div class="contents">
          <insight_header/>
          <div class="body" id="insight_body">
            <div style="float:right; margin-right:5vw; margin-top:0px;">
              <button class="date_btn_insight">월</button>
              <button class="date_btn_insight">년</button>
              <button class="date_btn_insight" style="font-size:1.2vh;">최근 3년</button>
            </div>
            <span style="font-size:24px; font-weight: bolder; color:#5A5A5A;">탄소배출량 전체보기</span><br>
            <span style ="font-size: 15px; color: #8D8D8D; margin-bottom:10px;">Carbon Emission Overview</span>
            
            
            <div>
              <dashboard1_nameVue></dashboard1_nameVue>
              <dashboard1_totalEmissionVue></dashboard1_totalEmissionVue>
              <dashboard1_scopeVue></dashboard1_scopeVue>
            </div>
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
  .date_btn_insight{
    margin-right:0.5vw;
    width:3.5vw;
    height: 2vw;
    background: #FFFFFF;
    border: 1px solid #CFCFCF;
    border-radius: 1.1vh;
  }
  #insight_body{
    height: 130vh;
    padding-bottom: 2%;
    padding-top: 1%
  }
  .dashboard{
    background-color: white;
    margin-top: 1vh;
    border: 2px solid #F2F2F2;
    border-radius: 5px;
  }
</style>

<script>
import navigation from "@/components/Navigation.vue"
import insight_header from "@/components/insight/Header.vue"
import dashboard1_nameVue from "@/components/insight/dash1/dashboard1_name.vue"
import dashboard1_totalEmissionVue from "@/components/insight/dash1/dashboard1_totalEmission.vue"
import dashboard1_scopeVue from "@/components/insight/dash1/dashboard1_scope.vue"
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
          dashboard1_nameVue,
          dashboard1_totalEmissionVue,
          dashboard1_scopeVue,
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