import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "ant-design-vue/dist/antd.css";
import { Button,Icon,Dropdown,Menu,Radio,Table,Form,Input,Select } from "ant-design-vue"; //按需导入

Vue.use(Button).use(Icon).use(Dropdown).use(Menu).use(Radio).use(Table).use(Form).use(Input).use(Select)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
