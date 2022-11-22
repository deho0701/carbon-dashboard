<template>
    <div class="dashboard" id="dashboard1">
        <div style ="float: left; margin-left:1vw ;">
            <!-- 회사명(ex:경상대학교) -->
            <div style ="color:#5A5A5A; font-size:20px; font-weight:bold;">회사명</div>
            <div style ="color:#5A5A5A; font-weight:bold; font-size: 32px; margin-top: 20px;">{{group_name}}</div>

            <!-- 기관종류(ex: 교육기관) -->
            <div style=" float:left; margin-top: 25px; font-size: 18px;">
                <img style="vertical-align: middle; width:20px;" src="@/assets/share.png" alt="">
                {{기관명}}
            </div>
            <!-- 위치(ex:경남 진주시) -->
            <div style="float: left; margin-top: 25px; font-size: 18px; margin-left:25px">
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
        height: 150px;
        padding: 2%;
    }
    .scope_block{
        float:left;
        font-size:20px;
        margin-right:10vw;
        margin-top: 25px;
    }
    .scope_bar{
        width:3px; 
        height:30px; 
        background: #FA5B45; 
        display: inline-block; 
        margin-right: 20px; 
        vertical-align: middle;

    }
    .scope_text{
        font-size:36px;
        font-weight: bold;
        margin-top: 25px;
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
  