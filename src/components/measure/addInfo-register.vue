<!-- 추가 정보 입력하기 내용 -->
<template>
    <div class="info_board" id="add_info">
        <div><br>
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
            <Waste_disposalFillingVue class="forest_absorptionVue_page" v-else-if = "selected_category_vue==11"></Waste_disposalFillingVue>
            <Waste_disposalIncinerationVue class="forest_absorptionVue_page" v-else-if = "selected_category_vue==12"></Waste_disposalIncinerationVue>
            <Waste_disposalSewage_treatmentVue class="forest_absorptionVue_page" v-else-if = "selected_category_vue==13"></Waste_disposalSewage_treatmentVue>
            <Waste_disposalBiologicalVue class="forest_absorptionVue_page" v-else-if = "selected_category_vue==14"></Waste_disposalBiologicalVue>
            <Waste_disposalWastewaterVue class="forest_absorptionVue_page" v-else-if = "selected_category_vue==15"></Waste_disposalWastewaterVue>
        </div>
        <button class ="input2_regi_btn" id="add_info_regi_btn" @click="click_regi_btn()">상단 정보 등록</button>     
    </div>
</template>

<style>
        #add_info_regi_btn{
            margin-top:6vh;
            background:#3DC984;
            border: none;
            color: #ffffff;
            margin-left: 34vw;
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
import Waste_disposalFillingVue from './Divide-carbon/Waste_disposal(filling).vue';
import Waste_disposalIncinerationVue from './Divide-carbon/Waste_disposal(incineration).vue';
import Waste_disposalSewage_treatmentVue from './Divide-carbon/Waste_disposal(sewage_treatment).vue';
import Waste_disposalBiologicalVue from './Divide-carbon/Waste_disposal(biological).vue';
import Waste_disposalWastewaterVue from './Divide-carbon/Waste_disposal(Wastewater).vue';


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
            Forest_absorptionVue,
            Waste_disposalFillingVue,
            Waste_disposalIncinerationVue,
            Waste_disposalSewage_treatmentVue,
            Waste_disposalBiologicalVue,
            Waste_disposalWastewaterVue
        },
        methods:{
            click_regi_btn(){
                this.$emit("childEvent");
            }
        }
    }
    
</script>