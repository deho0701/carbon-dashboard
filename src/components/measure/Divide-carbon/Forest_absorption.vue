<!--탄소 배출 내용 입력의 전력 사용 부분 -->
<template>
    <div class="add_info_divide">산림 유형
        <select class="addInfo_input" id="operating_entity_input">
            <option value="0">혼효림</option>
            <option value="1">활엽수</option>
            <option value="2">침엽수</option>
        </select>
        
    </div>
    <div class="add_info_divide">확보자료 유형
        <select class="addInfo_input" id="supplier_drop" style="margin-left:65px">
            <option value="0">임야면적</option>
            <option value="1">조림면적</option>
        </select>
    </div>
    <div class="add_info_divide" >범위
        <input class="addInfo_input" id="usage_input" style="margin-left:125px" placeholder="12">
        <select class="addInfo_input" id="power_usage_drop">
            <option value="0">ha</option>
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