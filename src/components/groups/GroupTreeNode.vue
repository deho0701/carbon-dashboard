<template>
    <div class="group-tree-node" @click="Onpreview">
        <div class="group-tree-node-top">
            <span class="group-tree-node-GroupName">{{GroupName}}</span>
        </div>
        <div class="group-tree-node-mid">
            <span class="group-tree-node-totalEmission-left">전체 탄소 배출량 </span>
            <span class="group-tree-node-totalEmission-right"> {{ scope12CarbonEmission+scope3CarbonEmission}} kg</span>
            <div class="group-tree-node-emission-graph12">           
                <span style="color: #4F4F4F; font-size: 1.5vh; ">scope1,2</span>
                <span style="color: #5A6A89; font-size: 1.4vh; font-weight: 600;">{{scope12CarbonEmission}}kg</span>
            </div>
            <progress value="0.4" class="progress_bar">dasdas</progress>
            <div class="group-tree-node-emission-graph3">
                <span style="color: #4F4F4F; font-size: 1.5vh;">scope3</span>
                <span style="color: #5A6A89; font-size: 1.4vh; font-weight: 600;">{{scope3CarbonEmission}}kg</span>
            </div>
            <progress value="0.6" class="progress_bar">dasdas</progress>
        </div>
        <div class="group-tree-node-bottom">
            <span class="group-tree-node-manager">담당자</span>
            <span class="group-tree-node-managerName"> {{manager}}  {{level}}</span> 
        </div>
    </div>
</template>

<style>
.group-tree-node{
    width: 12vw;
    height: 28vh;
    border-radius:1vw;
    border: none;
    background: #FFFFFF;
}
.group-tree-node-emission-graph12{
    display:flex;
    justify-content: space-between;
    padding: 1vw;
    padding: 3vw 0.5vw 0 0.5vw ;
}
.group-tree-node-emission-graph3{
    display:flex;
    justify-content: space-between;
    padding: 1vw 0.5vw 0 0.5vw ;
}
.group-tree-node-mid progress{
    width: 11vw;
    height: 1vh;
    border: none;
}
.group-tree-node-mid progress::-webkit-progress-bar {
    border: 0;
    border-radius: 1vw;
    background-color: #EDEDED;
}

.group-tree-node-mid progress::-webkit-progress-value {
    border: 0;
    border-radius:1vw;
    background: #62BC8A;
}


.group-tree-node-top{
    border-radius: 1vw 1vw 0 0;
    background-color: #3C5C85;
    color: white;
    height:4.5vh ;
}
.group-tree-node-mid{
    border:1px solid #D9DBE9 ;
    margin-top:0;
    height:18.2vh ;
}
.group-tree-node-bottom{
    border:1px solid #D9DBE9 ;
    border-radius: 0 0 1vw 1vw;
    background: #f6f6f6;
    margin-top:0;
    height: 4.8vh;
    
}
.group-tree-node-GroupName{
    position: absolute;
    top: 2.1vh;
    transform: translate(-50%, -50%);
    font-weight: 500;
    font-size: 1vw;
}
.group-tree-node-manager{
    font-size:0.7vw;
    position: absolute;
    top: 25.2vh;
    left: 2vw;
    transform: translate(-50%, -50%);
    text-align: left;
    color:#4F4F4F;

}
.group-tree-node-managerName{
    position: absolute;
    top: 25.2vh;
    left: 6.1vw;
    transform: translate(-50%, -50%);
    font-weight: 600;
    font-size: 1vw;
    color:#6D6D6D;
}
.group-tree-node-totalEmission-left{
    position: absolute;
    top: 7.4vh;
    left: 4.3vw;
    transform: translate(-50%, -50%);
    font-weight: 600;
    font-size: 0.9vw;
    color:#6D6D6D;
}
.group-tree-node-totalEmission-right{
    position: absolute;
    top: 7.4vh;
    left: 9.8vw;
    transform: translate(-50%, -50%);
    font-weight: 600;
    font-size: 1vw;
    color: #5A6A89;
}

</style>


<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default{ 
    name:'GroupTreeNode',
    components:{},
    data(){
        return{
            scope12CarbonEmission:2,
            scope3CarbonEmission:4,
            manager:"최상민",
        };
    },
    props:{
        level:Number,
        GroupName:String
    },
    setup(props){
        var level = props.level;
        const GroupName = props.GroupName;

        const store = useStore(); //vuex 사용
        const Onpreview = () => store.commit("OnGroupPreview","total" );

        return{GroupName,level,Onpreview}
    },
    created(){},
    mounted(){},
    unmounted(){},
    methods:{},

}
</script>