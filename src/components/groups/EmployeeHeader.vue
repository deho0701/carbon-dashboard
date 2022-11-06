<template>
    <div class="group-header">
        <p class="group-name">조직 설계</p>
        <div class="group-setting">
            <router-link to="/group" class="group-header-move">회사 조직</router-link>
            <router-link to="/group/employee" class="group-header-move" >구성원 등록하기</router-link>
        </div>        
    </div>
</template>

<style>
</style>


<script>
import { computed } from "vue";
import { useStore } from "vuex";

    export default {
        setup(){
            return {}
        },
        name :"group-header",
        components:{

        },
        data(){
            return{
            }
        },
        methods:{

        }
    }
</script>