import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import axios from 'axios'

const app = createApp(App)

//app.config.productionTip = false
//app.prototype.$http=axios  //컴포넌트에서 http사용
app.use (router)
app.mount('#app')