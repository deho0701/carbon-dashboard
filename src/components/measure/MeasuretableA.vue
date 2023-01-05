<template>
    <div>
      <div>
            <button class="measure_btn" id="btn_del" @click="del_btn()">선택삭제</button>
            <button class="measure_btn" id="btn_copy" @click="copy_btn">복사하기</button>
            <button class="measure_btn" id="btn_edit" @click="edit_btn">수정하기</button>

            <button class="measure_btn" id="btn_regi"  onclick="location.href='/measure/register';" >+　등록하기</button>
            <button class="measure_btn" id="btn_excle">엑셀 업로드</button>
            <img class="measure_btn"  id="btn_search" src="@/assets/search.png" alt=""/>
            {{ this.row_data }}
        </div>
        <vue-good-table
            @on-selected-rows-change="selectionChanged"
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
            <div slot="selected-row-actions">
              <button>Action 1</button>
            </div>
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
        row_data:[],
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
    },
    methods:{
      del_btn(){
        this.row_data.push();
      }
    }
  };
  </script>