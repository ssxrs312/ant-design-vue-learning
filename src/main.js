import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "ant-design-vue/dist/antd.css";
import { Button,Icon,Dropdown,Menu,Radio } from "ant-design-vue"; //按需导入

Vue.use(Button).use(Icon).use(Dropdown).use(Menu).use(Radio)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
