<!-- 추가 정보 입력하기 내용 -->
<template>
    <div class="info_board" id="add_info">
        <div style="color:black;">입력방식
            <label><input class="radio_btn" type="radio" name="methodRegist" value="직접 입력하기" checked>직접 입력하기</label>
            <label><input class="radio_btn" type="radio" name="methodRegist" value="엑셀 등록하기">엑셀 등록하기</label>
            <label><input class="radio_btn" type="radio" name="methodRegist" value="자동 연동하기">자동 연동하기</label>
        </div>
        <div style="margin-top:30px; ">
            탄소 배출 내용<br>
            <input type="text" class="addInfo_input" id="carbon_emissions_content">
        </div> 
        <div style="margin-top:30px">기간 설정
            <input class = "date_btn" id = "start_data" type="date" data-placeholder="시작 날짜" required aria-required="true">
            <input class = "date_btn" id = "end_data" type="date">
        </div>
        <div style="margin-top:30px">구분<br>
            <!-- '구분'에서 카테고리별 상세 내용 -->
            <power_usageVue class="power_usage_page" v-if = "selected_category_vue==1"></power_usageVue>
            <steam_usageVue class="steam_usage_page" v-else-if = "selected_category_vue==2"></steam_usageVue>
            <Water_useageVue class="water_usage_page" v-else-if = "selected_category_vue==3"></Water_useageVue>
            <Waste_usageVue class="wast_usage_page" v-else-if = "selected_category_vue==4"></Waste_usageVue>
            <Stationary_combustionVue class="stationary_combustion_page" v-else-if = "selected_category_vue==5"></Stationary_combustionVue>
            <Mobile_combustionVue class="mobile_combustion_page" v-else-if = "selected_category_vue==6"></Mobile_combustionVue>
            <Fugitive_emissionsVue class="fugitive_emissions_page" v-else-if = "selected_category_vue==7"></Fugitive_emissionsVue>
            <Fertilizer_useVue class="fertilizer_use_page" v-else-if = "selected_category_vue==8"></Fertilizer_useVue>
            <Animal_possessionVue class="animal_possession_page" v-else-if = "selected_category_vue==9"></Animal_possessionVue>
            <Forest_absorptionVue class="forest_absorptionVue_page" v-else-if = "selected_category_vue==10"></Forest_absorptionVue>
        </div>
        <button class ="input2_regi_btn" id="add_info_regi_btn" style="margin-top:30px">상단 정보 등록</button>     
    </div>
</template>

<style>
    #add_info{
        margin-top: 0px;
        border: 0px;
    }

    .radio_btn{
        margin-left:60px; 
    }
    .addInfo_input{
        width: 80%;
        height: 40px;
        margin-top: 20px;
        background: #F6F7FB;
        border: 0px;
        border-radius: 7px;
    }
    #carbon_emissions_content{
        height:35px;
    }
    .addInfo_input:focus{
        outline: none;
    }
    .add_info_divide{
        margin-top: 20px;
        font-size: 14px;
    }
    .date_btn{
        width: 150px;
        margin-left: 60px;
        height: 35px;
        background: #F6F7FB;
        border: 0px;
        border-radius: 7px;
        color: #727374;
        padding-inline-start: 1%;
        padding-inline-end: 1%;
        content: attr(data-placeholder);
    }
    .date_btn:focus{
        outline:none;
    }
    #add_info_regi_btn{
        background:#3DC984;
        border: none;
        color: #ffffff;
        margin-left: 46%;
        margin-bottom: 20px;
    }
    #add_info_regi_btn:hover{
        background:#2cb570;
    }
    


</style>
<script>
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


    export default {

        
        name :"addInfo-register",
        props: ["selected_category_vue"],
        data() {
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
            Forest_absorptionVue
        },
        methods:{
        
        }
    }
    
</script>