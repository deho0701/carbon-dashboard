<!--폐기물 처리시설 (폐수 처리)  -->
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
        <input type="text" class="addInfo_input" id ="building_name_input" placeholder="경상대 본관">
    </div>
    <div style="margin-top:30px">하폐수 처리 날짜
        <input class = "date_btn" id = "start_data" type="date" data-placeholder="시작 날짜" required aria-required="true">
        <input class = "date_btn" id = "end_data" type="date">
    </div>
    <div class="add_info_divide" >폐수 처리량
        <input class="addInfo_input" id="steam_usage_input" placeholder="12,456">
        <select class="addInfo_input" id="steam_usage_drop">
            <option value="0">m^3</option>
        </select>
    </div>
    <div class="add_info_divide" style="float:left; width:600px" >유입 농도(COD)
        <input class="addInfo_input" id="steam_usage_input" style="width:200px" placeholder="12,456">
        <select class="addInfo_input" id="steam_usage_drop" style="width:3.5vw">
            <option value="0">mg/L</option>
        </select>
    </div>
    <div class="add_info_divide" >유출 농도(COD)
        <input class="addInfo_input" id="steam_usage_input" placeholder="12,456">
        <select class="addInfo_input" id="steam_usage_drop">
            <option value="0">mg/L</option>
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
        name :"waste_disposal_Wastewater",
        data() {
        },
        components:{ 
        },
        methods:{
        
        }
    }
</script>