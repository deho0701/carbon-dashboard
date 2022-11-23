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
                <div style="width:inherit; height: 70px;">
                    <div style="float: left;">
                        <div style="margin-top:10px; font-weight: 600; color:#5A5A5A">{{emission_dash.name}}</div>
                        <div style= "margin-top:5px; color:#9F9696">{{emission_dash.num}}개 항목</div>
                    </div>
                    <p style="float:right; margin-top:23px;font-weight: 600;">{{emission_dash.emission}}kg</p>
                </div>
                <div style="width:inherit; height:2px; background: #E3E3E3;" v-if ="index!=4"> </div>
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
        color:#5A5A5A;
        margin-top:0px;
        display: inline-block;
    }

    .전체보기_btn{
        float: right;
        background: none;
        border: 0px;
        color:#000000;
        font-size: 14px;
    }

    .전체보기_btn:hover{
        color: #5A5A5A;
        cursor: pointer;
    }

    .type_group_btn{
        height: 4vh;
        width: inherit;
        background: #F0F2F5;
        border-radius: 8px;
        color:#A3A9A6;
        font-weight: 600;
    }
    .non_click_type_group{
        float: left;
        margin-top: 2px;
        margin-bottom: 2px;
        height: 3.3vh;
        width:6.6vw;
        background: #F0F2F5;
        border-radius: 8px;
        color:#A3A9A6;
        border: none;
        font-weight: 600;
    }

    .type_btn{
        margin-top: 2px;
        margin-bottom: 2px;
        margin-left: 2px;
        float: left;
        height: 3.3vh;
        width:6.6vw;
        border: none;
        border-radius: 8px;
        background:#3DC984;
        color:#FFFFFF;
    }

    .group_btn{
        margin-top: 2px;
        margin-bottom: 2px;
        margin-right: 2px;
        float: left;
        height: 3.3vh;
        width: 6.6vw;
        border: none;
        background:#3DC984;
        color:#FFFFFF;
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