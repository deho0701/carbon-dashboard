<template>
    <div class ="body_1">
        <div>
            <button class="input1_back_btn" onclick="location.href='/measure/input1';"> ◀ </button>
        </div>
        <div class="regi_category">
            <div>
                <div style="margin-bottom: 20px; font-size: 19px; color:black;">카테고리</div>
                <!-- 카테고리 보드판 -->
                <button :class ="{category_select: SearchCategory ,'nonClick_category':SelectCategory}"  @click="clickSearch" id="search" >카테고리별 검색</button>
                <button :class ="{category_select: SelectCategory, 'nonClick_category':SearchCategory }"  @click="clickSelect" id="select">카테고리명 선택</button><br>
                <input :class ="{input_category: SearchCategory}" placeholder="카테고리를 검색하세요." v-if="SearchCategory==true"/> 
                <select :class ="{input_category: SelectCategory}"  v-model="selected_category" mutiple placeholder="카테고리명을 선택하세요." v-if="SelectCategory==true" id="option" onchange="clickCategory()">
                    <option v-for="category_name in category_option_list" :value="category_name.index">{{category_name.name}}</option>
                </select>
                <div :class="{info_text_category:SearchCategory}"  v-if="SearchCategory==true">카테고리를 선택해주세요.</div>
                <div :class="{info_text_category:SelectCategory}"  v-if="SelectCategory==true">{{info_text}}</div>
            </div>
        </div>
        <div>
            
            <div class = "info_board">
                <!-- 추가 정보 입력하기 상단 -->
                <div style="font-size: 20px; color:black;">추가정보 입력하기
                    <button class="input1_back_btn" id="drop_btn" @click="clickInfoDrop()" v-if ="info_board_defalt==true">▼</button>
                    <button class="input1_back_btn" id="drop_btn" @click="clickInfoDrop()"  v-if ="info_board_defalt==false">▲</button>
                </div>
            </div>
            <!-- 추가 정보 입력하기 내용  -->
            <div v-if="SelectCategory==true">
                <div :class="{add_regi_page: info_board_defalt}" v-if="info_board_defalt==false" >
                    <div class="info_board" id="add_info"><br>
                        <!-- '구분'에서 카테고리별 상세 내용 -->
                        <power_usageVue class="power_usage_page" v-if = "selected_category==1" v-on:childEvent="cilckRegister()"></power_usageVue>
                        <steam_usageVue class="steam_usage_page" v-else-if = "selected_category==2" v-on:childEvent="cilckRegister()"></steam_usageVue>
                        <Water_useageVue class="water_usage_page" v-else-if = "selected_category==3" v-on:childEvent="cilckRegister()"></Water_useageVue>
                        <Waste_usageVue class="wast_usage_page" v-else-if = "selected_category==4" v-on:childEvent="cilckRegister()"></Waste_usageVue>
                        <Stationary_combustionVue class="stationary_combustion_page" v-else-if = "selected_category==5" v-on:childEvent="cilckRegister()"></Stationary_combustionVue>
                        <Mobile_combustionVue class="mobile_combustion_page" v-else-if = "selected_category==6" v-on:childEvent="cilckRegister()"></Mobile_combustionVue>
                        <Fugitive_emissionsVue class="fugitive_emissions_page" v-else-if = "selected_category==7" v-on:childEvent="cilckRegister()"></Fugitive_emissionsVue>
                        <Fertilizer_useVue class="fertilizer_use_page" v-else-if = "selected_category==8" v-on:childEvent="cilckRegister()"></Fertilizer_useVue>
                        <Animal_possessionVue :info_list_input2="info_list_input2" @event="cilckRegister()" class="animal_possession_page" v-else-if = "selected_category==9"></Animal_possessionVue>
                        <Forest_absorptionVue class="forest_absorptionVue_page" v-else-if = "selected_category==10" v-on:childEvent="cilckRegister()"></Forest_absorptionVue>
                        <Waste_disposalFillingVue class="forest_absorptionVue_page" v-else-if = "selected_category==11" v-on:childEvent="cilckRegister()"></Waste_disposalFillingVue>
                        <Waste_disposalIncinerationVue class="forest_absorptionVue_page" v-else-if = "selected_category==12" v-on:childEvent="cilckRegister()"></Waste_disposalIncinerationVue>
                        <Waste_disposalSewage_treatmentVue class="forest_absorptionVue_page" v-else-if = "selected_category==13" v-on:childEvent="cilckRegister()"></Waste_disposalSewage_treatmentVue>
                        <Waste_disposalBiologicalVue class="forest_absorptionVue_page" v-else-if = "selected_category==14" v-on:childEvent="cilckRegister()"></Waste_disposalBiologicalVue>
                        <Waste_disposalWastewaterVue class="forest_absorptionVue_page" v-else-if = "selected_category==15" v-on:childEvent="cilckRegister()"></Waste_disposalWastewaterVue>
                    </div> 
                </div>
            </div>
            
            <!-- 탄소 배출 내용 테이블 -->
            <div>
                <div class="info_board" id="info_board_bottom">
                    <div  v-if="info_table_defalt==true" style="text-align: center; width:inherit; border: 1px solid rgba(206, 206, 206, 0.5); border-radius: 7px; margin-top: 15px; height: 350px; ">
                        <img style="margin-top:10%; width: 5%;" src="@/assets/exclamationMark.png" alt=""/>
                        <div style="margin-top:30px">데이터가 존재하지 않습니다.</div>
                    </div>
                    <div v-else-if="info_table_defalt==false">
                        <measuretable class="m_table" v-bind:emssion_info_list=emssion_info_list_input2></measuretable>
                    </div>
                    
                </div>
                {{ info_list_input2 }}
            </div>


        </div>
        <!-- 등록/ 취소 버튼쓰 -->
        <div style="margin-left: 36%;">
            <button class="input2_regi_btn" id="input2-register-btn" @click="click_register_table">등록하기</button>
            <button class="input2_regi_btn" id="input2-cancle-btn" onclick="location.href='/measure/input1';">취소하기</button>
        </div>

    </div>
