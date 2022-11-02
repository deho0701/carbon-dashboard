<template>
<div class="group-preview">
    <button @click="Offpreview">X</button>
    <span>preview</span>
    <div>탄소 배출량 상세, 정보</div>
    <div>경상대 탄소 배출량 </div>
    <div> 0kg</div>
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
        return{Offpreview}
    },
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>