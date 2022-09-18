<template>
    <div class="head">
        <div class="title">The Carbon Footprint DashBoard</div>
        <input  class="search">
    </div>
</template>

<style>
    .head{
        height: 4vw;
        background-color: #a4bd93;
        display: flex;
        justify-content: space-between;
        align-items: center;

        top: 0;left: 0; right: 0;
        position: fixed;
    }
    .title{
        margin-left: 50vw;
        font-size: 1.5vw;
        text-align: center;
        color: white;
    }
    .search{
        background-color: aliceblue;
        margin-right:15vw;
        height: 2vw;
        width: 10vw;
        border: none;
    }
</style>

<script>
export default {
    name :"home-Header"
}
</script>
