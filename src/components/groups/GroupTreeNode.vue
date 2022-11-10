<template>
    <div class="group-tree-node" @click="Onpreview">
        <div class="group-tree-node-top">
            <span class="group-tree-node-GroupName">{{GroupName}}</span>
        </div>
        <div class="group-tree-node-mid">
            <span class="group-tree-node-totalEmission-left">전체 탄소 배출량 </span>
            <span class="group-tree-node-totalEmission-right"> {{ scope12CarbonEmission+scope3CarbonEmission}} kg</span>
            <div class="group-tree-node-emission-graph12">           
                <span>scope1,2</span>
                <span>{{scope12CarbonEmission}}kg</span>
            </div>
            <progress value="0.4" class="">dasdas</progress>
            <div class="group-tree-node-emission-graph3">
                <span>scope3</span>
                <span>{{scope3CarbonEmission}}kg</span>
            </div>
            <progress value="0.6">dasdas</progress>
        </div>
        <div class="group-tree-node-bottom">
            <span class="group-tree-node-manager">담당자</span>
            <span class="group-tree-node-managerName"> {{manager}}  {{level}}</span> 
        </div>
    </div>
</template>

<style>
.group-tree-node{
    width: 221px;
    height: 271px;

    border-radius:15px;
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
    width: 200px;
    height: 20px;
}
.group-tree-node-mid progress::-webkit-progress-bar {
    border: 0;
    border-radius: 20px;
    background-color: #d9d9d9;
}
progress::-webkit-progress-value {
    border: 0;
    border-radius: 20px;
    background-color: #3DC984;
}


.group-tree-node-top{
    border-radius: 15px 15px 0 0;
    background-color: #3C5C85;
    color: white;
    height:44px ;
}
.group-tree-node-mid{
    border:1px solid #D9DBE9 ;
    margin-top:0;
    height:176px ;
}
.group-tree-node-bottom{
    border:1px solid #D9DBE9 ;
    border-radius: 0 0 15px 15px;
    margin-top:0;
    height: 48px;
    
}
.group-tree-node-GroupName{
    position: absolute;
    top: 8%;
    transform: translate(-50%, -50%);
    font-weight: 500;
    font-size: 18px;
}
.group-tree-node-manager{
    font-size:0.7vw;
    position: absolute;
    top: 90%;
    left: 15%;
    transform: translate(-50%, -50%);
    text-align: left;

}
.group-tree-node-managerName{
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    font-size: 1vw;
}
.group-tree-node-totalEmission-left{
    position: absolute;
    top: 26%;
    left: 35%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    font-size: 0.9vw;
}
.group-tree-node-totalEmission-right{
    position: absolute;
    top: 26%;
    left: 80%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    font-size: 1vw;
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
            manager:"ming",
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