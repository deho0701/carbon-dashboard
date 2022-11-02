<template>
    <div class="group-tree">
        <div v-if="IfTreeNull"><!-- 그룹이 없으면 보여줌 -->
        <img src="@/assets/LockGroup.png" alt="권한 따라 잠금" class="lock-group">
        <span class="group-lock-guide">회사 조직을 설계하세요</span>
        <button class="add-group-button-Intree" @click="OnEditGroup" type="button">+ 추가하기</button>
        </div>
        <div v-if="!IfTreeNull" id="tree" ><!-- 그룹이 있으면 그룹 보여줌 -->
          <blocks-tree  id="tree" :data="treeData" :horizontal="treeOrientation=='1'" :collapsable="true" :props="{label: 'label', expand: 'expand', children: 'children',  key:'some_id'}">
            <template #node="{data}" id="tree2" >
                <GroupTreeNode :level=data.some_id :GroupName=data.label></GroupTreeNode>
            </template>
         </blocks-tree>
        </div>
    </div>
</template>

<style>
.group-tree{
    height: 86vh;   /*header랑 합쳐서 100이 되어야 함*/
    position: relative;
    /* 점 배경 */
    background-image: linear-gradient(to bottom, transparent, transparent 10%, #F7F9FB 10%),
      linear-gradient(to right, rgba(0, 0, 0, 0.342), rgba(0, 0, 0, 0.103) 3%, #F7F9FB 10%);
    background-size: 20px 20px;

    text-align: center;
    max-width: 85vw;
    max-height: 85vh;
  }
  .lock-group{
    width: 150px;
    position: absolute;
    left: 50%;
    bottom: 40%;
    transform: translate(-50%,-50%);
  }
  .group-lock-guide{
    position: absolute;
    left: 50%;
    bottom: 42%;
    transform: translate(-50%,-50%);
  }
  .add-group-button-Intree{
    width: 110px;
    height: 3.5vh;
    background: #3DC984;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 13px;
    
    color: #FFFFFF;
    position: absolute;
    left: 50%;
    bottom: 30%;
    transform: translate(-50%,-50%);
  }
  #tree{
    background: none;
  }
  .org-tree-node-label-inner{
    box-shadow:none !important ;
    padding: 0 !important;
  }
</style>


<script>
import { useStore } from "vuex";
import { defineComponent,ref,reactive } from 'vue';
import GroupTreeNode from "./GroupTreeNode.vue"

    export default {
        setup(){
          const store = useStore(); //vuex 사용
          const OnEditGroup = () => store.commit("OnEdit", );
          const IfTreeNull=false;
          let selected = ref([]);
          let treeOrientation = ref("0"); //수직 or수평
          let treeData = reactive({
              label: 'root',
              expand: true,
              some_id: 1,
              children: [
                  { label: '상경대학', some_id: 2, },
                  { label: '자연대학', some_id: 3, },
                  { 
                      label: '공과대학', 
                      some_id: 4, 
                      expand: false, 
                      children: [
                          { label: '항공우주 및 소프트웨어공학과', some_id: 5 },
                          {  
                              label: '기계공학과', 
                              some_id: 6, 
                              expand: false, 
                              children: [
                                  { label: 'subchild 11', some_id: 7 },
                                  { label: 'subchild 22', some_id: 8 },
                              ]
                          },
                      ]
                  },
              ],
          });

        return {
          treeData,
          selected,
          treeOrientation,
          OnEditGroup,
          IfTreeNull
          }
        },
        name :"Group-tree",
        components:{
            GroupTreeNode
        }
    }
</script>