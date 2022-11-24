<!--폐기물 내용 입력의 사용 부분 -->
<template>
    <div class="add_info_divide" id="building_name_text">건물명 / 배출 시설명
        <input type="text" class="addInfo_input" id ="building_name_input" placeholder="본관">
    </div>
    <div class="add_info_divide">폐기물 처리 형태
        <select v-model="waste_treatment" class="addInfo_input" id="Waste_treatment_type">
            <option value="매립">매립</option>
            <option value="소각">소각</option>
            <option value="하폐수">하폐수</option>
        </select>
    </div>
    <div class="add_info_divide">폐기물 종류
        <select class="addInfo_input" id="waste_type" v-if ="waste_treatment=='매립'">
            <option value="0">생활</option>
            <option value="1">건설</option>
        </select>

        <select class="addInfo_input" id="waste_type" v-else-if ="waste_treatment=='소각'">
            <option value="0">건설</option>
            <option value="1">지정</option>
        </select>

        <select v-model="unit_value" class="addInfo_input" id="waste_type"  v-else-if ="waste_treatment=='하폐수'">
            <option value="하수">하수</option>
            <option value="폐수">폐수</option>
            <option value="분뇨">분뇨</option>
        </select>
    </div>
    <div class="add_info_divide">배출 주체
        <select class="addInfo_input" id="subject_emission">
            <option value="0">한국전력공사</option>
            <option value="1">직접 입력</option>
        </select>
    </div>
    <div class="add_info_divide" >폐기물 배출량
        <input class="addInfo_input" id="emissions" placeholder="12,456">
        <select class="addInfo_input" id="power_usage_drop" v-if ="waste_treatment=='매립' || waste_treatment=='소각'" >
            <option value="0">ton</option>
        </select>

        <select class="addInfo_input" id="power_usage_drop" v-else-if ="unit_value=='하수' || unit_value=='폐수'">
            <option value="1">m3</option>
        </select>

        <select class="addInfo_input" id="power_usage_drop"  v-else-if ="unit_value=='분뇨'">
            <option value="2">명</option>
        </select>
    </div>
</template>

<style>

#Waste_treatment_type{
    width: 20%;
    margin-left: 45px;
    color: #727374
}
#waste_type{
    width: 20%;
    margin-left: 77px;
    color: #727374
}
#subject_emission{
    width: 20%;
    margin-left: 90px;
    color: #727374
}
#emissions{
    width: 1%;
    margin-left: 60px;
    color: #727374;
    background: #ffffff;
    border: 1px solid #DDE2E5;
}

   
</style>

<script>
    export default {
        name :"waste_usage",
        data() {
            return{
                waste_treatment:'매립',
                unit_value:'하수'
            }
        },
        components:{ 
        },
        methods:{
        
        }
    }
</script>