
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
    <div class="add_info_divide" >전력 사용량
        <input class="addInfo_input" id="power_usage_input" placeholder="12,456">
        <select class="addInfo_input" id="power_usage_drop">
            <option value="0">kwh</option>
            <option value="1">wh</option>
        </select>
    </div>
</template>

<style>
     #building_name_text{
        margin-top:20px
    }
    #building_name_input{
        margin-top:0px;
        width:20%;
        background: #ffffff;
        border: 1px solid #DDE2E5;
        margin-left: 20px;
    }

    #operating_entity_input{
        width: 20%;
        margin-left: 95px;
        color: #727374
        
    }

    #supplier_drop{
        width: 20%;
        margin-left: 110px;
        color: #727374
    }
    
    #power_usage_input{
        margin-left:75px;
        width:15%;
        background: #ffffff;
        border: 1px solid #DDE2E5;
    }

    #power_usage_drop{
        width: 5%;
        margin-left: 20px;
        color: #727374;
        margin-bottom: 20px;
    }

   
</style>

<script>
    export default {
        name :"power_usage",
        data() {
        },
        components:{ 
        },
        methods:{
        
        }
    }
</script>