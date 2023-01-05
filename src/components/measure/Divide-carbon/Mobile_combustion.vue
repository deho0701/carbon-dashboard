<!--탄소 배출 내용 입력의 이동연소 부분 -->
<template>
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
    <div class="add_info_divide" style="margin-top:4vh">차량분류
        <select class="addInfo_input" id="operating_entity_input">
            <option value="0">승용차</option>
            <option value="1">승합차</option>
            <option value="2">화물차</option>
            <option value="3">이륜차</option>
            <option value="4">비도로 및 기타</option>
        </select>
        
    </div>
    <div class="add_info_divide">설비명
        <select class="addInfo_input" id="facility_name_input">
            <option value="0">기업 소유 및 운영</option>
            <option value="1">민간 임차</option>
        </select>
    </div>
    <div class="add_info_divide">연료정보
        <select v-model="unit_s" class="addInfo_input" id="fuel_info">
            <option v-for = "fule in fule_info_list" :value="fule.unit">{{fule.name}}</option>
        </select>
    </div>
    <div class="add_info_divide" >연료량
        <input class="addInfo_input" id="amount_fuel" placeholder="12,456">
        <select class="addInfo_input" id="power_usage_drop" v-if="unit_s=='L'">
            <option value="1">L</option>
        </select>
        <select class="addInfo_input" id="power_usage_drop" v-else-if="unit_s=='Nm^3'">
            <option value="2">Nm^3</option>
        </select>  
    </div>
    {{ info_list }}
    <button class ="input2_regi_btn" id="add_info_regi_btn" @click="click_regi_btn()">상단 정보 등록</button>
</template>

<style>
   
</style>

<script>
    export default {
        name :"power_usage",
        data() {
            return{
                unit_s:'L',
                fule_info_list:[
                    {name:'휘발유', unit:'L'},
                    {name:'경유', unit:'L'},
                    {name:'LPG', unit:'L'},
                    {name:'등유', unit:'L'},
                    {name:'윤활유', unit:'L'},
                    {name:'CNG', unit:'Nm^3'},
                    {name:'LNG', unit:'Nm^3'},
                ],
                info_list:{content:"",data:"",emissions:"",StartDate:"",EndDate:"",scope:"Scope1"},
            }
        },
        components:{ 
        },
        methods:{
            click_regi_btn(){
                var usage_input = document.getElementById('amount_fuel').value
                this.info_list.content = document.getElementById('carbon_emissions_content').value
                this.info_list.data =  usage_input+"L"
                this.info_list.emissions = usage_input+4
                this.info_list.StartDate = document.getElementById('start_data').value
                this.info_list.EndDate = document.getElementById('end_data').value
                this.$emit("childEvent");
            },  
        }
    }
</script>