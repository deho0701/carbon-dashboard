<template>
    <div class="overview">
        <div class="overview-chart">
            <div class="overview-chart-title">
                <p>Carbon Overview </p>
                <select name="period" id="select-period">
                <option value="Year">Year</option>
                <option value="Month">Month</option>
                <option value="Week">Week</option>
            </select>
            </div>
            <linechart></linechart>
        </div>
        <div class="overivew-data">
            <p>Thos month</p>
            <scopeBox />
            <scopeBox />
            <scopeBox />
        </div>
    </div>
</template>

<style>
    .overview{
        display: flex;
        justify-content: space-around;
    }
    .overview-chart{
        width: 50vw;
    }
    .overview-chart-title{
        display: flex;
        justify-content: center;
        vertical-align: middle;
        color: #295c07;
        font-size: 150%;
        margin-bottom: 2vw;
    }
    #select-period{
        margin-left: 3vw;
        font-size: 1vw;
        padding-left:2%;
        padding-right:2%;
        padding-top: 1%;
        padding-bottom: 1%;
    }
</style>

<script>
    import linechart from  "./linechart"
    import scopeBox from "../eco1/ScopeBox.vue"
    export default{
        name : "carbon-overview",
        components:{
            linechart,
            scopeBox
        }
    }
</script>