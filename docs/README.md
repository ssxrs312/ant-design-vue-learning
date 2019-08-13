

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
import App from './App.vue'
import router from './router'
import store from './store'

import { Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

上面的代码，采用的是按需导入第三方的组件，比完全导入的好处是节省资源空间。下图是使用的例子

![image-20190813111444169](http://ww1.sinaimg.cn/large/006tNc79ly1g5xwya2lghj30r70dhtbi.jpg)

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

# 2 按钮button

## 2.1 按钮类型

- 新建src/components/ButtonDemo.vue
- src/main.js中引入第三方组件
- src/router.js的routers中设置ButtonDemo的路由
- src/views/Home.vue中router-link to指向ButtonDemo的路径path或者name
- App.vue中加入<router-view/>,不然Home.vue的内容看不见
- 浏览器测试效果

**ButtonDemo.vue**

```vue
<template>
    <div id="buttondemo">

        <h3>1、按钮类型</h3>
        <p>按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。</p>
        <div>
            <a-button type="primary">Primary</a-button>
            <a-button>Default</a-button>
            <a-button type="dashed">Dashed</a-button>
            <a-button type="danger">Danger</a-button>
        </div>     
    </div>
</template>

<script>
    export default {
        name: "ButtonDemo",
    }
</script>

<style scoped>
    #buttondemo{
        margin: 3rem 2rem;
    }
</style>
```

上面的代码说明

- margin:3rem 2rem;  解释说明：上下外边距3rem，左右外边距2rem

**main.js**

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "ant-design-vue/dist/antd.css";
import { Button } from "ant-design-vue"; //按需导入

Vue.use(Button)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

**router.js**

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ButtonDemo from '@/components/ButtonDemo.vue'

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
    {
      path: '/buttondemo',
      name: 'buttondemo',
      component: ButtonDemo
    },

  ]
})
```

**Home.vue**

```vue
<template>
  <div class="home">
      <br/>
      <h1>列表index</h1>
      <ul>
          <li>
              <router-link to="/buttondemo">ButtonDemo</router-link>：按钮
          </li>
      </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style>
    h1{
        margin-left: 1rem;
    }
</style>
```
**App.vue**

```vue
<template>
  <div id="app">
      <img src="./assets/logo.png">
      <a-button type="primary">Button></a-button>
    <router-view/>
  </div>
</template>

<style>

</style>
```

**浏览器**

![image-20190813113337780](http://ww2.sinaimg.cn/large/006tNc79ly1g5xwyavgn7j30ii0argmv.jpg)

## 2.2 按钮组合

- 修改src/components/ButtonDemo.vue
- src/main.js中引入第三方组件
- 浏览器测试效果

**ButtonDemo.vue**

```vue
<template>
    <div id="buttondemo">
...
        <br/>
        <h3>2、按钮组合</h3>
        <p>可以将多个 Button 放入 Button.Group 的容器中。
            通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。</p>
        <div id="components-button-demo-button-group">
            <h4>Basic</h4>
            <a-button-group size="large">
                <a-button>Cancel</a-button>
                <a-button type="primary">OK</a-button>
            </a-button-group>
            <a-button-group size="small">
                <a-button disabled>L</a-button>
                <a-button disabled>M</a-button>
                <a-button disabled>R</a-button>
            </a-button-group>
            <a-button-group>
                <a-button type="primary">L</a-button>
                <a-button>M</a-button>
                <a-button>M</a-button>
                <a-button type="dashed">R</a-button>
            </a-button-group>

            <h4>With Icon</h4>
            <a-button-group>
                <a-button type="primary">
                    <a-icon type="left" />Go back
                </a-button>
                <a-button type="primary">
                    Go forward<a-icon type="right"/>
                </a-button>
            </a-button-group>
            <a-button-group>
                <a-button type="primary" icon="cloud" />
                <a-button type="primary" icon="cloud-download" />
            </a-button-group>
        </div>    

    </div>
</template>

<script>
    export default {
        name: "ButtonDemo",
    }
</script>

<style scoped>
    #components-button-demo-button-group h4 {
        margin: 16px 0;
        font-size: 14px;
        line-height: 1;
        font-weight: normal;
    }
    #components-button-demo-button-group h4:first-child {
        margin-top: 0;
    }
    #components-button-demo-button-group .ant-btn-group {
        margin-right: 8px;
    }
    #buttondemo{
        margin: 3rem 2rem;
    }
</style>
```

上面的代码中

- <a-button-group>和<a-button>都来自{ Button }组件
- <a-icon>来自{ Icon }组件

**main.js**

```js
...
import "ant-design-vue/dist/antd.css";
import { Button,Icon } from "ant-design-vue"; //按需导入

Vue.use(Button).use(Icon)
...
```

**浏览器**

![image-20190813114400087](http://ww2.sinaimg.cn/large/006tNc79ly1g5xwybfb49j30n607qgmt.jpg)

## 2.3 不可用状态

- 修改src/components/ButtonDemo.vue
- 浏览器测试效果

**ButtonDemo.vue**

```vue
<template>
    <div id="buttondemo">
...
        <br/>
        <h3>3、不可用状态</h3>
        <p>添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</p>
        <a-button type="primary">Primary</a-button>
        <a-button type="primary" disabled>Primary(disabled)</a-button>
        <br />
        <a-button>Default</a-button>
        <a-button disabled>Default(disabled)</a-button>
        <br />
        <a-button type="dashed">Dashed</a-button>
        <a-button type="dashed" disabled>Dashed(disabled)</a-button>
        <div :style="{ padding: '8px 8px 8px 8px', background: 'rgb(190, 200, 200)' }">
            <a-button ghost>Ghost</a-button>
            <a-button ghost disabled>Ghost(disabled)</a-button>
        </div>

    </div>
</template>
```

**浏览器**

![image-20190813115744191](http://ww2.sinaimg.cn/large/006tNc79ly1g5xwybueflj313j07iwfy.jpg)

