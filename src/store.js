//vuex 설정 파일 
import { createStore } from "vuex";

export default createStore({
    //관리 해야할 데이터 선언
    state: {
        EditGroups : false
    }
    //상태 가공 후 state 데이터 호출
    ,getters:{
        
    } 
    //상태 접근 (변경)
    ,mutations:{
        OnEdit(state){
            state.EditGroups = true;
        }
    },
    //전처리 후 Mutations에 데이터 전달
    actions:{

    },
    //상태 모듈화
    modules:{

    }
});


// 참고 링크
//https://velog.io/@latte_h/Vue3-Guide-12-Vuex