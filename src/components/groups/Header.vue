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
                <button class="add-group" @click="isModal=true" type="button">+ 추가하기</button>
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
    max-height: 3vh;
    width: 200px;
    margin-top: 1.5vh;
    margin-left: 30vw;
    text-align: left;
    background-color: white;
    border-radius: 5px;

}
.re{
    max-height: 3.5vh;
    max-width: 3vw;
    margin:1.2vh;
}
.pm-button{
    max-height: 3.5vh;
    max-width: 3vw;
    margin:1.3vh;
    border-radius: 5px;
}
.add-group{

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