<template>
    <div style="float:left; width:38vw ">
        <div class="dash_title" id="dash_title3">카테고리별 전체 배출량</div>
        <div class="dashboard" id="dashboard3_top">
            <span style="margin-left:4vw; color:#5A5A5A; font-weight: bolder; font-size:2.3vh;">{{year}}년 {{ month }}월</span>
        </div>
        <div class="dashboard" id="dashboard3_left">
            <p class="dashboard3_left_scope">scope1</p>
            <p class="dashboard3_left_scope">scope2</p>
            <p class="dashboard3_left_scope">scope3</p>
        </div>
        <div class="dashboard" id="dashboard3_right">
            <div style="padding:1vh">
                <div v-for="item in EmissionList" :key="item.label" class="emission-list-item" style="height:4.3vh;">
                    <img class="emission-list-item-icon" :src="item.iconSrc" style="width:3vh; height:3vh; ">{{item.icon}}
                    <span class="emission-list-item-lable" style="font-size:1.8vh; height: 0vh; margin-left:1vw; padding: 0;">{{item.label}}</span>
                    <span class="emission-list-item-wight" style="font-size:1.8vh; height: 0vh; margin-right:10vw; color:#000000; padding: 0; ">{{item.weight}} kg</span>
                </div>
            </div>
        </div>
        <div class="dashboard" id="dashboard3_bottom">
            <span style="float:left; margin-left:8vw; color:#615B5B; font-weight: bolder;" >전체 </span>
            <sapn style="color:#376B7C; margin-left:2vw; font-weight: bolder;">{{ total }}kg</sapn>
        </div>
    </div>
    
</template>

<style>
    #dashboard3_top{
        height:3vh;
        width:36vw;
        padding: 2%;
        text-align:center;
    }
    #dashboard3_left{
        margin-top:0px;
        height:87.6vh;
        width:6vw;
        float:left;
        text-align:center;
    }
    #dashboard3_right{
        margin-top:0px;
        height:87.6vh;
        width:31.3vw;
        float:left;
        text-align:center;
    }
    .dashboard3_left_scope{
        margin-top:10vh;
    }
    #dashboard3_bottom{
        padding:2vh;
        margin-bottom:5vh;
        height: 2vh;
        width:35.6vw;
        float:left;
        margin-top: 0px;
    }
    #dash_title3{
        text-align: start;
    }

    .dashboard_title{
        font-size: 2.3vh;
        color:#5A5A5A;
        margin-top:0px;
        display: inline-block;
    }

    .전체보기_btn{
        float: right;
        background: none;
        border: 0px;
        color:#000000;
        font-size: 1.4vh;
    }

    .전체보기_btn:hover{
        color: #5A5A5A;
        cursor: pointer;
    }

    .type_group_btn{
        height: 4vh;
        width: inherit;
        background: #F0F2F5;
        border-radius: 0.8vh;
        color:#A3A9A6;
        font-weight: 600;
    }
    .non_click_type_group{
        float: left;
        margin-top: 0.2vh;
        margin-bottom: 0.2vh;
        height: 3.3vh;
        width:6.6vw;
        background: #F0F2F5;
        color:#A3A9A6;
        border: none;
        font-weight: 600;
    }

    .type_btn{
        margin-top: 0.2vh;
        margin-bottom: 0.2vh;
        margin-left: 0.2vw;
        float: left;
        height: 3.3vh;
        width:6.6vw;
        border: none;
        border-radius: 0.8vh;
        background:#3DC984;
        color:#FFFFFF;
        font-weight: 600;
    }

    .group_btn{
        margin-top: 0.2vh;
        margin-bottom: 0.2vh;
        margin-right: 0.2vh;
        float: left;
        height: 3.3vh;
        width: 6.6vw;
        border: none;
        background:#3DC984;
        color:#FFFFFF;
        font-weight: 600;
    }
    .type_contents{
        overflow: scroll;
        margin-top:1vh;
        height: 37vh;
    }

</style>

<script>
  export default {
      name :"dashboard_2",
      components:{

      },
      data() {
        return{
            typeClick:true,
            groupclick:false,
            EmissionList :[
                {iconSrc:require('@/assets/previewDetail/1.png'), label:"고정연소",weight:10},
                {iconSrc:require('@/assets/previewDetail/2.png'), label:"이동연소",weight:250},
                {iconSrc:require('@/assets/previewDetail/3.png'), label:"탈루배출",weight:30},
                {iconSrc:require('@/assets/previewDetail/4.png'), label:"폐기물 처리시설",weight:30},
                {iconSrc:require('@/assets/previewDetail/5.png'), label:"비료사용",weight:30},
                {iconSrc:require('@/assets/previewDetail/6.png'), label:"대학소유동물",weight:30},
                {iconSrc:require('@/assets/previewDetail/7.png'), label:"산림에 의한 흡수",weight:30},
                {iconSrc:require('@/assets/previewDetail/8.png'), label:"전력",weight:30},
                {iconSrc:require('@/assets/previewDetail/9.png'), label:"스팀(열)",weight:30},
                {iconSrc:require('@/assets/previewDetail/10.png'), label:"수도",weight:30},
                {iconSrc:require('@/assets/previewDetail/11.png'), label:"폐기물",weight:30},
                {iconSrc:require('@/assets/previewDetail/12.png'), label:"통근/통학",weight:30},
                {iconSrc:require('@/assets/previewDetail/13.png'), label:"출장",weight:40},
                {iconSrc:require('@/assets/previewDetail/14.png'), label:"위착운영 차량",weight:40}
            ],
            year:2023,
            month:1,
            total:'1,241'
        }

      },
      methods:{
        click_type(){
            this.typeClick=true
            this.groupclick=false
        },

        click_group(){
            this.typeClick=false
            this.groupclick=true
        }
      }
  }
</script>