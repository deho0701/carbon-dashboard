<template>
    <div class="group-preview">
        <button class="close-preview" @click="Offpreview">X</button>
        <div class="preview-text-title">preview</div>
        <div class="select-preview">
            <div class="select-preview-item" @click="OnTotalPreview">탄소 배출량</div>
            <div class="select-preview-item" @click="OnDetailPreview">탄소 배출량 상세</div>
            <div class="select-preview-item" @click="OnInfoPreview">정보</div>
        </div>
        <div class="emission-list">
            <div v-for="item in EmissionList" :key="item.label" class="emission-list-item">
                <img class="emission-list-item-icon" :src="item.iconSrc">{{item.icon}}
                <span class="emission-list-item-lable">{{item.label}}</span>
                <span class="emission-list-item-wight">{{item.weight}} kg</span>
            </div>
        </div>
        <div class="preview-move-button">
            <button class="move-PreviewToEditEmission">탄소 배출 입력하기</button>
            <button class="move-PreviewToEditEmission">리포트 이동하기</button>
        </div>
    </div>
</template>
    
<style>
.emission-list{
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translateX(-50%);
    width: 75%;
    max-height: 67vh;
    overflow: scroll;
    -ms-overflow-style: none;
}
.emission-list::-webkit-scrollbar { 
    display: none;
    width: 0 !important;
}
.emission-list-item{
    margin: 1vh;
    height: 50px;
}
.emission-list-item:hover{
    border-radius: 5px;
    background-color:rgba(180, 180, 180, 0.377) ;
}
.emission-list-item-icon{
    float: left;
    width:  44px;
    height: 44px;
}
.emission-list-item-lable{
    float: left;
    color:#615B5B;
    font-weight: 700;
    padding: 14px;
    vertical-align:middle;
}
.emission-list-item-wight{
    float: right;
    font-size: large;
    font-weight: 700;
    padding: 10px;
    vertical-align:middle;
}
</style>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default{ 
    name:'preview-detail',
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
        
        const imgSrc = "~assets/previewDetail/"

        const EmissionList =[
            {iconSrc:require('@/assets/previewDetail/1.png'), label:"고정연소",weight:10},
            {iconSrc:require('@/assets/previewDetail/2.png'), label:"이동연소",weight:250},
            {iconSrc:require('@/assets/previewDetail/3.png'), label:"탈루배출",weight:30},
            {iconSrc:require('@/assets/previewDetail/3.png'), label:"탈루배출",weight:30},
            {iconSrc:require('@/assets/previewDetail/3.png'), label:"탈루배출",weight:30},
            {iconSrc:require('@/assets/previewDetail/3.png'), label:"탈루배출",weight:30},
            {iconSrc:require('@/assets/previewDetail/3.png'), label:"탈루배출",weight:30},
            {iconSrc:require('@/assets/previewDetail/3.png'), label:"탈루배출",weight:30},
            {iconSrc:require('@/assets/previewDetail/3.png'), label:"탈루배출",weight:30},
            {iconSrc:require('@/assets/previewDetail/3.png'), label:"탈루배출",weight:30},
            {iconSrc:require('@/assets/previewDetail/3.png'), label:"탈루배출",weight:30},
            {iconSrc:require('@/assets/previewDetail/3.png'), label:"탈루배출",weight:30},
            {iconSrc:require('@/assets/previewDetail/4.png'), label:"고정연소",weight:40}
        ]
        return{Offpreview,EmissionList,
            OnTotalPreview,OnDetailPreview,OnInfoPreview}
    },
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>