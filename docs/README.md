

# 1 快速上手

## 1.1 创建项目

```
vue create ant-design-vue-learning
```

![image-20190812232550939](http://ww2.sinaimg.cn/large/006tNc79ly1g5xcfqe4a2j30hm04owfi.jpg)

## 1.2 使用yarn安装antd

```
sudo yarn add ant-design-vue
```

![image-20190812232946674](http://ww2.sinaimg.cn/large/006tNc79ly1g5xcfr6tjkj30jf0f177u.jpg)

## 1.3 删除项目创建时的内容

App.vue

```vue
<template>
  <div id="app">
     
  </div>
</template>

<style>

</style>
```

main.js

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

router.js

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

  ]
})
```

Home.vue

```vue
<template>
  <div class="home">

  </div>
</template>

<script>


export default {

}
</script>
```

删除About.vue、Helloworld.vue。

## 1.4 修改main.js

```js
import Vue from 'vue'
import { Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component(Button.name, Button);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

## 1.5 修改App.vue

```vue
<template>
  <div id="app">
      <img src="./assets/logo.png">
      <a-button type="primary">Button></a-button>
  </div>
</template>

<style>

</style>
```

浏览器

![image-20190812234555648](http://ww1.sinaimg.cn/large/006tNc79ly1g5xcfrpty7j309j06nt95.jpg)

