<template>
    <div id="app">
      <div v-for="(person,index) in people" :key="person.name">
        {{person}}
      </div>
    </div>
</template>

<style>

</style>


<script>
    export default {
        name :"insight",
        data() {
                return{
                    people:["경상대","인문대"]
                }
        },
        components:{
        }
    }
</script>