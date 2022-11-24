<!--탄소 배출 내용 입력의 비료 사용 부분 -->
<template>
    <div class="add_info_divide" id="building_name_text">비료 사용 위치
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
</template>

<style>

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