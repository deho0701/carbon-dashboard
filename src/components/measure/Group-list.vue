<template>
    <div class ="body">
        <div class="board">
            <div class="left-bar">
                <div class="title">
                    <button class="group-list">조직 목록</button>
                    <button class="group-chart">조직도</button>
                </div>
                <div class="list">
                    <p class = category1>1차 카테고리</p>
                </div>
            </div>
            <div class="right-bar">
            </div>

        </div>
    </div>
</template>

<style>

.body{
    padding:2%;
    position:relative;
    background: #F8F8F8;
    height: 79vh;
}
.board{
    position: absolute;
    background: #FFFFFF;
    width: 80vw;
    height: 75vh;
    border-radius: 10px;
}
.title{
    width: 350px;
    height: 40px;
    background: #F0F2F5;
    opacity: 0.5;
    border-radius: 12px;
    margin: 10px;
}
.measure-setting{
    display: flex;
    margin-top: 0;
}
.group-list{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    color: #3DC984;
    width: 150px;
    height: 35px;
    margin-left: 10px;
    margin-bottom: 10px;
    background: #FFFFFF;
    border: 2px solid #F0F2F5;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}
.group-chart{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    width: 150px;
    height: 40px;
    margin-left: 10px;
    margin-top: 1px;
    background: #F0F2F5;
    border: 2px solid #F0F2F5;
    opacity: 0.5;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}
.list{
    margin-top: 40px;
    margin-left:40px;

}
</style>


<script>
    export default {
        name :"group-list",
        components:{
            

        }
    }
</script>