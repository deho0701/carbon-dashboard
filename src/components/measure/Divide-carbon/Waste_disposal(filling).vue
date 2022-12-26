<!-- 폐기물 처리 시설(매립)  -->
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
    <div style="margin-top:30px">매립 시작 날짜
        <input class = "date_btn" id = "start_data" type="date" data-placeholder="시작 날짜" required aria-required="true">
    </div>

    <div class="add_info_divide">폐기물 분류
        <select v-model="kindOfwaste" class="addInfo_input" id="operating_entity_input">
            <option :value="0">생활 폐기물</option>
            <option :value="1">사업장 폐기물</option>
        </select>
    </div>
    <div class="add_info_divide">폐기물 세부 구분
        <select class="addInfo_input" id="supplier_drop" v-if="kindOfwaste == '0'">
            <option v-for = "waste in waste_life_list" >{{waste}}</option>
        </select>
        <select class="addInfo_input" id="supplier_drop" v-else-if="kindOfwaste == '1'">
            <option v-for = "waste in waste_corpor_list" >{{waste}}</option>
        </select>
    </div>
    <div class="add_info_divide">매립 시설 유형
        <select class="addInfo_input" id="supplier_drop_steam">
            <option value="0">관리형 매립지 - 혐기성</option>
            <option value="1">관리형 매립지 - 준호기성</option>
            <option value="2">비관리형 매립지 - 매립고 5cm 이상</option>
            <option value="3">비관리형 매립지 - 매립고 5cm 미만</option>
            <option value="4">기타</option>
        </select>
    </div>
    <div class="add_info_divide" >매립 양
        <input class="addInfo_input" id="steam_usage_input" placeholder="12,456">
        <select class="addInfo_input" id="steam_usage_drop">
            <option value="0">톤</option>
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
        name :"waste_disposal_filling",
        data() {
            return{
                kindOfwaste: "0",
                waste_life_list:[
                    "혼합 폐기물",
                    "종이/편지",
                    "섬유",
                    "음식물",
                    "목재",
                    "정원 및 공원 폐기물",
                    "기져귀",
                    "고무 및 가죽",
                    "플라스틱",
                    "금속",
                    "유리",
                    "기타,비활성(불연성)"
                ],
                waste_corpor_list:[
                    "혼합 폐기물",
                    "음식, 음료 및 담배",
                    "섬유",
                    "나무 및 목제품",
                    "제지",
                    "석유제품, 용매, 플라스틱",
                    "고무",
                    "건설 및 파쇄 잔대물",
                    "기타",
                    "하수 슬러지",
                    "폐수 슬러지"
                ],
            }
        },
        components:{ 
        },
        methods:{
        
        }
    }
</script>