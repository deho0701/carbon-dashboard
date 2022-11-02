<template>
    <div class ="body_1">
        <div>
            <button class="input1_back_btn" onclick="location.href='/measure';"> ◀ </button>
        </div>
        <div class="total_carbon" >
            <img style=" margin:30px; width: 70px; height: 70px; float: left; position: relative;" src="@/assets/co2_background.png" alt="" class="menu-icon"/>
            <div style="color:#223354; font-size:18px; font-weight:600; margin-top:20px; position: relative; float: left;">총 탄소 배출량
                <div class="chart"></div>
            </div>
            <div style="margin-right:40px">
                <div class="emissions">
                    <p class ="text_">0CO2kg</p>
                    <p class ="text_" id="text_kor">질소 배출량</p>
                </div>
                <div class="emissions">
                    <p class ="text_">0CO2kg</p>
                    <p class ="text_" id="text_kor">메탄 배출량</p>
                </div>
            </div>
        </div>
        <div class="info_group">
            <p style="margin-top:30px; font-weight: 700; font-size: 18px;">그룹 정보</p>
            <div class="info_group_content">
                <li class ="info_text" v-for="text in info_Group_Text">{{text}}</li>
            </div>
        </div>

        <div>
            <button class="edit_btn1">선택삭제</button>
            <button class="edit_btn">복사하기</button>
            <button class="edit_btn">수정하기</button>

            <button class="register">+　등록하기</button>
            <button class="excel">엑셀 업로드</button>
            <img class="search" src="@/assets/plus.png" alt=""/>
        </div>

        <div>
            <measuretable class="m_table"/>
        </div>

        <div class="page_btn">
            <ul>
                <li class ="page_btn_list" v-for="page in page_list">{{page}}</li>
            </ul>
        </div>
        <div style="height: 30px;">

        </div>

    </div>
</template>

<style>
.body_1{
    padding:2%;
    position:relative;
    background: #F8F8F8;;
    width: inherit;
    height: inherit;
}
.input1_back_btn{
    border-radius: 7px;
    border: 2px solid #d5d5d5;
    height: 50px;
    width: 50px;
    background-color: #ffffff;
}
.total_carbon{
    position: relative;
    margin-top: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    height: 13vh;
    

}
.emissions{
    float:right; 
    margin-right: 50px;
    margin-top: 15px;

}
.text_{
    text-align: center;
}
#text_kor{
    font-weight: 600;
    color: #223354;
    font-size: 18px;
}

.info_text{
    color:#223354;
    font-weight: 600;
    background-color: #ffffff;
    list-style: none;
    margin-top: 3px;
    line-height: 50px;
    height: 50px;
}

.edit_btn1{
    width: 100px;
    height: 30px;
    margin-top: 30px;
    background: #ffffff;
    border-radius: 5px;
    border:1px solid #d5d5d5;
    font-size: 12px;
}

.edit_btn{
    width: 100px;
    height: 30px;
    margin-top: 30px;
    margin-left: 20px;
    background: #ffffff;
    border-radius: 5px;
    border:1px solid #d5d5d5;
    font-size: 12px;
}

.register{
    background: #3DC984;
    color:#FFFFFF;
    width: 100px;
    height: 30px;
    margin-top: 30px;
    margin-left: 20px;
    border-radius: 5px;
    border:none;
    font-size: 12px;
    float: right;
}
.excel{
    width: 100px;
    height: 30px;
    margin-top: 30px;
    margin-left: 20px;
    background: #ffffff;
    border-radius: 5px;
    border:1px solid #d5d5d5;
    font-size: 12px;
    float: right;
}

.search{
    width: 30px;
    height: 30px;
    float: right;
    margin-top: 30px;
    margin-left: 20px;
    background: #ffffff;
    border-radius: 5px;
    border:1px solid #d5d5d5;
}

.m_table{
    margin-top:15px;
    height: 250px;
    width: 1510px;
  
}
.page_btn{
    margin-top: 50px;
    margin-left: 35%;
    margin-right: 35%;
    width: auto;
 
}
.page_btn_list{
    margin-left: 20px;
    float: left;
    list-style: none;
    background: #FFFFFF;
    line-height: 30px;
    height: 30px;
    width: 30px;
    text-align: center;
    border-radius: 5px;
    color: #223354;
    font-weight: 600;
}

</style>

<script>
    import measuretable from "@/components/measure/Measuretable.vue"
    export default {
        name :"input1",
        data() {
            return{
                info_Group_Text:["그룹명","카테고리","관리자"],
                page_list:["<","1","2","3","4","5",">"]
            }
        },
        components:{
           measuretable
        },
    }
    
</script>