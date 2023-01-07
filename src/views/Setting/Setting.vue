<template>
<div class="setting-main">
    <navigation class="navigation"></navigation>
    <div style="margin-bottom:2vh">
        <settingHeader></settingHeader>
        <settingInput class="setting-input"></settingInput>
    </div>
</div>
</template>

<style>
.setting-main{
    display: flex;
}
.setting-input{
    margin-left: 24vw;
    width: 30vw;
}
</style>

<script>
import navigation from "@/components/Navigation.vue"
import settingHeader from "@/components/setting/Header.vue"
import settingInput from "@/components/setting/SettingInput.vue"

export default{ 
    name:'',
    components:{
        navigation,
        settingHeader,
        settingInput
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
