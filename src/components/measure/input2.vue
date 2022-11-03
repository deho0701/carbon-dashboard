<template>
    <div class ="body_1">
        <div>
            <button class="input1_back_btn" onclick="location.href='/measure/input1';"> ◀ </button>
        </div>
        <div class="regi_category">
            <div style = "margin: 25px;">
                <div style="margin-bottom: 20px; font-size: 19px; ">카테고리</div>
                <button :class ="{category_select: SearchCategory ,'nonClick_category':SelectCategory}"  @click="clickSearch" id="search" >카테고리별 검색</button>
                <button :class ="{category_select: SelectCategory, 'nonClick_category':SearchCategory }"  @click="clickSelect" id="select">카테고리명 선택</button><br>
                <input :class ="{input_category: SearchCategory}" placeholder="카테고리를 검색하세요." v-if="SearchCategory==true"/> 
                <select :class ="{input_category: SelectCategory}" placeholder="카테고리명을 선택하세요." v-if="SelectCategory==true" id="option">
                    <option v-for="category_name in category_option_list" value="{{category_name.index}}">{{category_name.name}}</option>
                </select>
                <div class="info_text_category">카테고리를 선택해주세요</div>
            </div>
        </div>
        <div class="info_board">
        </div>
        <div style="margin-left: 450px;">
            <button class="input2_regi_btn" id="input2-register-btn">등록하기</button>
            <button class="input2_regi_btn" id="input2-cancle-btn">취소하기</button>
        </div>

    </div>
</template>

<style>
    .regi_category{
        margin-top: 30px;
        padding: 3px;
        background-color: #ffffff;
        border-radius: 5px;
        height: auto;
    }
    .info_text_category{
        font-size: 12px;
        font-weight: 600;
        margin-top: 10px;
        color: #3DC984
    }
    #option{
        height: 34px;
        width: 80.3%;
    }
    .info_board{
        margin-top: 30px;
        padding: 3px;
        background-color: #ffffff;
        border-radius: 5px;
        height: 400px

    }
    .input2_regi_btn{
        margin-top: 40px;
        background:#ffffff;
        border: 2px solid #d5d5d5;
        border-radius: 10px;
        height: 45px;
        width: 150px;
        margin-left: 50px;
        font-size: 14px;
    }
    .input2_regi_btn:hover{
        background:  #f0f0f0;
    }
    #input2-register-btn{
        background:#3DC984;
        border: none;
        color: #ffffff;
    }
    #input2-register-btn:hover{
        background:#2cb570;
    }
</style>
<style : scoped>
    .category_select{
        border-radius: 5px;
        border: none;
        height: 32px;
        width: 110px;
        background-color:#3DC984; 
        font-size: 12px;
        color: #ffffff;
    }
    .nonClick_category{
        border-radius: 5px;
        border: 1px solid #d5d5d5;
        height: 32px;
        width: 110px;
        background-color: #ffffff; 
        font-size: 12px;
    }
    #select{
        margin-left: 10px;
    }
    .input_category{
        background-color: #ffffff; 
        border-radius: 5px;
        border: 1px solid #d5d5d5;
        width: 80%;
        height: 30px;
        margin-top:10px
        
    }
    .input_category:focus{
        outline: none;
    }
    .select_category{

    }

    
</style>
<script>
    export default {
        name :"input2",
        data() {
            return{
                SearchCategory:true,
                SelectCategory:false,

                category_option_list:[
                    {index:"1", name:"전력 사용"},
                    {index:"2", name:"열(스팀) 사용"},
                    {index:"3", name:"수도 사용"},
                    {index:"4", name:"폐기물"},
                    {index:"5", name:"고정연소"},
                    {index:"6", name:"이동 연소"},
                    {index:"7", name:"탈루 사용"},
                    {index:"8", name:"비료 사용"},
                    {index:"9", name:"대학 소유 동물"},
                    {index:"10", name:"산림에 의한 흡수"},
                ]
            }

        },
        components:{ 
        },
        methods:{
            clickSearch(){
                this.SearchCategory=true,
                this.SelectCategory=false
            },
            clickSelect(){
                this.SearchCategory=false,
                this.SelectCategory=true
            }
        }
    }
    
</script>