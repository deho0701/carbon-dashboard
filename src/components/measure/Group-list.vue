<!-- 탄소 배출 측정 첫 화면 -->
<template>
    <div class ="body"> 
        <div class="board" >   
            <!-- 조직목록, 조직도 화면 -->
            <div class="left-bar" style="float: left;  height: inherit;" >
                <!-- 조직목록, 조직도 버튼 -->
                <div class="title">
                    <button :class="{list_title : titleclick  ,'non_click_title' : chartclick}" @click="clickList">조직 목록</button>
                    <button :class="{list_title : chartclick , 'non_click_title' : titleclick}" @click="clickChart">조직도</button>
                </div>
                <!-- 버튼 이벤트에 따른 조직목록, 조직도 화면 -->
                <div :class="{list : titleclick}" v-if="titleclick == true">
                    <!-- 조직 목록 표시 -->
                    <ul class="list-list" style="list-style:none; font-weight:600 ; margin-right: 20px;">
                        <!-- number.category_title : 'n'차 카테고리 표시-->
                        <li style="margin-bottom:50px; font-size: 14px; color: #3D3E3F;" v-for="number in list_number">{{number.category_title}}
                            <div v-for="category in list_category">
                            <li class="category_content" v-if="number.index == category.category" @click="select_category(category)">
                                <!-- number.index ==1 이면 1차 카테고리를 나타냄 -->
                                <!-- 조직목록 표시 -->
                                <img style="margin-right:20px; width: 50px; vertical-align: middle;" src="@/assets/building.png" alt="" v-if="number.index==1">
                                <h class ="category_image2" v-if="number.index!=1">{{category.image}}</h>{{category.name}}
                                <img src="@/assets/check.png" alt="" style="width:30px; margin: 10px; float: right;" v-if="category.check==true">
                            </li> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div style ="border-left : 2px solid #d5d5d5; height : inherit; float: left;">
            <!-- 체크한 조직 보여지는 화면 -->
            </div>
            <div class="right-bar" style = "float: left; position:relative; padding: 3%; height: inherit;">
                <!-- <div style="background: #3D3E3F; height: 800px; width: 100px;"></div> -->
                <ul calss="select_group" style="list-style: none; position: absolute; ">
                   <li class="select-list" v-for="group in select_group">
                    <img style="margin-left:30px; margin-right:20px; width: 60px; vertical-align: middle;" src="@/assets/building.png" alt="" v-if="group.category==1">
                    <h class="category_image2" id="right_bar_icon" v-if="group.category!=1">{{group.image}}</h>{{group.name}}
                   <button class="select-btn" onclick="location.href='/measure/input1';" @click="click_regi_page">+　입력하기</button></li>
                </ul>
            </div>

        </div>
    </div>
</template>

<style>

.body{
    padding:3%;
    position:relative;
    background: #F8F8F8;;
    width: 85vw;
    min-height: 87vh;
    height:inherit;
    
}
.board{
    position: absolute;
    background: #FFFFFF;
    width: 80vw;
    min-height: 75vh;
    height: inherit;
    border-radius: 10px;
    border:2px solid #d5d5d5
    
}
.title{
    width: 450px;
    height: 40px;
    background: #F0F2F5;
    opacity: 0.5;
    border-radius: 12px;
    margin: 30px;
}
.category_image2{
    margin-right:20px; 
    width: 50px;
    height: 50px;
    background: #3DC984;
    line-height: 48px;
    text-align: center;
    color: #FFFFFF;
    border-radius: 10px;
    display: inline-block;
}

.group-chart{
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 18px;
    width: 150px;
    height: 35px;
    margin-left: 10px;
    background: #F0F2F5;
    border: 2px;
    border-radius: 10px;
}
.list{
    margin-top: 40px;
    margin-left:10px;
    margin-right: 20px;

}
.category_content{
    margin-top:20px; 
    font-size:18px; 
    color: #000000
}
.category_content:hover{
    border-radius: 10px;
    background-color: #f6f6f6;
}
.select-list{ /*선택된 카테고리 리스트*/
    border:2px solid #d5d5d5; 
    border-radius: 10px; 
    margin-bottom: 50px;
    line-height: 10vh;
    height: 10vh;
    width:40vw;
    font-weight: 600;
    font-size: 18px;
}
.select-btn{ /*입력하기 버튼*/
    background: #3DC984;
    color:#FFFFFF;
    float: right;
    margin-top: 30px;
    margin-right: 30px;
    border-radius: 7px;
    border: none; 
    height:40px;
    width: 110px;
    font-weight: 600;
}
.select-btn:hover{
    background: #2cb570;
}
#right_bar_icon{
    margin-left: 30px;
    height: 60px;
    width: 60px;
    line-height: 60px;
    font-size: 20px;
    font-weight: 800;
}

</style>
    
<style scoped>
    .list_title{
        font-family: 'Open Sans';
        font-weight: 900;
        font-size: 22px;
        line-height: 30px;
        width: 200px;
        height: 35px;
        margin-left: 10px;
        margin-top: 1px;
        background: #ffffff;
        border: 2px ;
        border-radius: 10px;
        color: #3DC984;
     
    }

    .non_click_title{
        font-family: 'Open Sans';
        font-weight: 900;
        font-size: 22px;
        line-height: 30px;
        width: 200px;
        height: 35px;
        margin-left: 10px;
        margin-top: 1px;
        background: #F0F2F5;
        border: 2px ;
        border-radius: 10px;
        
    }
</style>
<script>

    export default {
        name :"group-list",
        data() {
            
            return{
                titleclick: true,
                chartclick: false,
                check: true,

                list_number:[
                    {index:"1", category_title: "1차 카테고리"},
                    {index:"2",category_title: "2차 카테고리"},
                    {index:"3",category_title: "3차 카테고리"}
                ],
                list_category:[
                    {category:"1", image:'building.png' ,name:"경상대", check:''},
                    {category:"2" ,image:'상', name:"상경대학", check:''},
                    {category:"2" ,image:'공', name:"공과대학", check:''},
                    {category:"3" ,image:'경', name:"경영학과", check:''},
                    {category:"3" ,image:'항', name:"항공우주 및 소프트웨어학과", check:''},
                    {category:"3" ,image:'건', name:"건축공학과", check:''},
                ],
                select_group:[
                    //{category:"2" ,image:'상', name:"상경대학"},
                    //{category:"2" ,image:'공', name:"공과대학"},
                ]
            }
        },
        methods:{
            clickList(){
                this.titleclick=true,
                this.chartclick=false
            
            },
            clickChart(){
                this.titleclick=false,
                this.chartclick=true
            
            },
            select_category(category){
                //select_group.add(name)
                if(category.check!=true){
                    this.select_group.push({category:category.category, image:category.image, name:category.name})
                    category.check=true
                }

                else{
                    this.select_group.pop({category:category.category, image:category.image, name:category.name})
                    category.check=false
                }  
            },
            click_regi_page(){

            }
        },
        components:{
        },
    }
    
</script>