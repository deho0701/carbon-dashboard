<template>
    <div class ="body">
        <div class="board" >
            <div class="left-bar" style="float: left;  height: inherit;" >
                <div class="title">
                    <button class="group-list">조직 목록</button>
                    <button class="group-chart">조직도</button>
                </div>
                <div class="list">
                    <ul class="list-list" style="list-style:none; font-weight:600 ; margin-right: 20px;">
                        <li style="margin-bottom:70px" v-for="number in list_number">{{number}}
                            <img v-for="image in list_image" :key="num" :src="`@/assets/${image}`" alt=""/>
                            <li style="margin:30px" v-for="category in list_category">{{category.name}}</li>
                        </li>
                    </ul>
                </div>
            </div>
            <div style ="border-left : 2px solid #d5d5d5; height : inherit; float: left;">
            </div>
            <div class="right-bar" style = "float: left; position:relative">
                <ul calss="select_group" style="list-style: none; position: absolute;">
                   <li class="select-list" v-for="group in list_group">　　　{{group.image}} {{group.name}}
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
    width: 350px;
    height: 40px;
    background: #F0F2F5;
    opacity: 0.5;
    border-radius: 12px;
    margin: 30px;
}
.group-list{
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    width: 150px;
    height: 35px;
    margin-left: 10px;
    margin-top: 1px;
    background: #F0F2F5;
    border: 2px ;
    border-radius: 10px;
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
    margin-right: 30px;
    margin-top: 25px;
    border-radius: 7px;
    border: none; 
    height: 4vh;
    width: 100px;
    font-weight: 600;

}
</style>


<script>

    export default {
        name :"group-list",
        data() {
            return{
                list_number:["1차 카테고리","2차 카테고리","3차 카테고리"],
                list_category:[
                    {image:'group.png' ,name:"경상대"},
                    {image:'group.png' ,name:"상경대학"}
                ],
                list_group:[{image: 'group.png' ,name:"경상대"},
                        {image:'group.png' ,name:"상경대학"}
                ]
            }
        },
        components:{
        },
    }
    
</script>