<template>
<<<<<<< HEAD
    <div class="group-header">
        <measure></measure>
=======
    <div>
        <ul>
            <li>경상대</li>
            <li>인문대</li>
            <li v-for="group in list_group">{{group}}</li>
        </ul>
>>>>>>> 4909e9825b0619ec60439cf3f68171585d164105
    </div>
</template>

<style>

</style>


<script>
import measure from "@/views/Measure.vue"
    export default {
        name :"insight",
        components:{
<<<<<<< HEAD
            measure
=======
            components:{
            data() {
                return{
                    list_group:["경상대","인문대"]
                };
            }
        },

>>>>>>> 4909e9825b0619ec60439cf3f68171585d164105
        }
    }
</script>