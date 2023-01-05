<!--탄소 배출 내용 입력의 비료 사용 부분 -->
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

    <div class="add_info_divide" id="building_name_text" style="margin-top:4vh">비료 사용 위치
        <input type="text" class="addInfo_input" id ="building_name_input" placeholder="본관 앞 마당" style="margin-left:55px">
    </div>
    <div class="add_info_divide">비료 분류
        <select class="addInfo_input" id="supplier_drop"  style="margin-left:90px">
            <option value="0">석회비료</option>
            <option value="1">요소비료</option>
            <option value="1">질소질비료</option>
        </select>
    </div>
    <div class="add_info_divide" >비료 사용량
        <input class="addInfo_input" id="usage_input" placeholder="12,456">
        <select class="addInfo_input" id="power_usage_drop">
            <option value="0">ton</option>
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
                info_list:{content:"",data:"",emissions:"",StartDate:"",EndDate:"",scope:"Scope1"},
            }
        },
        components:{ 
        },
        methods:{
            click_regi_btn(){
                var usage_input = document.getElementById('usage_input').value
                this.info_list.content = document.getElementById('carbon_emissions_content').value
                this.info_list.data =  usage_input+"ton"
                this.info_list.emissions = usage_input+4
                this.info_list.StartDate = document.getElementById('start_data').value
                this.info_list.EndDate = document.getElementById('end_data').value
                this.$emit("childEvent");
            },
        
        }
    }
</script>