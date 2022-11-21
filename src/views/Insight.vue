<template>
  <div class="measure-main">
      <navigation class="navigation"/>
      <div class="contents">
          <insight_header/>
          <div class="body" id="insight_body">
            <h3 style="margin-top:0px">탄소배출량 전체보기</h3>
            <p style ="font-size: 12px;">Carbon Emission Overview</p>
            <div class="dashboard" id="dashboard1">
            </div>
            <div>
              <div class="dashboard" id="dashboard2">
              </div>
              <div class="dashboard" id="dashboard3">
              </div>
            </div>
            <div>
              <div class="dashboard" id="dashboard4">
              </div>
              <div class="dashboard" id="dashboard5">
              </div>
              <div class="dashboard" id="dashboard6">
              </div>
            </div>
          </div>
          
      </div>
  </div>
</template>


<style>
  #insight_body{
    height: 130vh;
    padding-bottom: 2%;
  }
  .dashboard{
    background: #FFFFFF;
    width: 80vw;
    border-radius: 10px;
    border:2px solid #d5d5d5;
    margin-bottom: 2vh;
  }
  #dashboard1{
    height: 20vh;
  }
  #dashboard2{
    height: 50vh;
    width: 17vw;
    float: left;
  }
  #dashboard3{
    float: left;
    margin-left:1vw;
    width: 61.7vw;
    height: 50vh;
  }
  #dashboard4{
    float: left;
    width: 19vw;
    height: 40vh;
  }
  #dashboard5{
    float: left;
    width: 34vw;
    height: 40vh;
    margin-left:1vw;
  }
  #dashboard6{
    float: left;
    width: 24.4vw;
    height: 40vh;
    margin-left:1vw;
  }

</style>

<script>
import navigation from "@/components/Navigation.vue"
import insight_header from "@/components/insight/Header.vue"
  export default {
      name :"insight",
      components:{
          navigation,
          insight_header
      },
      data() {

      },
  }
</script>