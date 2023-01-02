<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="rows" 
            :select-options="{ enabled: true }"
            :sort-options="{enabled: false}"
            :pagination-options="{
                enabled: true,
                mode: 'pages',
                perPage: 5
            }"
            >
        </vue-good-table>
    </div>
  </template>
  
  
  <script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next';

  export default {
    name: 'my-component',
    data(){
      return {
        columns: [
          {
            label: '탄소 배출 내용',
            field: 'content',
          },
          {
            label: '활동 데이터',
            field: 'data',
            type: 'number',
          },
          {
            label: '탄소 배출량',
            field: 'emissions',
            type: 'number'
          },
          {
            label: '시작 날짜',
            field: 'startDate',
            type: 'date',
            dateInputFormat: 'yyyy-MM-dd',
            dateOutputFormat: 'yyyy.MM.dd',
          },
          {
            label: '종료 날짜',
            field: 'EndDate',
            type: 'date',
            dateInputFormat: 'yyyy-MM-dd',
            dateOutputFormat: 'yyyy.MM.dd',
          },
          {
            label: '스코프',
            field: 'scope',
          }
        ],
        rows: [
          { id:1, content:"임직원 통근", data: '12354kg',emissions:'12345kg',startDate:'2022-01-01',EndDate:'2022-01-01',scope:"scope1"},
          { id:1, content:"임직원 통근", data: '12354kg',emissions:'12345kg',startDate:'2022-01-01',EndDate:'2022-01-01',scope:"scope1"},
          { id:1, content:"임직원 통근", data: '12354kg',emissions:'12345kg',startDate:'2022-01-01',EndDate:'2022-01-01',scope:"scope1"},
          { id:1, content:"임직원 통근", data: '12354kg',emissions:'12345kg',startDate:'2022-01-01',EndDate:'2022-01-01',scope:"scope1"},
          { id:1, content:"임직원 통근", data: '12354kg',emissions:'12345kg',startDate:'2022-01-01',EndDate:'2022-01-01',scope:"scope1"},
          { id:1, content:"임직원 통근", data: '12354kg',emissions:'12345kg',startDate:'2022-01-01',EndDate:'2022-01-01',scope:"scope1"},
          
        ],
      };
    },
    components: {
        VueGoodTable,
        Tree,
    }
  };
  </script>