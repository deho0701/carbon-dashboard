<template>
    <div class="scope-box">
        <p>1 scope [co2]</p>
        <h2>{{carbon}} T</h2>
    </div>
</template>

<style>
    p{
        font-size:90%;
        margin: 0;
    }
    h2{
        color:  #295c07 ;
        text-align: center; 
        margin: 1vw;
    }
    .scope-box{
        border-radius: 10px;
        border:2px solid #295c07 ;  
        width: 10vw;
        margin-bottom: 2vw;
    }
</style>

<script>
    export default {
        name :"ScpoeBox",
        data(){
            return {
                carbon:10
            };
        }

    }
</script>