<!-- 폐기물 처리 시설(소각)  -->
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
        <input type="text" class="addInfo_input" id ="building_name_input" placeholder="성남시" style="margin-left:95px;">
    </div>
    <div style="margin-top:30px">소각 날짜
        <input class = "date_btn" id = "start_data" type="date" data-placeholder="시작 날짜" required aria-required="true" style="margin-left:100px">
        <input class = "date_btn" id = "end_data" type="date">
    </div>

    <div class="add_info_divide">폐기물 분류
        <select v-model="kindOfwaste" class="addInfo_input" id="operating_entity_input">
            <option :value="0">생활 폐기물</option>
            <option :value="1">사업장 폐기물</option>
        </select>
    </div>
    <div class="add_info_divide">폐기물 세부 구분
        <select class="addInfo_input" id="supplier_drop" v-if="kindOfwaste == '0'" style="margin-left:62px">
            <option v-for = "waste in waste_life_list" >{{waste}}</option>
        </select>
        <select class="addInfo_input" id="supplier_drop" v-else-if="kindOfwaste == '1'" style="margin-left:62px">
            <option v-for = "waste in waste_corpor_list" >{{waste}}</option>
        </select>
    </div>
    <div class="add_info_divide">소각 기술
        <select class="addInfo_input" id="supplier_drop_steam" style="margin-left:108px">
            <option value="0">연속식 -고정상</option>
            <option value="1">연속식 - 유동상</option>
            <option value="2">준연속식 - 고정상</option>
            <option value="3">준연속식 - 유동상</option>
            <option value="4">화분식 - 고정상</option>
            <option value="5">화분식 - 유동상</option>
            <option value="6">기타</option>
        </select>
    </div>
    <div class="add_info_divide" >소각 양
        <input class="addInfo_input" id="steam_usage_input" placeholder="12,456" style="margin-left:122px">
        <select class="addInfo_input" id="steam_usage_drop">
            <option value="0">ton</option>
        </select>
    </div>
    {{info_list}}
    <button class ="input2_regi_btn" id="add_info_regi_btn" @click="click_regi_btn()">상단 정보 등록</button>
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
                info_list:{content:"",data:"",emissions:"",StartDate:"",EndDate:"",scope:"Scope1"},
                kindOfwaste: "0",
                waste_life_list:[
                    "종이/편지",
                    "섬유",
                    "음식물",
                    "목재",
                    "정원 및 공원 폐기물",
                    "기귀",
                    "고무 및 가죽",
                    "플라스틱",
                    "금속",
                    "유리",
                    "기타,비활성(불연성)"
                ],
                waste_corpor_list:[
                    "음식, 음료 및 담배",
                    "섬유",
                    "나무 및 목제품",
                    "제지",
                    "석유제품, 용매, 플라스틱",
                    "고무",
                    "건설 및 파쇄 잔대물",
                    "기타",
                    "하수 슬러지",
                    "폐수 슬러지",
                    "병원성 폐기물",
                    "역상 폐기물"
                ],
            }
        },
        components:{ 
        },
        methods:{
            click_regi_btn(){
                var usage_input = document.getElementById('steam_usage_input').value
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