<!--수도 사용 내용 입력의 전력 사용 부분 -->
<template>
    <div class="add_info_divide" id="building_name_text">건물명 / 배출 시설명
        <input type="text" class="addInfo_input" id ="building_name_input" placeholder="본관">
    </div>
    <div class="add_info_divide">배출주체
        <select class="addInfo_input" id="operating_entity_input">
            <option value="0">기업 소유 및 운영</option>
            <option value="1">민간 임차</option>
        </select>
        
    </div>
    <div class="add_info_divide">공급처
        <select class="addInfo_input" id="supplier_drop">
            <option value="0">한국수자원공사</option>
            <option value="1">직접 입력</option>
        </select>
    </div>
    <div class="add_info_divide" >수도 사용량
        <input class="addInfo_input" id="usage_input" placeholder="12,456">
        <select class="addInfo_input" id="power_usage_drop">
            <option value="0">m3</option>
            <option value="1">km3</option>
        </select>
    </div>
</template>

<style>
   
</style>

<script>
    export default {
        name :"water_usage",
        data() {
        },
        components:{ 
        },
        methods:{
        
        }
    }
</script>