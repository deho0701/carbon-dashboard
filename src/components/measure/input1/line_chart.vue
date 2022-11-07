<template>
    <div class="container-fluid">
        <wj-flex-chart chartType="Bar" bindingX="scope" stacking="Stacked" :itemsSource="data"
            :palette="['rgba(70,107,176,1)', 'rgba(200,180,34,1)', 'rgba(20,136,110,1)']">
            <wj-flex-chart-legend position="scope1"></wj-flex-chart-legend>
            <wj-flex-chart-series name="US" binding="scope2"></wj-flex-chart-series>
            <wj-flex-chart-series name="China" binding="scope3"></wj-flex-chart-series>
        </wj-flex-chart>
    </div>
</template>


<style>
    body {
        margin-bottom: 24px;
    }

    label {
        margin-right: 3px;
    }
</style>


<script>
    import "@grapecity/wijmo.styles/wijmo.css";
    import 'bootstrap.css';
    import Vue from 'vue';
    import '@grapecity/wijmo.vue2.core';
    import '@grapecity/wijmo.vue2.chart';
    import '@grapecity/wijmo.vue2.chart.animation';
    import { getData } from './data';

    let App = Vue.extend({
        name: 'app',
        data: function () {
            return { 
                data: getData() 
            }
        }
    })

    new Vue({ render: h => h(App) }).$mount('#app');
</script>

