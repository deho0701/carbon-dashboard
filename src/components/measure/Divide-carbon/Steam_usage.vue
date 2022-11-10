<template>
    <div class="add_info_divide" id="building_name_text">건물명 / 배출 시설명
        <input type="text" class="addInfo_input" id ="building_name_input" placeholder="경상대 본관">
    </div>
    <div class="add_info_divide">운영주체
        <select class="addInfo_input" id="operating_entity_input">
            <option value="0">기업 소유 및 운영</option>
            <option value="1">민간 임차</option>
        </select>
        
    </div>
    <div class="add_info_divide">공급처
        <select class="addInfo_input" id="supplier_drop">
            <option value="0">한국전력공사</option>
            <option value="1">직접 입력</option>
        </select>
    </div>
    <div class="add_info_divide">연료 종류
        <select class="addInfo_input" id="supplier_drop_steam">
            <option value="0">스팀(열전용)</option>
            <option value="1">스팀(열병합)</option>
            <option value="2">스팀(일반)</option>
        </select>
    </div>
    <div class="add_info_divide" >열 사용량
        <input class="addInfo_input" id="steam_usage_input" placeholder="12,456">
        <select class="addInfo_input" id="steam_usage_drop">
            <option value="0">Gh</option>
            <option value="1">Mh</option>
        </select>
    </div>
</template>

<style>

    #supplier_drop_steam{
        width: 20%;
        margin-left: 90px;
        color: #727374
    }

    #steam_usage_input{
        margin-left:90px;
        width:15%;
        background: #ffffff;
        border: 1px solid #DDE2E5;
    }

    #steam_usage_drop{
        width: 5%;
        margin-left: 20px;
        color: #727374;
        margin-bottom: 20px;
    }

   
</style>

<script>
    export default {
        name :"steam_usage",
        data() {
        },
        components:{ 
        },
        methods:{
        
        }
    }
</script>