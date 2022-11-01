<template>
<<<<<<< HEAD
    <div>
        <navigation class="navigation"/>
=======
    <div class="measure-main">
        <navigation class="navigation"/>
        <div class="contents">
            <MeasureHeader/>
            <GroupList/>
        </div>
>>>>>>> 4909e9825b0619ec60439cf3f68171585d164105
    </div>
</template>


<style>
<<<<<<< HEAD
=======
body{
    margin:0;
}
.masure-main{
    display: flex;
}
>>>>>>> 4909e9825b0619ec60439cf3f68171585d164105
.navigation{
    position:fixed;

}
<<<<<<< HEAD
=======
.contents{
    padding-left: 15vw;
}
>>>>>>> 4909e9825b0619ec60439cf3f68171585d164105
</style>


<script>
import navigation from "@/components/Navigation.vue"
<<<<<<< HEAD

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
=======
import MeasureHeader from "@/components/measure/Header.vue"
import GroupList from "@/components/measure/Group-list.vue"
    export default {
        name :"measure",
        components:{
            navigation,
            MeasureHeader,
            GroupList
        }
>>>>>>> 4909e9825b0619ec60439cf3f68171585d164105
    }
</script>
