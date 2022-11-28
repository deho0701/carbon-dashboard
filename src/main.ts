import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store  from "./store";
import VueBlocksTree from 'vue3-blocks-tree';
import 'vue3-blocks-tree/dist/vue3-blocks-tree.css';
import axios from 'axios'
//import axios from 'axios'
const app = createApp(App)


//그룹 트리 사용
let defaultoptions = {treeName:'blocks-tree'}
app.config.globalProperties.$axios = axios; 
app.use(VueBlocksTree,defaultoptions)

app.use(store)
//app.config.productionTip = false
//app.prototype.$http=axios  //컴포넌트에서 http사용
app.use (router)
app.mount('#app')