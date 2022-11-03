<template>
<div class="group-preview">
    <button class="close-preview" @click="Offpreview">X</button>
    <div class="preview-text-title">preview</div>
    <div class="select-preview">
        <div class="select-preview-item" @click="OnTotalPreview">탄소 배출량</div>
        <div class="select-preview-item" @click="OnDetailPreview">탄소 배출량 상세</div>
        <div class="select-preview-item" @click="OnInfoPreview">정보</div>
    </div>
    <div class="preview-text-groupname">{{GroupName}} 탄소 배출량</div>
    <div>{{TotalEmission}}KG</div>

    <div>전체 대비 탄소 배출량 비율</div>
    <meter class="preview-TotalEmission-ratio"></meter>

    <div>{{scope12CarbonEmission}}kg</div>
    <meter></meter>

    <div>{{scope3CarbonEmission}}kg</div>
    <meter></meter>
    <div class="preview-move-button">
        <button class="move-PreviewToEditEmission">탄소 배출 입력하기</button>
        <button class="move-PreviewToEditEmission">리포트 이동하기</button>
    </div>
</div>
</template>

<style>
.group-preview{
    height: 100%;
    width: 456px;
    background-color: rgb(255, 255, 255);
    border-color:rgba(228, 228, 228, 0.26) ;
    border-style: groove  ;
}
.close-preview{
    float: right;
    margin: 15px;
}
.preview-text-title{
    font-size:24px;
    font-weight:550;
    margin-left:4vw;
    margin-top:5vh;
}
.preview-text-groupname{
    font-size:22px;
    font-weight:550;
    margin-left:4vw;
    margin-top:10vh;
}
.select-preview{
    background-color: #F0F2F5;
    display: flex;
    width: 70%;
    height: 4%;
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);  
    justify-content: center;
    font-weight: 700;
    
}
.select-preview-item{
    padding:0.5vw;
    color:rgba(0, 0, 0, 0.5);
    
}
.select-preview-item:hover{
    padding:0.5vw;
    background-color:white ;
    color:#3DC984;
}
.move-PreviewToEditEmission{
    
    margin:2vh;
    width: 167px;
    height: 61px;
    background: #3DC984;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 13px;
    color: #FFFFFF;
}
.preview-move-button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);  
}
.preview-TotalEmission-ratio{
    position: absolute;
width: 374px;
height: 16px;

background: rgba(217, 217, 217, 0.5);
border-radius: 10px;
}
</style>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:''
        };
    },
    setup(){
        const store = useStore(); //vuex 사용
        const Offpreview = () => store.commit("OffGroupPreview", );
        const OnTotalPreview = () => store.commit("OnGroupPreview", "total");
        const OnDetailPreview = () => store.commit("OnGroupPreview", "detail");
        const OnInfoPreview = () => store.commit("OnGroupPreview", "info");

        const GroupName = "경상대";
        var TotalEmission = 10;
        var scope12CarbonEmission = 3;
        var scope3CarbonEmission = 7;
        return{Offpreview,GroupName,TotalEmission,scope12CarbonEmission,scope3CarbonEmission,
            OnTotalPreview,OnDetailPreview,OnInfoPreview}
    },
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>