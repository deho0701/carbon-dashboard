<template>
    <div class="measure-main">
        <navigation class="navigation"/>
        <div class="contents">
            <MeasureHeader/>
            <input2/>
        </div>
    </div>
</template>


<style>

.masure-main{
    display: flex;
}
.navigation{
    position:fixed;

}

</style>


<script>
import navigation from "@/components/Navigation.vue"
import input2 from "@/components/measure/input2.vue"
import MeasureHeader from "@/components/measure/Header.vue"
    export default {
        name :"measure",
        components:{
            navigation,
            MeasureHeader,
            input2
        }
    }
</script>
