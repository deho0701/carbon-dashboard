<template>
<div class="setting-main">
    <navigation class="navigation"></navigation>
    <div class="contents">
        <surveyHeader></surveyHeader>
    </div>
</div>
</template>

<script>
import navigation from "@/components/Navigation.vue"
import surveyHeader from "@/components/survey/Header.vue"

export default{ 
    name:'',
    components:{
        navigation,
        surveyHeader,
    },
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>

