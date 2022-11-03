<template>
    <div class ="body_1">
        <div>
            <button class="input1_back_btn" onclick="location.href='/measure';"> ◀ </button>
        </div>
        <div class="total_carbon" >
            <img style=" margin:30px; width: 70px; height: 70px; float: left; position: relative;" src="@/assets/co2_background.png" alt="" class="menu-icon"/>
            <div style="color:#223354; font-size:20px; font-weight:600; margin-top:20px; position: relative; float: left;">총 탄소 배출량
                <div class="chart"></div>
            </div>
            <div style="margin-right:40px">
                <div class="emissions">
                    <p class ="text_">0CO2kg</p>
                    <p class ="text_" id="text_kor">질소 배출량</p>
                </div>
                <div class="emissions">
                    <p class ="text_">0CO2kg</p>
                    <p class ="text_" id="text_kor">메탄 배출량</p>
                </div>
            </div>
        </div>
        <div class="info_group">
            <p style="margin-top:40px; font-weight: 700; font-size: 20px;">그룹 정보</p>
            <div class="info_group_content">
                <li class ="info_text" v-for="text in info_Group_Text">
                    <div style="margin-left:10px">
                        <img :src= "text.image" style="height: 35px; vertical-align:-30%; margin-right: 20px; margin-bottom: 5px;" alt=""/>
                        {{text.name}}
                        
                    </div>
                </li>
            </div>
        </div>

        <div>
            <button class="measure_btn" id="btn_del">선택삭제</button>
            <button class="measure_btn" id="btn_copy">복사하기</button>
            <button class="measure_btn" id="btn_edit">수정하기</button>

            <button class="measure_btn" id="btn_regi"  onclick="location.href='/measure/register';" >+　등록하기</button>
            <button class="measure_btn" id="btn_excle">엑셀 업로드</button>
            <img class="measure_btn"  id="btn_search" src="@/assets/plus.png" alt=""/>
        </div>

        <div>
            <measuretable class="m_table"/>
        </div>

        <div class="page_btn">
            <ul>
                <li class ="page_btn_list" v-for="page in page_list">{{page}}</li>
            </ul>
        </div>
        <div style="height: 30px;">

        </div>

    </div>
</template>

<style>
.body_1{
    padding:2%;
    position:relative;
    background: #F8F8F8;;
    width: inherit;
    height: 100%;
}
.input1_back_btn{
    border-radius: 7px;
    border: 2px solid #d5d5d5;
    height: 50px;
    width: 50px;
    background-color: #ffffff;
}
.input1_back_btn:hover{
    background: #f0f0f0;
}
.total_carbon{
    position: relative;
    margin-top: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    height: 13vh;
    

}
.emissions{
    float:right; 
    margin-right: 50px;
    margin-top: 15px;
}
.text_{
    text-align: center;
    font-size: 18px;
   
}
#text_kor{
    font-weight: 600;
    color: #223354;
    font-size: 20px;
}

.info_text{
    color:#223354;;
    font-weight: 800;
    font-size:18px;
    background-color: #ffffff;
    list-style: none;
    margin-top: 5px;
    line-height: 50px;
    height: 50px;
}

.measure_btn{
    width: 120px;
    height: 40px;
    margin-top: 40px;
    margin-left: 20px;
    background: #ffffff;
    border-radius: 7px;
    border:1px solid #d5d5d5;
    font-size: 14px;
}
.measure_btn:hover{
    background: #f0f0f0;
}
#btn_del{
    margin-left: 0px;
}

#btn_regi{
    background: #3DC984;
    color:#FFFFFF;
    width: 110px;
    margin-left: 20px;
    border:none;
    float: right;
}
#btn_regi:hover{
    background: #2cb570;
}
#btn_excle{
    margin-left: 20px;
    float: right;
}

#btn_search{
    width: 40px;
    float: right;
    margin-left: 20px;
}

.m_table{
    margin-top:20px;
    height: 250px;
    width: 100%;
}
.page_btn{
    margin-top: 50px;
    margin-left: 35%;
    margin-right: 35%;
    width: auto;
 
}
.page_btn_list{
    margin-left: 20px;
    float: left;
    list-style: none;
    background: #FFFFFF;
    line-height: 30px;
    height: 30px;
    width: 30px;
    text-align: center;
    border-radius: 5px;
    color: #223354;
    font-weight: 600;
}

</style>

<script>
    import measuretable from "@/components/measure/Measuretable.vue"
    export default {
        name :"input1",
        data() {
            return{
                info_Group_Text:[
                    {image: require("@/assets/group_name.png"), name:"그룹명"},
                    {image: require("@/assets/category.png"), name:"카테고리"},
                    {image: require("@/assets/manager.png"), name:"관리자"}
                ],
                page_list:["<","1","2","3","4","5",">"]
            }
        },
        components:{
           measuretable
        },
    }
    
</script>