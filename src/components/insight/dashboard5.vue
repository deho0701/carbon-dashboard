<template>
  <div style="float:left; width:41vw; margin-left: 1vw; ">
    <div class="dash_title" style="text-align: start;">에너지 사용량</div>
    <div class="dashboard" id="dashboard5_top"> 
      <span style="margin-left:10vw;">{{ year }}년 {{ month }}월 </span>
      <span style="font-weight:lighter">(단위 GJ)</span>
    </div>
    <div class="dashboard" id="dashboard5_left1"> 
      <p style="margin-top:8vh">직접<br>에너지원별<br>소비량</p>
    </div>
    <div class="dashboard" id="dashboard5_right1"> 
      <div>
          <div v-for="item in DirectEnargyList" :key="item.label" class="emission-list-item" style="height:3.3vh; margin-top:1vh">
              <span class="emission-list-item-lable" style="font-size:1.8vh; height: 0vh; margin-left:1vw; padding: 0; color:#615B5B">{{item.label}}</span>
              <span class="emission-list-item-wight" style="font-size:1.8vh; height: 0vh; margin-right:10vw; color:#000000; padding: 0; ">{{item.weight}} kg</span>
          </div>
      </div>
    </div>
    <div class="dashboard" id="dashboard5_left2"> 
      <p style="margin-top:1.5vh">간접<br>에너지원별<br>소비량</p>
    </div>
    <div class="dashboard" id="dashboard5_right2"> 
      <div>
          <div v-for="item in IndirectEnargyList" :key="item.label" class="emission-list-item" style="height:3.3vh; margin-top:1vh">
              <span class="emission-list-item-lable" style="font-size:1.8vh; height: 0vh; margin-left:1vw; padding: 0; color:#615B5B">{{item.label}}</span>
              <span class="emission-list-item-wight" style="font-size:1.8vh; height: 0vh; margin-right:10vw; color:#000000; padding: 0; ">{{item.weight}} kg</span>
          </div>
      </div>
    </div>
    <div class="dashboard" id="dashboard5_bottom"> 
      <span style="float:left; margin-left:6vw; color:#615B5B; font-weight: bolder;" >총 에너지 소비량 </span>
      <sapn style="color:#376B7C; margin-left:-1.5vw; font-weight: bolder;">{{ total }}kg</sapn>
    </div>
  </div>
    
</template>

<style>
  #dashboard5_top{
    float: left;
    width: 39vw;
    height: 3vh;
    color:#376B7C;
    padding:2%;
    font-weight: bolder;
    font-size:2.3vh;
  }
  #dashboard5_left1{
    width: 5vw;
    height:25vh;
    padding: 2vh;
    font-size:1.8vh;
    font-weight: bolder;
    text-align: start;
    float:left;
    margin-top:0px;
  }
  #dashboard5_right1{
    width: 31.3vw;
    height:25vh;
    padding: 2vh;
    margin-top:0px;
    float:left;
  }
  #dashboard5_left2{
    width: 5vw;
    height:10vh;
    padding: 2vh;
    font-size:1.8vh;
    font-weight: bolder;
    text-align: start;
    float:left;
    margin-top:0px;
  }
  #dashboard5_right2{
    width: 31.3vw;
    height:10vh;
    padding: 2vh;
    margin-top:0px;
    float:left;
  }
  #dashboard5_bottom{
    width: 38.5vw;
    height:2vh;
    padding: 2vh;
    margin-top:0px;
    float:left;
    margin-bottom:5vh;
  }

</style>

<script>
  export default {
      name :"dashboard_5",
      components:{
      },
      data() {
        return{
            year:2023,
            month:1,
            total:'2,340',
            DirectEnargyList:[
              {label:"휘발유",weight:12.34},
              {label:"경유",weight:11.32},
              {label:"등유",weight:3.67},
              {label:"LPG",weight:1.234},
              {label:"도시가스(LNG)",weight:0.52},
            ],
            IndirectEnargyList:[
              {label:"전력",weight:12.34},
              {label:"열(스팀)",weight:11.32},

            ]
          
        }

      }
  }
</script>