<template>
    <div>
        <p class="sector-title">해당 업종 평균 탄소 배출량</p>
        <GChart type="ColumnChart" :data="chartData" :options="chartOptions" class="sector-chart-V"/> 
    </div>
</template>

<style>
    .sector-chart-V{
        width: 25vw;
        height: 40vw;
    }
    .sector-title{
        text-align: center;
        font-size: 1.3vw;
        color: #295c07;
    }
</style>

<script>
    import { GChart } from "vue-google-charts";

    export default{
        components:{
            
            GChart
        },
        data() {
            return {
                chartData: [
                    ["Element", "Density"],
                    ["Copper", 8.49],
                    ["Silver", 10.49],
                    ["Gold", 19.30],
                    ["Platinum", 21.45],
                ],
                chartOptions: {
                    chart: {
                    title: "sadadasadsasd",
                    width: 600,
                    height: 400,          
                    }
                }
            };
        }
    }
</script>

