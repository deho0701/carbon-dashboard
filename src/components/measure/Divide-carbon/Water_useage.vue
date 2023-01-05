<!--수도 사용 내용 입력의 사용 부분 -->
<template>
    <div style="color:black;">입력방식
            <label><input class="radio_btn" type="radio" name="methodRegist" value="직접 입력하기" checked>직접 입력하기</label>
            <label><input class="radio_btn" type="radio" name="methodRegist" value="엑셀 등록하기">엑셀 등록하기</label>
            <label><input class="radio_btn" type="radio" name="methodRegist" value="자동 연동하기">자동 연동하기</label>
    </div>
    <div style="margin-top:50px; ">
        탄소 배출 내용<br>
        <input type="text" class="addInfo_input" id="carbon_emissions_content">
    </div> 
    <div style="margin-top:30px">기간 설정
        <input class = "date_btn" id = "start_data" type="date" data-placeholder="시작 날짜" required aria-required="true" style="margin-left:80px">
        <input class = "date_btn" id = "end_data" type="date">
    </div>
    <div class="add_info_divide" id="building_name_text" style="margin-top:4vh">건물명 / 배출 시설명
        <input type="text" class="addInfo_input" id ="building_name_input" placeholder="본관">
    </div>
    <div class="add_info_divide">배출주체
        <select class="addInfo_input" id="operating_entity_input">
            <option value="0">기업 소유 및 운영</option>
            <option value="1">민간 임차</option>
        </select>
        
    </div>
    <div class="add_info_divide">공급처
        <select class="addInfo_input" id="supplier_drop">
            <option value="0">한국수자원공사</option>
            <option value="1">직접 입력</option>
        </select>
    </div>
    <div class="add_info_divide" >수도 사용량
        <input class="addInfo_input" id="usage_input" placeholder="12,456">
        <select class="addInfo_input" id="power_usage_drop">
            <option value="0">m3</option>
        </select>
    </div>
    {{ info_list }}
    <button class ="input2_regi_btn" id="add_info_regi_btn" @click="click_regi_btn()">상단 정보 등록</button>
</template>

<style>
   
</style>

<script>
    export default {
        name :"water_usage",
        data() {
            return{
                info_list:{content:"",data:"",emissions:"",StartDate:"",EndDate:"",scope:"Scope2"},
            }
        },
        components:{ 
        },
        methods:{
            click_regi_btn(){
                var usage_input = document.getElementById('emissions').value
                this.info_list.content = document.getElementById('carbon_emissions_content').value
                this.info_list.data =  usage_input+"m3"
                this.info_list.emissions = usage_input+4
                this.info_list.StartDate = document.getElementById('start_data').value
                this.info_list.EndDate = document.getElementById('end_data').value
                this.$emit("childEvent");
            },
        }
    }
</script>