<template>
    <div>
        <p class="sector-title">업종별 탄소 배출량 TOP 10</p>
        <GChart type="BarChart" :data="chartData" :options="chartOptions" class="sectors-chart-H"/> 
    </div>
</template>

<style>
    .sectors-chart-H{
        width: 60vw;
        height: 40vw;
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
                    ["Element", "탄소배출"],
                    ["비금속 광물제품", 274],
                    ["음료 제조업", 184],
                    ["화학제품", 253],
                    ["1차 금속 제조업", 253],
                    ["펄프, 종이 및 종이 제조업", 253],
                    ["금속 가공제품 제조업", 247],
                    ["섬유제품 제조업", 172],
                    ["반도체", 253],
                    ["발전", 226],
                ],
                chartOptions: {
                    chart: {
                    title: "sadadasadsasd",          
                    }
                }
            };
        }
    }
</script>

