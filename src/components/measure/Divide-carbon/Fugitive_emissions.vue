<!--탄소 배출 내용 입력의 탈루 사용 부분 -->
<template>
    <div>
        <div style="color:black;">입력방식
            <label><input class="radio_btn" type="radio" name="methodRegist" value="직접 입력하기" checked>직접 입력하기</label>
            <label><input class="radio_btn" type="radio" name="methodRegist" value="엑셀 등록하기">엑셀 등록하기</label>
        </div>
        <div style="margin-top:50px; ">
            탄소 배출 내용<br>
            <input type="text" class="addInfo_input" id="carbon_emissions_content">
        </div> 
        <div style="margin-top:30px">기간 설정
            <input class = "date_btn" id = "start_data" type="date" data-placeholder="시작 날짜" required aria-required="true">
            <input class = "date_btn" id = "end_data" type="date">
        </div>

        <div class="add_info_divide" style="margin-top:4vh">기기분류
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
    </div>
    {{ info_list }}
    <button class ="input2_regi_btn" id="add_info_regi_btn" @click="click_regi_btn()">상단 정보 등록</button>
    
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
                device:'냉장고',
                info_list:{content:"",data:"",emissions:"",StartDate:"",EndDate:"",scope:"Scope1"},
            }
        },
        components:{ 
            
        },
        methods:{
            click_regi_btn(){
                var usage_input = document.getElementById('amount_refrigerant').value
                this.info_list.content = document.getElementById('carbon_emissions_content').value
                this.info_list.data =  usage_input+"kg"
                this.info_list.emissions = usage_input+4
                this.info_list.StartDate = document.getElementById('start_data').value
                this.info_list.EndDate = document.getElementById('end_data').value
                this.$emit("childEvent");
            },
        
        }
    }
</script>