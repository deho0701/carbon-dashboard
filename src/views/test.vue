<template>
<div>
    <input type="text" v-model="sampleData">
    <button @click="pri">adwdawdawd</button>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        pri:{
            console.log(this.sampleData)
        }
    }
}
</script>