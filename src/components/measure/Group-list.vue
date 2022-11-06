<template>
    <div class ="body">
        <div class="board" >
            <div class="left-bar" style="float: left;  height: inherit;" >
                <div class="title">
                    <button :class="{list_title : titleclick  ,'non_click_title' : chartclick}" @click="clickList">조직 목록</button>
                    <button :class="{list_title : chartclick , 'non_click_title' : titleclick}" @click="clickChart">조직도</button>
                </div>
                <div :class="{list : titleclick}" v-if="titleclick == true">
                    <ul class="list-list" style="list-style:none; font-weight:600 ; margin-right: 20px;">
                        <li style="margin-bottom:50px; font-size: 14px; color: #3D3E3F;" v-for="number in list_number">{{number.category_title}}
                            <div v-for="category in list_category">
                            <li class="category_content" v-if="number.index == category.category" @click="select_category">
                                <img style="margin-right:20px; width: 50px; vertical-align: middle;" src="@/assets/building.png" alt="" v-if="number.index==1">
                                <h class ="category_image2" v-if="number.index!=1">{{category.image}}</h>{{category.name}}
                                <img src="@/assets/check.png" alt="" style="width:30px; vertical-align: middle; float: right;" v-if="category.check==true">
                            </li> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div style ="border-left : 2px solid #d5d5d5; height : inherit; float: left;">
            </div>
            <div class="right-bar" style = "float: left; position:relative">
                <ul calss="select_group" style="list-style: none; position: absolute;">
                   <li class="select-list" v-for="group in select_group">
                    <img style="margin-left:25px; margin-right:20px; width: 60px; vertical-align: middle;" src="@/assets/building.png" alt="" v-if="group.category==1">
                    <h class="category_image2" id="right_bar_icon" v-if="group.category!=1">{{group.image}}</h>{{group.name}}
                   <button class="select-btn" onclick="location.href='/measure/input1';">+　입력하기</button></li>
                </ul>
            </div>

        </div>
    </div>
</template>

<style>

.body{
    padding:2%;
    position:relative;
    background: #F8F8F8;;
    width: inherit;
    height: 86vh;
    
}
.board{
    position: absolute;
    background: #FFFFFF;
    width: 80vw;
    height: 75vh;
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
    margin:50px;
    line-height: 10vh;
    height: 10vh;
    width:45vw;
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
                    {category:"1", image:'building.png' ,name:"경상대", check:false},
                    {category:"2" ,image:'상', name:"상경대학", check:true},
                    {category:"2" ,image:'공', name:"공과대학", check:true},
                    {category:"3" ,image:'경', name:"경영학과", check:false},
                    {category:"3" ,image:'항', name:"항공우주 및 소프트웨어학과", check:false},
                ],
                select_group:[
                    {category:"2", image:'상', name:"상경대학"},
                    {category:"2", image:'공', name:"공과대학"}
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
            select_category(){
                check=!check
            }
        },
        components:{
        },
    }
    
</script>