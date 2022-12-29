<template>
    <div class ="body_1">
        <div>
            <button class="input1_back_btn" onclick="location.href='/measure';"> ◀ </button>
        </div>
        <div class="total_carbon" >
            <img style=" vertical-align: middle; width: 80px; height: 80px; margin-top:10px; float: left;" src="@/assets/co2_background.png" alt="" class="menu-icon"/>
            <div style="margin-left: 30px; color:#223354; font-size:20px; margin-top: 10px; font-weight:600; position: relative; float: left;">총 탄소 배출량
                <div class="chart">
                    <chart></chart>
                </div>
            </div>
            <div style="margin-right:40px">
                <div class="emissions">
                    <p class ="text_">{{N_emssions}}CO2kg</p>
                    <p class ="text_" id="text_kor">질소 배출량</p>
                </div>
                <div class="emissions">
                    <p class ="text_">{{M_emssions}}CO2kg</p>
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
                        {{text.category_Info}} <div style="margin-left:50px; font-size: 16px; font-weight: 400; color: #223354;; display:inline-block;">{{text.name}}</div>
                    </div>
                </li>
            </div>
        </div>

        <div>
            <button class="measure_btn" id="btn_del" @click="del_btn">선택삭제</button>
            <button class="measure_btn" id="btn_copy" @click="copy_btn">복사하기</button>
            <button class="measure_btn" id="btn_edit" @click="edit_btn">수정하기</button>

            <button class="measure_btn" id="btn_regi"  onclick="location.href='/measure/register';" >+　등록하기</button>
            <button class="measure_btn" id="btn_excle">엑셀 업로드</button>
            <img class="measure_btn"  id="btn_search" src="@/assets/search.png" alt=""/>
        </div>

        <div>
            <!-- <measuretable class="m_table" v-bind:emssion_info_list="emssion_info_list_parent"/> -->
            <measuretable class="m_table"/>
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
    border: 2px solid #E9E9E9;
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
    height: 11vh;
    padding: 30px;

}
.emissions{
    float:right; 
    margin-right: 50px;

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
.chart{
    margin-top: 10px;

    
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
    height: 35px;
    width: 110px;
    font-size: 14px;
    margin-top: 40px;
    margin-left: 10px;
    background: #ffffff;
    border-radius: 5px;
    border:1px solid #E9E9E9;
}
.measure_btn:hover{
    background: #f0f0f0;
    cursor: pointer;
}
#btn_del{
    margin-left: 0px;
}

#btn_regi{
    background: #3DC984;
    color:#FFFFFF;
    width: 110px;
    margin-left: 15px;
    border:none;
    float: right;
}
#btn_regi:hover{
    background: #2cb570;
    cursor: pointer;
}
#btn_excle{
    margin-left: 15px;
    float: right;
}

#btn_search{
    width: 35px;
    float: right;
}

.m_table{
    margin-top:3vh;
    width: 100%;
    margin-bottom: 3vh;
}

</style>

<script>
    import measuretable from "@/components/measure/MeasuretableA.vue"
    import chart from "@/components/measure/input1/chart.ts"

    export default {
        name :"input1",
        data() {
            return{
                N_emssions:0,
                M_emssions:0,
                info_Group_Text:[
                    {image: require("@/assets/group_name.png"), category_Info:"그룹명",name:'경상대'},
                    {image: require("@/assets/category.png"), category_Info:"카테고리",name:'경상대 > 공과대학 > 항공 우주 및 소프트웨어'},
                    {image: require("@/assets/manager.png"), category_Info:"관리자",name:''}
                ],
                emssion_info_list_parent:[
                    {checked:false,content:"경영학과 직원 출퇴근",building:"1,423kwh",emissions:"1,352",start:"2022.01.01",end:"2022.01.05",source:"고정연소",scope:"Scope 1", category: "경상대 > 경영대학 > 경영학과"},
                    {checked:false,content:"경영학과 직원 출퇴근",building:"1,423kwh",emissions:"1,352",start:"2022.01.01",end:"2022.01.05",source:"고정연소",scope:"Scope 1", category: "경상대 > 경영대학 > 경영학과"},
                    {checked:false,content:"경영학과 직원 출퇴근",building:"1,423kwh",emissions:"1,352",start:"2022.01.01",end:"2022.01.05",source:"고정연소",scope:"Scope 1", category: "경상대 > 경영대학 > 경영학과"},
                    {checked:false,content:"경영학과 직원 출퇴근",building:"1,423kwh",emissions:"1,352",start:"2022.01.01",end:"2022.01.05",source:"고정연소",scope:"Scope 1", category: "경상대 > 경영대학 > 경영학과"},
                    {checked:false,content:"경영학과 직원 출퇴근",building:"1,423kwh",emissions:"1,352",start:"2022.01.01",end:"2022.01.05",source:"고정연소",scope:"Scope 1", category: "경상대 > 경영대학 > 경영학과"},
                ],
            }
        },
        components:{
           measuretable,
           chart
           
        },
        methods:{
            del_btn(){
                
            }
        }
    }
    
</script>