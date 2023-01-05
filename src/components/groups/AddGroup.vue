<template>
<div class="addGroup">
    <h2 class="edit-group-title">조직도 편집</h2>
    <h3>전체 {{GroupNum}} </h3>
    <div class="add-group-iinput">
        <TreeListVue></TreeListVue>

    </div>
    <button class="add-group-commit" @click="OffEditGroup">저장하기</button>
</div>
</template>
<style>
.addGroup{
    height: 100vh;
    width: 40vw;
    background-color: rgb(255, 255, 255);
    border-color:rgba(228, 228, 228, 0.26) ;
    border-style: groove  ;
}
.edit-group-title{
    font-size:1.7vw;
    font-weight: 600;
    margin: 3vh 4vw 1vh;
}
.add-group-commit{
    float: left;
    margin:1.3vh;
    width: 20VW;
    height: 3.5vh;
    background: #3DC984;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 13px;
    color: #FFFFFF;

    margin-bottom: 0;
    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translate(-50%,-50%);
}


</style>


<script>
import { useStore } from "vuex";
import TreeListVue from "../measure/Tree-list.vue";

export default{ 
    name:'',
    components:{
        TreeListVue
    },
    data(){
        return{
            GroupNum:0
        };
    },
    setup(){
        const store = useStore(); //vuex 사용
        const OffEditGroup = () => store.commit("OffEdit", );
        return {OffEditGroup}
    },
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>