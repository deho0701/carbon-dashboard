<template>
    <div class="group-header">
        <p class="group-name">조직 설계</p>
        <div class="group-setting">
            <p style="margin-left:4vw" >회사 조직</p>
            <p style="margin-left:4vw">구성원 등록하기</p>
            <button class="period">기간 설정하기</button>
            <img class="re" src="@/assets/re.png" alt="">
            <div>
                <img class="pm-button" src="@/assets/minus.png" alt="">
                <img class="pm-button" src="@/assets/plus.png" alt="">
<<<<<<< HEAD
                <button class="add-group" @click="isModal=true" type="button">+ 추가하기</button>
=======
                <button class="add-group">+　추가하기</button>
>>>>>>> 4909e9825b0619ec60439cf3f68171585d164105
            </div>
        </div><ModalView v-if="isModal" @close-modal="isModal=false"><EditGroup /></ModalView>
        
    </div>
</template>

<style>
.group-header{
    width: 85vw;
    height: 14vh;
    background-color: white;
    overflow: hidden
}
.group-name{
    color: black;
    font-size:1.7vw;
    font-weight: 600;
    margin: 3vh 4vw 1vh;
}
.group-setting{
    display: flex;
    margin-top: 0;
}
.period{
    float: left;
    max-height: 3vh;
    width: 200px;
    margin-top: 1.5vh;
    margin-left: 30vw;
    text-align: left;
    background-color: white;
    border-radius: 5px;
    border-color: #ededed;
    color:#8a8a8a;

}
.re{
    float: left;
    max-height: 3.5vh;
    max-width: 3vw;
    margin:1.2vh;
}
.pm-button{
    float: left;
    max-height: 3.5vh;
    max-width: 3vw;
    margin:1.3vh;
    border-radius: 5px;
    background-color:#ededed;
    border-radius: 5px;
}
.add-group{
    float: left;
    margin:1.3vh;
    width: 110px;
    height: 3.5vh;
    background: #3DC984;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 13px;
    color: #FFFFFF;


}
</style>


<script>
    export default {
        name :"group-header",
        components:{

        },
        data(){
            return{
                isModal:false
            }
        },
        methods:{
            
        }
    }
</script>