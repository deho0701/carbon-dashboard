<template>
    <div>
        <div v-for="formli in formList" v-bind:key="formli" class="forms">
            <label >{{formli}}</label>  
            <div>
                <input type="text" >
            </div>
        </div>
        <router-link to="/" class="home-link">to home</router-link>  <!-- 나중에 삭제 -->
    </div>
</template>

<style>
    .home-link{
        position: absolute;
        left: 50vw;
        border:solid 2px;
        color: #383a37;
    }
    .forms{
        margin: 2vW;
        text-align: center;
        display: flex;
        justify-content: center;
    }
</style>

<script>
    export default{ 
        data(){
            return{
                formList:[
                    'First name', 'second name','왁', '와왁왁','왁왁','와왁' 
                ]
            }
        }
    }   
</script>