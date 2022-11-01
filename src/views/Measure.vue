<template>
    <div>
        <navigation class="navigation"/>
    </div>
</template>

<style>
.navigation{
    position:fixed;

}
</style>


<script>
import navigation from "@/components/Navigation.vue"

    export default {
        name :"measure",
        components:{
            navigation
        },
        data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
    }
</script>
