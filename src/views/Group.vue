<template>
    <div class="group-main">
        <navigation class="navigation"/>
        <div class="contents">
            <GroupHeader/>
            <GroupTree/>
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
}
</style>


<script>
import navigation from "@/components/Navigation.vue"
import GroupHeader from "@/components/groups/Header.vue"
import GroupTree from "@/components/groups/Group-tree.vue"
//import EditGroup from  "@/components/groups/Date.vue"

    export default {
        name :"groups",
        components:{
            navigation,
            GroupHeader,
            GroupTree
        },
        data(){
            return{
                isView:false
            };
        }
    };
</script>