</template>

<style>
    .regi_category{
        margin-top: 30px;
        padding: 25px;
        background-color: #ffffff;
        border-radius: 5px;
        height: auto;
        box-shadow: 0px 3px 10px #d5d5d5, 0px 2px 2px #d5d5d5;
    }
    .info_text_category{
        font-size: 12px;
        font-weight: 600;
        margin-top: 10px;
        color: #3DC984
    }
    #option{
        height: 34px;
        width: 80.3%;
    }
    .info_board{
        margin-top: 30px;
        padding: 30px;
        background-color: #ffffff;
        border-radius: 5px;
        box-shadow: 0px 3px 10px #d5d5d5, 0px 2px 2px #d5d5d5;
        border: 1px solid #d5d5d5;
        height: inherit;
        color:black;
    }
    #info_board_bottom{
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 60px;
        margin-top: 0px;
        border: 0px;
    }
    #btn_del_input2{
        margin-top:0px;
        margin-left:0px
    }
    #btn_edit_input2{
        margin-top:0px
    }
    #drop_btn{
        float: right;
        width: 4.1vh;
        height: 4.1vh;
        vertical-align: middle;
    }
    .input2_regi_btn{
        margin-top:4vh;
        background:#ffffff;
        border: 0.3vh solid #d5d5d5;
        border-radius: 1vh;
        height: 45px;
        width: 8vw;
        margin-left: 2.5vw;
        font-size: 14px;
    }
    .input2_regi_btn:hover{
        background:  #f0f0f0;
    }
    #input2-register-btn{
        background:#3DC984;
        border: none;
        color: #ffffff;
    }
    #input2-register-btn:hover{
        background:#2cb570;
    }
    .add_regi_page{
        padding-left: 50px;
        padding-right: 40px;
        padding-bottom: 60px;
        margin-top: 0px;
        border: 0px;
    }
    #add_info_regi_btn{
        margin-top:2vh;
        background:#3DC984;
        border: none;
        color: #ffffff;
        margin-left: 35vw;
        margin-bottom: 20px;
    }
    #add_info_regi_btn:hover{
        background:#2cb570;
    }

</style>
<style : scoped>
    .category_select{
        border-radius: 5px;
        border: none;
        height: 32px;
        width: 110px;
        background-color:#3DC984; 
        font-size: 12px;
        color: #ffffff;
    }
    .nonClick_category{
        border-radius: 5px;
        border: 1px solid #d5d5d5;
        height: 32px;
        width: 110px;
        background-color: #ffffff; 
        font-size: 12px;
    }
    #select{
        margin-left: 10px;
    }
    .input_category{
        background-color: #ffffff; 
        border-radius: 5px;
        border: 1px solid #E9E9E9;
        width: 80%;
        height: 30px;
        margin-top:10px
    }
    .input_category:focus{
        outline: none;
    }
 
