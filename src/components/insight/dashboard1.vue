<template>
    <div class="dashboard" id="dashboard1">
        <div style ="float: left; margin-left:1vw ;">
            <!-- 회사명(ex:경상대학교) -->
            <div style ="color:#5A5A5A; font-size:2vh; font-weight:bold;">회사명</div>
            <div style ="color:#5A5A5A; font-weight:bold; font-size: 3.3vh; margin-top: 2vh;">{{group_name}}</div>

            <!-- 기관종류(ex: 교육기관) -->
            <div style=" float:left; margin-top: 2.5vh; font-size: 2vh;">
                <img style="vertical-align: middle; width:20px;" src="@/assets/share.png" alt="">
                {{기관명}}
            </div>
            <!-- 위치(ex:경남 진주시) -->
            <div style="float: left; margin-top: 2.5vh; font-size: 2vh; margin-left:2vw">
                <img style=" vertical-align: middle; width:20px;" src="@/assets/map.png" alt="">
                {{위치}}
            </div>
        </div>

        <div style="float: right;">
            <!-- Scope1 -->
            <div class = "scope_block">
                <div class ="scope_bar" style=""></div>Scope1
                <div class = "scope_text">
                    {{scope1}}kt
                </div>
            </div>
            <!-- Scope2 -->
            <div class = "scope_block">
                <div class ="scope_bar" style=" background: #FABC45; "></div>Scope2
                <div class = "scope_text">
                    {{scope1}}kt
                </div>
            </div>
            <!-- Scope3 -->
            <div class = "scope_block">
                <div class ="scope_bar" style="background: #6200EE; "></div>Scope3
                <div class = "scope_text">
                    {{scope1}}kt
                </div>
            </div>
            
        </div>
        

    </div>
</template>

<style>
    #dashboard1{
        height: 15.5vh;
        padding: 2%;
    }
    .scope_block{
        float:left;
        font-size:2.1vh;
        margin-right:10vw;
        margin-top: 2.5vh;
    }
    .scope_bar{
        width:0.4vh; 
        height:3.2vh; 
        background: #FA5B45; 
        display: inline-block; 
        margin-right: 1.2vw; 
        vertical-align: middle;

    }
    .scope_text{
        font-size:3.8vh;
        font-weight: bold;
        margin-top: 2.5vh;
        font-weight: 600;
        
    }


</style>

<script>
  export default {
      name :"dashboard1",
      components:{
      },
      data() {
        return{
            group_name:'경상대학교',
            기관명:'교육기관',
            위치: '경남 진주시',
            scope1:123.4
        }
      },
  }
</script>
  