<template>
    <div class="group-tree">
        <img src="@/assets/LockGroup.png" alt="권한 따라 잠금" class="lock-group">
        <span class="group-lock-guide">회사 조직을 설계하세요</span>
        <button class="add-group-button-Intree" @click="OnEditGroup" type="button">+ 추가하기</button>
    </div>
</template>

<style>
.group-tree{
    height: 86vh;   /*header랑 합쳐서 100이 되어야 함*/
    position: relative;
    /* 점 배경 */
    background-image: linear-gradient(to bottom, transparent, transparent 10%, #F7F9FB 10%),
      linear-gradient(to right, rgba(0, 0, 0, 0.342), rgba(0, 0, 0, 0.103) 3%, #F7F9FB 10%);
    background-size: 20px 20px;

    text-align: center;
  }
  .lock-group{
    width: 150px;
    position: absolute;
    left: 50%;
    bottom: 40%;
    transform: translate(-50%,-50%);
  }
  .group-lock-guide{
    position: absolute;
    left: 50%;
    bottom: 42%;
    transform: translate(-50%,-50%);
  }
  .add-group-button-Intree{
    width: 110px;
    height: 3.5vh;
    background: #3DC984;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 13px;
    
    color: #FFFFFF;
    position: absolute;
    left: 50%;
    bottom: 30%;
    transform: translate(-50%,-50%);
  }

</style>


<script>
import { useStore } from "vuex";
    export default {
        setup(){
            const store = useStore(); //vuex 사용
            const OnEditGroup = () => store.commit("OnEdit", );
            return {OnEditGroup}
        },
        name :"Group-tree",
        components:{

        }
    }
</script>