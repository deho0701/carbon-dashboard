<template>
    <div class="info_board" id="add_info">
        <div>입력방식
            <label><input class="radio_btn" type="radio" name="methodRegist" value="직접 입력하기" checked>직접 입력하기</label>
            <label><input class="radio_btn" type="radio" name="methodRegist" value="엑셀 등록하기">엑셀 등록하기</label>
        </div>
        <div style="margin-top:30px">
            탄소 배출 내용<br>
            <input type="text" class="addInfo_input" id="carbon_emissions_content">
        </div> 
        <div style="margin-top:30px">기간 설정</div>
        <div style="margin-top:30px">구분<br>
            <power_usageVue class="power_usage_page"></power_usageVue>
        </div>
        <button class ="input2_regi_btn" id="add_info_regi_btn" style="margin-top:30px">상단 정보 등록</button>

        
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
        height: 30px;
        margin-top: 20px;
        background: #F6F7FB;
        border: 0px;
        border-radius: 7px;
    }
    .addInfo_input:focus{
        outline: none;
    }
    .add_info_divide{
        margin-top: 20px;
        font-size: 14px;
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
    


</style>
<script>
import power_usageVue from './Divide-carbon/power_usage.vue';
    export default {
        name :"addInfo-register",
        data() {
        },
        components:{ 
            power_usageVue
        },
        methods:{
        
        }
    }
    
</script>