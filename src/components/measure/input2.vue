<template>
    <div class ="body_1">
        <div>
            <button class="input1_back_btn" onclick="location.href='/measure/input1';"> ◀ </button>
        </div>
        <div class="regi_category">
            <div>
                <div style="margin-bottom: 20px; font-size: 19px;">카테고리</div>
                <!-- 카테고리 보드판 -->
                <button :class ="{category_select: SearchCategory ,'nonClick_category':SelectCategory}"  @click="clickSearch" id="search" >카테고리별 검색</button>
                <button :class ="{category_select: SelectCategory, 'nonClick_category':SearchCategory }"  @click="clickSelect" id="select">카테고리명 선택</button><br>
                <input :class ="{input_category: SearchCategory}" placeholder="카테고리를 검색하세요." v-if="SearchCategory==true"/> 
                <select :class ="{input_category: SelectCategory}"  v-model="selected_category" mutiple placeholder="카테고리명을 선택하세요." v-if="SelectCategory==true" id="option">
                    <option v-for="category_name in category_option_list" :value="category_name.index">{{category_name.name}}</option>
                </select>
                <div :class="{info_text_category:SearchCategory}"  v-if="SearchCategory==true">카테고리를 선택해주세요.</div>
                <div :class="{info_text_category:SelectCategory}"  v-if="SelectCategory==true">{{info_text}}</div>
            </div>
        </div>
        <div>
            
            <div class = "info_board">
                <!-- 추가 정보 입력하기 상단 -->
                <div style="font-size: 19px;">추가정보 입력하기
                <button class="input1_back_btn" id="drop_btn" @click="clickInfoDrop" v-if ="info_board_defalt==true">▼</button>
                <button class="input1_back_btn" id="drop_btn" @click="clickInfoDrop"  v-if ="info_board_defalt==false">▲</button></div>
                
            </div>
            <!-- 추가 정보 입력하기 내용  -->
            <div v-if="selected_category!=''">
                <add_regi :class="{add_regi_page: info_board_defalt}" v-bind:selected_category_vue="selected_category" v-if="info_board_defalt==false"></add_regi>
            </div>
            
            <!-- 탄소 배출 내용 테이블 -->
            <div>
                <div class="info_board" id="info_board_bottom" v-if="info_table_defalt==true">
                    <button class= "measure_btn" id="btn_del_input2">선택 삭제</button> 
                    <button class= "measure_btn" id="btn_edit_input2">수정하기</button>
                    <div style="text-align: center; width:inherit; border: 1px solid rgba(206, 206, 206, 0.5); border-radius: 7px; margin-top: 15px; height: 350px; ">
                        <img style="margin-top:10%; width: 5%;" src="@/assets/exclamationMark.png" alt=""/>
                        <div style="margin-top:30px">데이터가 존재하지 않습니다.</div>
                    </div>
                    <ul class = "page_btn">
                        <li class ="page_btn_list" id="input2_page_btn_list" v-for="page in page_list">{{page}}</li>
                    </ul>
                </div>

                <div class="info_board" id="info_board_bottom" v-if="info_table_defalt==false">
                    <button class= "measure_btn" id="btn_del_input2">선택 삭제</button> 
                    <button class= "measure_btn" id="btn_edit_input2">수정하기</button>
                    <measuretable class="m_table" v-bind:emssion_info_list=emssion_info_list_input2></measuretable>
                    <ul class = "page_btn">
                        <li class ="page_btn_list" id="input2_page_btn_list" v-for="page in page_list">{{page}}</li>
                    </ul>
                </div>
               
            </div>


        </div>
        <!-- 등록/ 취소 버튼쓰 -->
        <div style="margin-left: 36%;">
            <button class="input2_regi_btn" id="input2-register-btn">등록하기</button>
            <button class="input2_regi_btn" id="input2-cancle-btn">취소하기</button>
            
        </div>

    </div>
</template>

<style>
    .regi_category{
        margin-top: 30px;
        padding: 25px;
        background-color: #ffffff;
        border-radius: 5px;
        height: auto;
        box-shadow: 0px 3px 10px #d5d5d5, 0px 2px 2px #d5d5d5;
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
        padding: 30px;
        background-color: #ffffff;
        border-radius: 5px;
        box-shadow: 0px 3px 10px #d5d5d5, 0px 2px 2px #d5d5d5;
        border: 1px solid #d5d5d5;
        height: inherit;
    }
    #info_board_bottom{
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 60px;
        margin-top: 0px;
        border: 0px;
    }
    #btn_del_input2{
        margin-top:0px;
        margin-left:0px
    }
    #btn_edit_input2{
        margin-top:0px
    }


    #drop_btn{
        float: right;
        width: 40px;
        height: 40px;
        vertical-align: middle;
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
    .add_regi_page{
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 60px;
        margin-top: 0px;
        border: 0px;
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
        border: 1px solid #E9E9E9;
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
import add_regi from "@/components/measure/addInfo-register"
import measuretable from "@/components/measure/Measuretable.vue"
    export default {
        
        name :"input2",
        data() {
            return{
                SearchCategory:true,
                SelectCategory:false,
                info_board_defalt:true,
                selected_category:'',
                info_table_defalt:true,

                emssion_info_list_input2:[],

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
                ],
                page_list:["<","1","2","3","4","5",">"],
                info_text: "고정연소란?고정연소:  보일러, 버너, 터빈, 히터, 소각로, 엔진, flare 등과 같은 고정된 장비들을 사용하여 전력, 스팀, 열 또는 동력을 생산하는데 사용되는 연료의 연소로부터 발생하는 배출"
            }

        },
        components:{ 
            add_regi,
            measuretable
            
        },
        methods:{
            clickSearch(){
                this.SearchCategory=true,
                this.SelectCategory=false
            },
            clickSelect(){
                this.SearchCategory=false,
                this.SelectCategory=true
            },
            clickInfoDrop(){
                this.info_board_defalt=!this.info_board_defalt

            }
        }
    }
    
</script>