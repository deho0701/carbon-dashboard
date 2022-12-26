<!--탄소 배출 내용 입력의 전력 사용 부분 -->
<template>
    <div>
        <div style="color:black;">입력방식
            <label><input class="radio_btn" type="radio" name="methodRegist" value="직접 입력하기" checked>직접 입력하기</label>
            <label><input class="radio_btn" type="radio" name="methodRegist" value="엑셀 등록하기">엑셀 등록하기</label>
            <label><input class="radio_btn" type="radio" name="methodRegist" value="자동 연동하기">자동 연동하기</label>
        </div>
        <div style="margin-top:30px; ">
            탄소 배출 내용<br>
            <input type="text" class="addInfo_input" id="carbon_emissions_content">
        </div> 
        <div style="margin-top:30px">기간 설정
            <input class = "date_btn" id = "start_data" type="date" data-placeholder="시작 날짜" required aria-required="true">
            <input class = "date_btn" id = "end_data" type="date">
        </div>
        <div class="add_info_divide" id="building_name_text">건물명 / 배출 시설명
            <input type="text" class="addInfo_input" id ="building_name_input" placeholder="경상대 본관">
        </div>
        <div class="add_info_divide">운영주체
            <select class="addInfo_input" id="operating_entity_input">
                <option value="0">기업 소유 및 운영</option>
                <option value="1">민간 임차</option>
            </select>
            
        </div>
        <div class="add_info_divide">공급처
            <select class="addInfo_input" id="supplier_drop">
                <option value="0">한국전력공사</option>
                <option value="1">직접 입력</option>
            </select>
        </div>
        <div class="add_info_divide" >전력 사용량
            <input class="addInfo_input" id="usage_input" placeholder="12,456">
            <select class="addInfo_input" id="power_usage_drop">
                <option value="0">kwh</option>
                <option value="1">wh</option>
            </select>
        </div>
    </div>
</template>

<style>
    #add_info{
        margin-top: 0px;
        border: 0px;
    }

    .radio_btn{
        margin-left:60px; 
    }
    .addInfo_input{
        width: 80%;
        height: 40px;
        margin-top: 20px;
        background: #F6F7FB;
        border: 0px;
        border-radius: 7px;
    }
    #carbon_emissions_content{
        height:35px;
    }
    .addInfo_input:focus{
        outline: none;
    }
    .add_info_divide{
        margin-top: 20px;
        font-size: 14px;
    }
    .date_btn{
        width: 150px;
        margin-left: 60px;
        height: 35px;
        background: #F6F7FB;
        border: 0px;
        border-radius: 7px;
        color: #727374;
        padding-inline-start: 1%;
        padding-inline-end: 1%;
        content: attr(data-placeholder);
    }
    .date_btn:focus{
        outline:none;
    }
    #add_info_regi_btn{
        background:#3DC984;
        border: none;
        color: #ffffff;
        margin-left: 46%;
        margin-bottom: 20px;
    }
    #add_info_regi_btn:hover{
        background:#2cb570;
    }   
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
    
    #usage_input{
        margin-left:75px;
        width:14%;
        background: #ffffff;
        border: 1px solid #DDE2E5;
    }

    #power_usage_drop{
        width: 4.6%;
        margin-left: 1%;
        color: #727374;
        margin-bottom: 20px;
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