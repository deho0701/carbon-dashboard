<template>
    <div class ="body">
        <div class="board" >
            <div class="left-bar" style="float: left; height: inherit;" >
                <div class="title">
                    <button class="group-list">조직 목록</button>
                    <button class="group-chart">조직도</button>
                </div>
                <div class="list">
                    <p class = category1>1차 카테고리</p>
                </div>
            </div>
            <div style ="border-left : 2px solid #d5d5d5; height : inherit; float: left;">
            </div>
            <div class="right-bar" style = "float: left;">
                <ul class="select-group">
                   <li v-for="group in list_group">{{group}}</li>
                </ul>
            </div>

        </div>
    </div>
</template>

<style>

.body{
    padding:2%;
    position:relative;
    background: #F8F8F8;
    height: inherit;
    height: 79vh;
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
.measure-setting{
    display: flex;
    margin-top: 0;
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
    height: 30px;
    margin-left: 10px;
    background: #F0F2F5;
    border: 2px;
    border-radius: 10px;
}
.list{
    margin-top: 40px;
    margin-left:40px;

}

.select-group{
    border:2px solid #d5d5d5; float: left; border-radius: 10px; height: 100px; width: 100wh;
    margin: 30px;
}


</style>


<script>
    export default {
        name :"group-list",
        components:{
            data() {
                return{
                    list_group:["경상대","인문대"]
                };
            }
        },

    }
    
</script>