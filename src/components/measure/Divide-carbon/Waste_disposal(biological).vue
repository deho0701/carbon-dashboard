<!--폐기물 처리 시설 (생물학적 처리) -->
<template>
    <div style="color:black;">입력방식
            <label><input class="radio_btn" type="radio" name="methodRegist" value="직접 입력하기" checked>직접 입력하기</label>
            <label><input class="radio_btn" type="radio" name="methodRegist" value="엑셀 등록하기">엑셀 등록하기</label>
    </div>
    <div style="margin-top:30px; ">
        탄소 배출 내용<br>
        <input type="text" class="addInfo_input" id="carbon_emissions_content">
    </div> 

    <div class="add_info_divide" id="building_name_text">시설명/위치
        <input type="text" class="addInfo_input" id ="building_name_input" placeholder="성남시">
    </div>
    
    <div class="add_info_divide" >처리 용량
        <input class="addInfo_input" id="steam_usage_input" placeholder="12,456">
        <select class="addInfo_input" id="steam_usage_drop">
            <option value="0">m^3</option>
        </select>
    </div>
    <div class="add_info_divide">처리방식
        <select class="addInfo_input" id="supplier_drop_steam">
            <option value="0">사료화 퇴비화</option>
            <option value="1">혐기성 소화</option>
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
        width:14%;
        background: #ffffff;
        border: 1px solid #DDE2E5;
    }

    #steam_usage_drop{
        width: 4.6%;
        margin-left: 1%;
        color: #727374;
        margin-bottom: 20px;
    }

   
</style>

<script>
    export default {
        name :"waste_disposal_biological",
        data() {
        },
        components:{ 
        },
        methods:{
        
        }
    }
</script>