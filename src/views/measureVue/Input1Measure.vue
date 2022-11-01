<template>
    <div class="measure-main">
        <navigation class="navigation"/>
        <div class="contents">
            <MeasureHeader/>
            <Input1/>
        </div>
    </div>
</template>


<style>
body{
    margin:0;
}
.masure-main{
    display: flex;
}
.navigation{
    position:fixed;

}
.contents{
    padding-left: 15vw;
}
</style>


<script>
import navigation from "@/components/Navigation.vue"
import MeasureHeader from "@/components/measure/Header.vue"
import Input1 from "@/components/measure/input1.vue"
    export default {
        name :"measure",
        components:{
            navigation,
            MeasureHeader,
            Input1
        }
    }
</script>