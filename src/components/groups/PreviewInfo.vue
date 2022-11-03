<template>
    <div class="group-preview">
        <button class="close-preview" @click="Offpreview">X</button>
        <div class="preview-text-title">preview</div>
        <div class="select-preview">
            <div class="select-preview-item" @click="OnTotalPreview">탄소 배출량</div>
            <div class="select-preview-item" @click="OnDetailPreview">탄소 배출량 상세</div>
            <div class="select-preview-item" @click="OnInfoPreview">정보</div>
        </div>
        <div class="preview-group-infos">
            <div>그룹 정보</div>
            <div class="blank"></div>
            <div>그룹 정보</div>
            <div class="blank"></div>
            <div>그룹 정보</div>
            <div class="blank"></div>
            <div>그룹 정보</div>
            <div class="blank"></div>
            <div>그룹 정보</div>
            <div class="blank"></div>
        </div>
        <div class="preview-move-button">
            <button class="preview-info-save">저장하기</button>
        </div>
    </div>
</template>
    
<style>
.preview-info-save{
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
/*:-moz-any().blank{
    position: absolute;
    transform: translateX(-50%);
    width: 75%;
    height:6%;
    border-radius: 20px;
    background-color: rgb(218, 130, 15);
}*/
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


        return{Offpreview,
            OnTotalPreview,OnDetailPreview,OnInfoPreview}
    },
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>