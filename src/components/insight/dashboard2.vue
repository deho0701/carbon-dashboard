<template>
    <div class="dashboard" id="dashboard2s">
        <h3 class="dashboard_title">탄소 배출량</h3>
        <button class="전체보기_btn">전체보기</button>
        <div class="type_group_btn">
            <button :class="{non_click_type_group : groupclick  ,'type_btn' : typeClick}" @click="click_type">타입별</button>
            <button  :class="{non_click_type_group : typeClick  ,'type_btn' : groupclick}" @click="click_group">조직별</button>
        </div>

        <div class="type_contents" v-if="typeClick==true">
            <div  v-for="(emission_dash,index) in emission_dash_list">
                <div style="width:inherit; height: 7.1vh;">
                    <div style="float: left;">
                        <div style="margin-top:1.1vh; font-weight: 600; font-size: 1.7vh; color:#5A5A5A">{{emission_dash.name}}</div>
                        <div style= "margin-top:0.5vh; color:#9F9696; font-size: 1.6vh;">{{emission_dash.num}}개 항목</div>
                    </div>
                    <p style="float:right; margin-top:2.3vh; font-size: 1.7vh; font-weight: 600;">{{emission_dash.emission}}kg</p>
                </div>
                <div style="width:inherit; height:0.2vh; background: #E3E3E3;" v-if ="index!=4"> </div>
            </div>
        </div>
    </div>
</template>

<style>
    #dashboard2s{
        height:45vh;
        width: 13.5vw;
        float: left;
        padding: 2%;
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
            emission_dash_list:[
                {name: '이동연소' , emission: '1,234', num: '6'},
                {name:'고정연소', emission:'1,234', num:'3'},
                {name:'임직원 통근', emission:'1,234', num:'10'},
                {name:'가축동물', emission:'1,234', num:'6'},
                {name:'가축동물', emission:'1,234', num:'3'},
            ]
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