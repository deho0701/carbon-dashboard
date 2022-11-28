<template>
    <div>
        <h1 class="login" id="title_login">탄소 중립 지원 플랫폼</h1>
        <div class="login">
          <input placeholder="ID" class="in" v-model="ID" ><br>
          <input type="password" placeholder="passward" class="in" v-model="PW"><br>
          <button id="login_btn" @click="Confirm()" >로그인하기</button><br>
          <p class="login" id="foget_login_text">비밀번호를 잊으셨나요?</p>
        </div>

    </div>
  </template>
  
  
  <style>
  .login{
    font-size: 30px;
    margin-left: 39vw;
    margin-top: 15vh;
    color: #3DC984;
 
  }
  #title_login{
    margin-left: 41vw;
  }
  .in{
    width: 20vw;
    height: 5vh;
    margin-top: 1vh;
    border-radius: 15px;
    border: 1px solid #DFDFDF;
  }
  #login_btn{
    width: 20.5vw;
    height: 5vh;
    margin-top: 3vh;
    border-radius: 15px;
    border: none;
    background: linear-gradient(90deg, #3DC984 0%, #3DC984 100%);
    color:#ffffff;
    font-weight: bold;
    font-size: 16px;

  }
  #foget_login_text{
    color: #3DC984;
    margin-left: 5.5vw;
    margin-top: 2vh;
    font-size: 16px;
  }
  #foget_login_text:hover{
    cursor: pointer;
    color: #39ba79;
  }
  #login_btn:hover{
    cursor: pointer;
    background: #39ba79;
  }

  </style>
  
  
<script setup>

const r_ID = "ho";
const r_PW = "0000";

var ID = '';
var PW = '';

function Confirm(){console.log(r_ID);
  if ((r_ID === ID) && (r_PW ===PW)){
    location.href = "/setting";
  }else{
    console.log(ID);
  }
  
}

  </script>
  