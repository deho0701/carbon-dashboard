<template>
    <div>
        <p class="word">Total Carbon Footprint [CO2e]</p>
        <div class="what_name">
            <chart />
            <div class="boxs">
                <ScpoeBox></ScpoeBox>
                <ScpoeBox></ScpoeBox>
                <ScpoeBox></ScpoeBox>
            </div>
        </div>
        
    </div>
</template>

<style>
    .word{
        color: #437e1b;
        font-weight: bold;
        font-size: 1.3vw;
        text-align: center;
    }
    .what_name{
        display: flex;
        margin-top: 3vw;
        justify-content: space-around;
    }
    .boxs{
         margin-left: 2vw;
    }

</style>

<script>
import chart from './Ochart'
import ScpoeBox from "./ScopeBox.vue"

export default ({
    name :"TotalCarbon",
    components:{
        chart,
        ScpoeBox
    },
})
</script>
