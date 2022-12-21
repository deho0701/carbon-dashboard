<template>
    <div class="dashboard" id="dashboard5">
        <div style="font-size:2.1vh; font-weight: 900; color: #5A5A5A; height: 5vh; ">조직별 상위 탄소 배출량 순위
            <button class="view_all_btn">view all</button>
        </div>

        <div  v-for="(rangking,index) in group_list">
            <div style="width:inherit; height: 6.1vh;">
                <div style="float: left;">
                    <div style="margin-top:0.5vh; font-size: 1.7vh; font-weight: 600; color:#5A5A5A">{{rangking.name}}</div>
                    <div style= "margin-top:0.5vh; font-size: 1.6vh; color:#9F9696">{{rangking.location}}</div>
                </div>
                <span style="float:right; margin-top:1.8vh; color:#00B912;" v-if="rangking.emission > rangking.pre_emission">　▲</span>
                <span style="float:right; margin-top:1.8vh; color:#FF0000;" v-if="rangking.emission < rangking.pre_emission">　▼</span>
                <span style="float:right; margin-top:1.8vh; color:#5A5A5A; font-size:2.3vh; font-weight: bold;" v-if="rangking.emission == rangking.pre_emission">　-</span>
                <span style="float:right; margin-top:1.8vh; font-size: 1.7vh; font-weight: 600;">{{rangking.emission}}kg</span>
                </div>
            <div style="width:32vw; height:0.1vh; background: #F4F4F4;" v-if ="index!=4"> </div> 
        </div>

    </div>
</template>

<style>
  #dashboard5{
    float: left;
    width: 33.8vw;
    height: 35vh;
    margin-left:1vw;
    padding:2%
  }
  .view_all_btn{
    float:right;
    color:#3DC984;
    background: #ffffff;
    border: none;
    font-size: large;
  }
  .view_all_btn:hover{
    color: #35ad71;
    cursor: pointer;
  }

</style>

<script>
  export default {
      name :"dashboard_5",
      components:{
      },
      data() {
        return{
            group_list:[
                {img:'상', name:'상경대학', location: '경남 진주시', emission: 101136, pre_emission: 54568},
                {img:'공', name:'공과대학', location: '경남 진주시', emission: 101136, pre_emission: 504568},
                {img:'의', name:'의학대학', location: '경남 진주시', emission: 101136, pre_emission: 101136},
                {img:'수', name:'수산대학', location: '경남 진주시', emission: 101136, pre_emission: 54568},
                {img:'농', name:'농경대학', location: '경남 진주시', emission: 101136, pre_emission: 504568}
            ]
          
        }

      }
  }
</script>