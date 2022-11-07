<!--탄소 배출 내용 입력의 전력 사용 부분 -->
<template>
    <div class="add_info_divide" id="building_name_text">건물명 / 배출 시설명
        <input type="text" class="addInfo_input" id ="building_name_input" placeholder="본관">
    </div>
    <div class="add_info_divide">설비명
        <select class="addInfo_input" id="operating_entity_input">
            <option value="0">기업 소유 및 운영</option>
            <option value="1">민간 임차</option>
        </select>
        
    </div>
    <div class="add_info_divide">연료정보
        <select class="addInfo_input" id="supplier_drop">
            <option v-for = "fule in fule_info_list" value="fuel.index">{{fule.name}}</option>
        </select>
    </div>
    <div class="add_info_divide" >연료량
        <input class="addInfo_input" id="usage_input" placeholder="12,456">
        <select class="addInfo_input" id="power_usage_drop">
            <option value="0">kwh</option>
            <option value="1">wh</option>
        </select>
    </div>
</template>

<style>
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
        width:15%;
        background: #ffffff;
        border: 1px solid #DDE2E5;
    }

    #power_usage_drop{
        width: 5%;
        margin-left: 20px;
        color: #727374;
        margin-bottom: 20px;
    }

   
</style>

<script>
    export default {
        name :"stationary_combustion",
        data() {
            return{
                fule_info_list:[
                    {index:1, name: '원유'},
                    {index:2, name: '휘발유'},
                    {index:3, name: '실내 등유'},
                    {index:4, name: '보일러 등유'},
                    {index:5, name: '경유'},
                    {index:6, name: 'B-A유'},
                    {index:7, name: 'B-B유'},
                    {index:8, name: 'B-C유'},
                    {index:9, name: '프로판'},
                    {index:10, name: '부탄'},
                    {index:11, name: '나프타'},
                    {index:12, name: '용제'},
                    {index:13, name: '항공유'},
                    {index:14, name: '아스팔트'},
                    {index:15, name: '윤활유'},
                    {index:16, name: '석유코크'},
                    {index:17, name: '부생연료 1호'},
                    {index:18, name: '부생연료 2호'},
                    {index:19, name: '천연가스(LNG)'},
                    {index:20, name: '도시가스(LNG)'},
                    {index:21, name: '도시가스(LPG)'},
                    {index:22, name: '국내무연탄'},
                    {index:23, name: '수입무연탄(연료용)'},
                    {index:24, name: '수입무연탄(원료용)'},
                    {index:25, name: '유연탄(연료용)'},
                    {index:26, name: '아역청탄'},
                    {index:27, name: '코크스'},
                    {index:28, name: '전기(발전기준)'},
                    {index:29, name: '전기(소비기준)'},
                    {index:30, name: '신탄'},
                    

                ]
            }
        },
        components:{ 
        },
        methods:{
        
        }
    }
</script>