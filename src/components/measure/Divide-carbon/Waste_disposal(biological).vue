<!--폐기물 처리 시설 (생물학적 처리) -->
<template>
    <div style="color:black;">입력방식
            <label><input class="radio_btn" type="radio" name="methodRegist" value="직접 입력하기" checked>직접 입력하기</label>
            <label><input class="radio_btn" type="radio" name="methodRegist" value="엑셀 등록하기">엑셀 등록하기</label>
    </div>
    <div style="margin-top:50px; ">
        탄소 배출 내용<br>
        <input type="text" class="addInfo_input" id="carbon_emissions_content">
    </div> 

    <div class="add_info_divide" id="building_name_text" style="margin-top:4vh">시설명/위치
        <input type="text" class="addInfo_input" id ="building_name_input" placeholder="성남시" style="margin-left:72px;">
    </div>
    <div style="margin-top:30px">처리날짜
        <input class = "date_btn" id = "start_data" type="date" data-placeholder="시작 날짜" required aria-required="true" style="margin-left:82px;">
        <input class = "date_btn" id = "end_data" type="date">
    </div>
    <div class="add_info_divide" >처리 용량
        <input class="addInfo_input" id="waste_usage_input" placeholder="12,456">
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
    {{ info_list }}
    <button class ="input2_regi_btn" id="add_info_regi_btn" @click="click_regi_btn()">상단 정보 등록</button>
</template>

<style>

    #supplier_drop_steam{
        width: 20%;
        margin-left: 90px;
        color: #727374
    }

    #waste_usage_input{
        margin-left:85px;
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
            return{
                info_list:{content:"",data:"",emissions:"",StartDate:"",EndDate:"",scope:"Scope1"},
            }
        },
        components:{ 
        },
        methods:{
            click_regi_btn(){
                var usage_input = document.getElementById('waste_usage_input').value
                this.info_list.content = document.getElementById('carbon_emissions_content').value
                this.info_list.data =  usage_input+"m^3"
                this.info_list.emissions = usage_input+4
                this.info_list.StartDate = document.getElementById('start_data').value
                this.info_list.EndDate = document.getElementById('end_data').value
                this.$emit("childEvent");
            },   
        }
    }
</script>