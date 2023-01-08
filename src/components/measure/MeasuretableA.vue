<template>
    <div>
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
            <template #table-actions>
              <button class= "measure_btn" id="btn_del_input2" @click="click_del_btn()">선택 삭제</button> 
              <button class= "measure_btn" id="btn_edit_input2" @click="click_edit_btn()" style="margin-right:1vw; margin-top:1vh; margin-bottom: 1vh;">수정하기</button>
            </template>
        </vue-good-table>
        {{info_list}}
        {{text}}
    </div>
  </template>
  
<style>
  .btn{
    width:20px;
    height: 10px;
  }
</style>
  
  <script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next';
  export default {
    name: 'my-component',
    data(){
      return {
        text:'s',
        info_list:{content:"",data:"",emissions:"",StartDate:"",EndDate:"",scope:""},
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
          {
            content:'d',data:'d',emissions:'d',StartDate:'',EndDate:'',scope:''
          }
        ],
      };
    },
    components: {
        VueGoodTable,
    },
    methods:{
      click_del_btn(){
        this.rows.pop({content:'d',data:'d',emissions:'d',StartDate:'',EndDate:'',scope:''});
      },
      setting(info_list_input2){
        this.text=info_list_input2
        this.info_list.content = info_list_input2.content
        this.info_list.data = info_list_input2.data
        this.info_list.emissions = info_list_input2.emissions
        this.info_list.StartDate = info_list_input2.StartDate
        this.info_list.EndDate = info_list_input2.EndDate
        this.info_list.scope = info_list_input2.scope

        this.rows.push({
          content:info_list_input2.content, 
          data:info_list_input2.data, 
          emissions:info_list_input2.emissions,
          StartDate:info_list_input2.StartDate,
          EndDate:info_list_input2.EndDate,
          scope: info_list_input2.scope
        })
      },
      selectionChanged(params) {
         params.selectedRows
      }
    },
    mounted(){
        this.emitter.on('addTodoInput',this.setting) //
    },
    
  };
  </script>