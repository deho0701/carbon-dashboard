<!-- 탄소 배출 측정 첫 화면 -->
<template>
    <div class ="body"> 
        <div class="board" >   
            <!-- 조직목록, 조직도 화면 -->
            <div class="left-bar" style="float: left; height: inherit; width:27vw; ">
                <!-- 조직목록, 조직도 버튼 -->
                <div class="title" style="position:">
                    <button :class="{list_title : titleclick  ,'non_click_title' : chartclick}" @click="clickList">조직 목록</button>
                    <button :class="{list_title : chartclick , 'non_click_title' : titleclick}" @click="clickChart">조직도</button>
                </div>
                <!-- 버튼 이벤트에 따른 조직목록, 조직도 화면 -->
                <div :class="{list : titleclick}" v-if="titleclick == true">
                    <!-- 조직 목록 표시 -->
                    <ul class="list-list" style="list-style:none; font-weight:600 ; margin-right: 2vw;">
                        <!-- number.category_title : 'n'차 카테고리 표시-->
                        <li style=" margin-bottom:5vh; font-size: 0.8vw; color: #3D3E3F;" v-for="number in list_number">{{number.category_title}}
                            <div v-for="category in list_category">
                            <li class="category_content" v-if="number.index == category.category" @click="select_category(category)">
                                <!-- number.index ==1 이면 1차 카테고리를 나타냄 -->
                                <!-- 조직목록 표시 -->
                                <img style="margin-right:1.3vw; width: 3vw; vertical-align: middle;" src="@/assets/building.png" alt="" v-if="number.index==1">
                                <h class ="category_image2" v-if="number.index!=1">{{category.image}}</h>{{category.name}}
                                <img src="@/assets/check.png" alt="" style="width:1.5vw; margin: 1vw; float: right;" v-if="category.check==true">
                            </li> 
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div :class="{list : chartclick}" v-if="chartclick == true">
                    <treeList style="margin-left:2vw; font-weight: 700;"></treeList>
                </div>
            </div>
            <div style ="border-left : 2px solid #d5d5d5; height : inherit; float: left;">
            <!-- 체크한 조직 보여지는 화면 -->
            </div>
            <div class="right-bar" style = "float: left; position:relative; padding: 3%; height:66vh; width:47.146vw; overflow: auto;">
                <ul calss="select_group" style="list-style: none; position: absolute;">
                   <li class="select-list" v-for="group in select_group">
                    <img style="margin-left:1vw; margin-right:2vw; width: 3vw; vertical-align: middle; " src="@/assets/building.png" alt="" v-if="group.category==1">
                    <h class="category_image2" id="right_bar_icon" v-if="group.category!=1">{{group.image}}</h>{{group.name}}
                    <button class="select-btn"  @click="click_regi_page(group.name)">+　입력하기</button></li>{{group_name}}
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
    min-height: 75.5vh;
    height: inherit;
}

.board{
    position: absolute;
    background: #FFFFFF;
    width: 80vw;
    height: 75vh;
    border-radius: 10px;
    border:2px solid #d5d5d5;
}

.title{
    width:21vw;
    height: auto;
    background: #F0F2F5;
    opacity: 0.5;
    border-radius: 12px;
    margin: 2vw 3vw 1vw;
    padding: 1%;
}

.category_image2{
    margin-right:1.3vw; 
    width: 3vw;
    height: 3vw;
    background: #3DC984;
    line-height: 3vw;
    text-align: center;
    color: #FFFFFF;
    border-radius: 0.6vw;
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
    padding:1vw;
    width:25vw;
    height: 55vh;
    overflow: auto;
}
.category_content{
    margin-top:2.5vh; 
    font-size:1vw; 
    color: #000000
}
.category_content:hover{
    border-radius: 10px;
    background-color: #f6f6f6;
    
}
.select-list{ /*선택된 카테고리 리스트*/
    border:2px solid #d5d5d5; 
    border-radius: 0.8vw; 
    margin-bottom: 3vh;
    padding: 0.5%;
    line-height: 10vh;
    height: 10vh;
    width: 44vw;
    font-weight: 600;
    font-size: 1.1vw;
    color: #000000;
    
}
.select-btn{ /*입력하기 버튼*/
    background: #3DC984;
    color:#FFFFFF;
    float: right;
    margin:2.5vh ;
    border-radius: 7px;
    border: none; 
    height: 4.5vh;
    width: 7.4vw;
    font-size: 0.8vw;
    font-weight: 600;
}
.select-btn:hover{
    background: #2cb570;
    cursor: pointer;
}
#right_bar_icon{
    margin-left: 1vw;
    margin-right: 2vw;
    margin-top: 1vh;
    height: 3vw;
    width: 3vw;
    line-height: 3vw;
    font-size: 1vw;
    font-weight: 800;
}

::-webkit-scrollbar{
    display:none;
}
</style>
    
<style scoped>
    .list_title{
        font-family: 'Open Sans';
        font-weight: 900;
        font-size: 1.2vw;
        line-height: auto;
        width: 10vw;
        height: 2vw;
        background: #ffffff;
        border: none;
        border-radius: 0.5vw;
        color: #3DC984;
     
    }

    .non_click_title{
        font-family: 'Open Sans';
        font-weight: 900;
        font-size: 1.2vw;
        line-height: 30px;
        width: 10vw;
        height: auto;
        margin-left: 0.5vw;
        background: #F0F2F5;
        border: none;   
    }
</style>
<script>
    import treeList from "@/components/measure/Tree-list.vue"
    import { useStore } from 'vuex'
    export default {
        
        name :"group-list",
        data() {
            return{
                titleclick: true,
                chartclick: false,
                check: true,
                group_name:'',
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
            click_regi_page(name){
                this.group_name = name
                const store = useStore();
                const emitter = store.state.emitter
                emitter.emit("send_name", name) //input1에서 emitter.on으로 name을 받아야하는데 안 받아짐 ㅜ____ㅜ
            }
        },
        components:{
            treeList
        },
        created(){
            
        }
    }
</script>