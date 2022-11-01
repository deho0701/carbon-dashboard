<template>
    <div class="group-main">
        <navigation class="navigation"/>
        <div class="contents">
            <GroupHeader/>
            <GroupTree>  </GroupTree> 
            <GroupAdd class="add-group" v-if="isView"/>
            
        </div>
        
    </div>
</template>

<style>
body{
    margin:0;
}
.group-main{
    display: flex;
}
.navigation{
    position:fixed;
    

}
.contents{
    padding-left: 15vw;
    z-index: 1;
}
.add-group{
    position: fixed; top: 0; right: 0;
}
</style>


<script>
import { computed } from "vue";
import { useStore } from "vuex";
import navigation from "@/components/Navigation.vue"
import GroupHeader from "@/components/groups/Header.vue"
import GroupTree from "@/components/groups/Group-tree.vue"
import GroupAdd from "@/components/groups/AddGroup.vue"
//import EditGroup from  "@/components/groups/Date.vue"

    export default {
        name :"groups",
        components:{
            navigation,
            GroupHeader,
            GroupTree,
            GroupAdd
        },
        setup(){
            const store = useStore(); //vuex 사용
            var isView = computed(() => store.state.EditGroups);
            return {isView}
        },
        data(){
            return{
                
            };
        },method:{

        }
    };
</script>