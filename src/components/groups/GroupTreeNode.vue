<template>
    <div class="group-tree-node">
        <span>{{GroupName}}</span>
        <hr>
        <span>전체 탄소 배출량 {{ scope12CarbonEmission+scope3CarbonEmission}} kg</span>
        <div class="group-tree-node-emission-graph">
            <span>scope1,2</span>
            <span>{{scope12CarbonEmission}}</span>
            <div>baarrrrrrrr</div>
        </div>
        <div class="group-tree-node-emission-graph">
            <span>scope3</span>
            <span>{{scope3CarbonEmission}}</span>
            <div>baarrrrrrrr</div>
        </div>
        <hr>
        <span>담당자   {{manager}}  {{level}}</span>
    </div>
</template>

<style>
.group-tree-node{
    width: 221px;
    height: 271px;
    border:2px solid #3DC984;
    border-radius:15px;
    background: #FFFFFF;
}
.group-tree-node-emission-graph{
    display:flex;
    justify-content: space-between;
}


</style>


<script>

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
        var level = props.level
        const GroupName = props.GroupName
    },
    created(){},
    mounted(){},
    unmounted(){},
    methods:{},

}
</script>