</style>
<script>
import measuretable from "@/components/measure/MeasuretableA.vue"
import power_usageVue from './Divide-carbon/Power_usage.vue';
import steam_usageVue from './Divide-carbon/Steam_usage.vue';
import Water_useageVue from './Divide-carbon/Water_useage.vue';
import Waste_usageVue from './Divide-carbon/Waste_usage.vue';
import Stationary_combustionVue from './Divide-carbon/Stationary_combustion.vue';
import Mobile_combustionVue from './Divide-carbon/Mobile_combustion.vue';
import Fugitive_emissionsVue from './Divide-carbon/Fugitive_emissions.vue';
import Fertilizer_useVue from './Divide-carbon/Fertilizer_use.vue';
import Animal_possessionVue from './Divide-carbon/Animal_possession.vue';
import Forest_absorptionVue from './Divide-carbon/Forest_absorption.vue';
import Waste_disposalFillingVue from './Divide-carbon/Waste_disposal(filling).vue';
import Waste_disposalIncinerationVue from './Divide-carbon/Waste_disposal(incineration).vue';
import Waste_disposalSewage_treatmentVue from './Divide-carbon/Waste_disposal(sewage_treatment).vue';
import Waste_disposalBiologicalVue from './Divide-carbon/Waste_disposal(biological).vue';
import Waste_disposalWastewaterVue from './Divide-carbon/Waste_disposal(Wastewater).vue';

    export default { 
        name :"input2",
        data() {
            return{
                SearchCategory:true,
                SelectCategory:false,
                info_board_defalt:true,
                selected_category:'null',
                info_table_defalt:true,
                showCategory:'null',

                info_list_input2:{content:"",data:"",emissions:"",StartDate:"",EndDate:"",scope:""},

                category_option_list:[
                    {index:"1", name:"전력 사용"},
                    {index:"2", name:"열(스팀) 사용"},
                    {index:"3", name:"수도 사용"},
                    {index:"4", name:"폐기물"},
                    {index:"5", name:"고정연소"},
                    {index:"6", name:"이동 연소"},
                    {index:"7", name:"탈루 사용"},
                    {index:"8", name:"비료 사용"},
                    {index:"9", name:"대학 소유 동물"},
                    {index:"10", name:"산림에 의한 흡수"},
                    {index:"11",name:"폐기물 처리시설(매립)"},
                    {index:"12", name:"폐기물 처리시설(소각)"},
                    {index:"13", name: "폐기물 처리시설(하수처리)"},
                    {index:"14", name: "폐기물 처리시설(생물학적처리)"},
                    {index:"15", name: "폐기물 처리시설(폐수처리)"},
                ],
                info_text: "고정연소란?고정연소:  보일러, 버너, 터빈, 히터, 소각로, 엔진, flare 등과 같은 고정된 장비들을 사용하여 전력, 스팀, 열 또는 동력을 생산하는데 사용되는 연료의 연소로부터 발생하는 배출"
            }

        },
        components:{ 
            power_usageVue,
            steam_usageVue,
            Water_useageVue,
            Waste_usageVue,
            Stationary_combustionVue,
            Mobile_combustionVue,
            Fugitive_emissionsVue,
            Fertilizer_useVue,
            Animal_possessionVue,
            Forest_absorptionVue,
            Waste_disposalFillingVue,
            Waste_disposalIncinerationVue,
            Waste_disposalSewage_treatmentVue,
            Waste_disposalBiologicalVue,
            Waste_disposalWastewaterVue,
            measuretable,  
        },
        methods:{
            clickSearch(){
                this.SearchCategory=true,
                this.SelectCategory=false,
                this.info_board_defalt=true
            },
            clickSelect(){
                this.SearchCategory=false,
                this.SelectCategory=true
            },
            clickCategory(){
                this.info_board_defalt=false
            },
            clickInfoDrop(){
                this.info_board_defalt=!this.info_board_defalt
            },
            cilckRegister(childEvent){
                this.info_table_defalt=false
                this.info_list_input2.content = childEvent.content
                this.info_list_input2.data = childEvent.data
                this.info_list_input2.StartDate = childEvent.StartDate
                this.info_list_input2.EndDate = childEvent.EndDate
                this.info_list_input2.scope = childEvent.scope
            },
            click_register_table(){
                console.log("등록되었습니다")
            }
        }
    }
    
</script>