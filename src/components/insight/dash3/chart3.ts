import { defineComponent, h, PropType } from 'vue'

import { Bar } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Plugin
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default defineComponent({
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    width: {
      type: Number,
      default:10
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
      default: () => {}
    },

    plugins: {
      type: Array as PropType<Plugin<'bar'>[]>,
      default: () => []
    },
    
  },
  setup(props) {
    const chartData = {
      labels: [
        '01','02','03','04','05','06','07','08','09','10','11','12'
      ],
      datasets: [
        {
          label : '이동연소',
          backgroundColor: ['#4339F2'],
          borderRadius:30,
          data: [40, 50, 60,40,20,50,10,50,40,60,50,43],
          barThickness: 20,
        },
        {
          label : '고정연소',
          backgroundColor: ['#34B53A'],
          data: [40, 50, 60,30,50,50,30,50,40,60,50,43],
          barThickness: 20,
        },
        {
          label : '임직원 출퇴근',
          backgroundColor: ['#FFB200'],
          borderRadius:30,
          data: [40, 50, 60,60,70,50,60,50,40,60,50,43],
          barThickness: 20,
        },
        {
          label : '비료 사용',
          backgroundColor: ['#FF0000'],
          borderRadius:30,
          data: [0,0,0,0,10,0,0,20,0,0,0,0],
          barThickness: 20,
        },
        {
          label : '기타',
          backgroundColor: ['#5A6A89'],
    
          borderRadius:30,
          data: [40, 50, 60,30,60,50,40,50,40,60,50,43],
          barThickness: 20,
        },
      ]
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins:{
        legend: {
          position:'top' as const,
          align	: 'start' as const,
          labels : {
            padding: 50,
            
            usePointStyle: true,
            boxWidth:20,
            boxHeight:20,
            color:'#223354'
          }

        },
      },
      scales:{
        xAxes:{
          stacked:true,
          ticks:{
            padding:20
          },
          
          grid:{
            display:false
          }
        },
        yAxes:{
          stacked:true,
          grid:{
            display:false
          },
          max:300
          
        },
      },
    }

    return () =>
      h(Bar, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins,
      })
  }
})
