<template>
    <div>
        <h1 class="login" id="title_login">탄소 중립 지원 플랫폼</h1>
        <div class="login">
          <input placeholder="ID" class="in" v-model="n_ID" ><br>
          <input type="password" placeholder="passward" class="in" v-model="n_PW"><br>
          <button id="login_btn" @click="Confirm()" >로그인하기</button><br>
          <p class="login" id="foget_login_text">비밀번호를 잊으셨나요?</p>
        </div>
    </div>
</template>

<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            r_ID : "ho",r_PW : "0000",
            n_PW : '', n_ID : ''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        Confirm(){console.log(this.r_ID)
        if ((this.r_ID === this._ID) && (this.r_PW ===this.n_PW)){
            location.href = "/setting";
        }else{
            console.log(n_ID);
        }}
    }
}
</script>