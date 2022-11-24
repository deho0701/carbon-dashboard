<!--탄소 배출 내용 입력의 이동연소 부분 -->
<template>
    <div class="add_info_divide">차량분류
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
                ]
            }
        },
        components:{ 
        },
        methods:{
        
        }
    }
</script>