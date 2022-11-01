<template>
    <div>
        <ul>
            <li>경상대</li>
            <li>인문대</li>
            <li v-for="group in list_group">{{group}}</li>
        </ul>
    </div>
</template>

<style>

</style>


<script>
    export default {
        name :"insight",
        components:{
            components:{
            data() {
                return{
                    list_group:["경상대","인문대"]
                };
            }
        },

        }
    }
</script>