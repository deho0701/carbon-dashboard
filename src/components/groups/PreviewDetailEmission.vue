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
                <span class="emission-list-item-icon">{{item.icon}}</span> 
                <span>{{item.label}}</span>
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
}
.emission-list-item{
    margin: 1vh;
    height: 4vh;
    
}
.emission-list-item:hover{
    border: 1px solid;
    border-radius: 5px;
    margin: 1vh;
    height: 4vh;
}
.emission-list-item-icon{
    border: 1px solid;
    width:  44px;
    height: 44px;
}
.emission-list-item-wight{
    float: right;
    font-size: large;
    font-weight: 700;
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

        const EmissionList =[
            {icon:1, label:"고정연소",weight:10},
            {icon:1, label:"이동연소",weight:250},
            {icon:1, label:"탈루배출",weight:30},
            {icon:1, label:"고정연소",weight:40}
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