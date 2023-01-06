<template>
  <div class="measure-main">
      <navigation class="navigation"/>
      <div class="contents">
          <insight_header/>
          <div class="body" id="insight_body">
            <div style="float:right; margin-right:5vw; margin-top:0px;">
              <button :class="{date_btn_insight: category_dashboard_month,'non_date_insight': !category_dashboard_month }" @click="click_month()">월</button>
              <button :class="{date_btn_insight: category_dashboard_year,'non_date_insight': !category_dashboard_year}" @click="click_year()">년</button>
              <button :class="{date_btn_insight: history,'non_date_insight': !history}" style="font-size:1.2vh;" @click="click_3year()">최근 3년</button>
            </div>
            <span style="font-size:24px; font-weight: bolder; color:#5A5A5A;">탄소배출량 전체보기</span><br>
            <span style ="font-size: 15px; color: #8D8D8D; margin-bottom:10px;">Carbon Emission Overview</span>
            
            <!-- 조직명, 전체 배출량, 총 탄소 배출량 대비 Scope 비율 -->
            <div>
              <dashboard1_nameVue></dashboard1_nameVue>
              <dashboard1_totalEmissionVue></dashboard1_totalEmissionVue>
              <dashboard1_scopeVue></dashboard1_scopeVue>
            </div>
            <!-- 최근 3개년 히스토리 -->
            <div v-if="history==true" > 
              <div style="margin-top:30vh; width:76vw; text-align: center;">
                <span class="date_info_btn"> ＜ </span>
                <span class="date_info">최근 3개년 히스토리</span>
                <span class="date_info_btn"> ＞ </span>
              </div>
              <dashboard2Vue></dashboard2Vue>
            </div>
            
            <!-- 월 그래프 -->
            <div v-if="category_dashboard_month==true" style="margin-top:30vh; width:80vw; text-align: center;">
              <span class="date_info_btn" @click="click_back_month()"> ＜ </span>
              <span class="date_info">{{ year }}년 {{ month }}월</span>
              <span class="date_info_btn" @click="click_plus_month()"> ＞ </span><br>
              <dashboard3Vue></dashboard3Vue>
              <dashboard4Vue></dashboard4Vue>
   
            </div>
            <!-- 년 그래프 -->
            <div v-if="category_dashboard_year==true" style="margin-top:30vh; width:80vw; text-align: center;">
              <span class="date_info_btn" @click="click_back_year()"> ＜ </span>
              <span class="date_info">{{ year }}년</span>
              <span class="date_info_btn" @click="click_plus_year()"> ＞ </span><br>
              <dashboard3Vue></dashboard3Vue>
              <dashboard4Vue></dashboard4Vue>
            </div>
          </div>
      </div>
    </div>
</template>


<style>
  .date_btn_insight{
    margin-right:0.5vw;
    width:4vw;
    height: 2.2vw;
    background: #3DC984;
    border: none;
    border-radius: 1.1vh;
    color:#FFFFFF;
    font-weight: bolder;
  }
  .non_date_insight{
    margin-right:0.5vw;
    width:4vw;
    height: 2.2vw;
    background: #FFFFFF;
    border: 1px solid #CFCFCF;
    border-radius: 1.1vh;
    font-weight: bolder;
  }
  .date_info{
    font-size:4vh;
    color:#5A5A5A;
    font-weight: bolder;
  }
  .date_info_btn{
    height: 5vh;
    width: 5vh;
    font-size: 4.5vh;
    font-weight: bolder;
  }
  #insight_body{
    height: 140vh;
    padding-bottom: 3%;
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
import dashboard3Vue from "@/components/insight/dashboard3.vue"
import dashboard2Vue from "@/components/insight/dash2/dashboard2.vue"
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
          history:false,
          category_dashboard_month:true,
          category_dashboard_year:false,
          month:1,
          year:2023
        }

      },
      methods:{
        click_month(){
          this.category_dashboard_month = true
          this.category_dashboard_year = false
          this.history = false
        },
        click_year(){
          this.category_dashboard_month = false
          this.category_dashboard_year = true
          this.history = false
        },
        click_3year(){
          this.history = true
          this.category_dashboard_month = false
          this.category_dashboard_year = false
        },
        click_back_month(){
          if(this.month == 1){
            this.month=12
          }
          else if (1<this.month <= 12){
            this.month=this.month-1
          }
        },
        click_plus_month(){
          if(this.month == 12){
            this.month=1
            this.year=this.year+1
          }
          else if (1<=this.month < 12){
            this.month=this.month+1
          }
        },
        click_back_year(){
          this.year=this.year-1
        },
        click_plus_year(){
          this.year=this.year+1
        }
      }
  }
</script>