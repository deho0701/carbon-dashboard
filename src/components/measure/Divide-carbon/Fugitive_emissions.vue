<!--탄소 배출 내용 입력의 탈루 사용 부분 -->
<template>

    <div class="add_info_divide">기기분류
        <select v-model="device" class="addInfo_input" id="operating_entity_input">
            <option value="냉장고">냉장고</option>
            <option value="에어컨">에어컨</option>
        </select>
        
    </div>
    <div class="add_info_divide"> 냉매종류
        <select class="addInfo_input" id="refrigerant_type" v-if="device=='냉장고'">
            <option value="0">HFC-134a</option>
        </select>
        <select class="addInfo_input" id="refrigerant_type" v-else-if="device=='에어컨'">
            <option value="0">R-407c</option>
            <option value="1">R-410a</option>
        </select>
    </div>
    <div class="add_info_divide" >냉매량
        <input class="addInfo_input" id="amount_refrigerant" placeholder="12,456">
        <select class="addInfo_input" id="power_usage_drop">
            <option value="0">kg</option>
        </select>
    </div>
    <div class="add_info_divide" >설치대수
        <input class="addInfo_input" id="nun_installations" placeholder="12,456">
        <select class="addInfo_input" id="power_usage_drop">
            <option value="0">대</option>
        </select>
    </div>
</template>

<style>
    #refrigerant_type{
        width: 20%;
        margin-left: 95px;
        color: #727374
    }

    #amount_refrigerant{
        margin-left:110px;
        width:14%;
        background: #ffffff;
        border: 1px solid #DDE2E5;
    }

    #nun_installations{
        margin-left:95px;
        width:14%;
        background: #ffffff;
        border: 1px solid #DDE2E5;
    }
    

</style>

<script>
    export default {
        name :"power_usage",
        data() {
            return{
                device:'냉장고'
            }
        },
        components:{ 
        },
        methods:{
        
        }
    }
</script>