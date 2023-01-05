<template>
  <Tree style="color:black; font-size:2vh"
    :nodes="data"
    :use-icon="true"
    @nodeClick="onNodeClick"
  />
  
</template>

<script>
import { ref } from "vue";
import Tree from "vue3-tree";
import "vue3-tree/dist/style.css";

export default {
  components: {
    Tree,
  },
  setup() {
    const data = ref([
      {
        id: 1,
        label: "경상대",
        nodes: [
          {
            id: 2,
            label: "상경대학",
            nodes:[
              {
                id: 3,
                label:"경영학과"
              }
            ],
          },
          {
            id: 4,
            label: "공과대학",
            nodes: [
              {
                id: 5,
                label: "항공우주 및 소프트웨어 학과",
              },
              {
                id: 6,
                label: "건축공학과",
              },
            ],
          },
        ],
      },
    ]);
    const searchText = ref("");
    const onNodeExpanded = (node, state) => {
      console.log("state: ", state);
      console.log("node: ", node);
    };

    const onUpdate = (nodes) => {
      console.log("nodes:", nodes);
    };

    const onNodeClick = (node) => {
      console.log(node);
     
    }

    return {
      data,
      searchText,
      onNodeExpanded,
      onUpdate,
      onNodeClick,
    };
  },
};
</script>

<style lang="scss">
</style>