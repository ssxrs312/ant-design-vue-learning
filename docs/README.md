

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

上面的代码，采用的是按需导入第三方的组件，比完全导入的好处是节省资源空间。下图是参考如何使用的案例

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

## 2.4 幽灵按钮

- 修改src/components/ButtonDemo.vue
- 浏览器测试效果

**ButtonDemo.vue**

```vue
<template>
    <div id="buttondemo">
...
        <br/>
        <h3>4、幽灵按钮</h3>
        <p>幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。</p>
        <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
            <a-button type="primary" ghost>Primary</a-button>
            <a-button ghost>Default</a-button>
            <a-button type="dashed" ghost>Dashed</a-button>
            <a-button type="danger" ghost>danger</a-button>
        </div>
    
    </div>
</template>

```

**浏览器**

![image-20190813152846619](http://ww3.sinaimg.cn/large/006tNc79ly1g5y4p3g7roj3132042aaf.jpg)

## 2.5 图标按钮

- 修改src/components/ButtonDemo.vue
- 浏览器测试效果

**ButtonDemo.vue**

```vue
<template>
    <div id="buttondemo">
...
        <br/>
        <h3>5、图标按钮</h3>
        <p>当需要在 Button 内嵌入 Icon 时，直接在 Button 内使用 Icon 组件。或者设置 icon 属性shape。</p>
        <div>
            <a-button type="primary" shape="circle" icon="search"></a-button>
            <a-button type="primary" icon="search">Search</a-button>
            <a-button shape="circle" icon="search" />
            <a-button icon="search">Search</a-button>
            <a-button shape="circle" icon="search" />
            <a-button icon="search">Search</a-button>
            <a-button type="dashed" shape="circle" icon="search" />
            <a-button type="dashed" icon="search">Search</a-button>
        </div>

    </div>
</template>
```

**浏览器**

![image-20190813153115398](http://ww3.sinaimg.cn/large/006tNc79ly1g5y4p49folj30g40333yw.jpg)

## 2.6 加载中状态

- 修改src/components/ButtonDemo.vue
- 浏览器测试效果

**ButtonDemo.vue**

```vue
<template>
    <div id="buttondemo">
...
        <br/>
        <h3>6、加载中状态 </h3>
        <p>添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。</p>
        <div>
            <a-button type="primary" loading>
                Loading
            </a-button>
            <a-button type="primary" size="small" loading>
                Loading
            </a-button>
            <br />
            <a-button shape="circle" loading />
            <a-button type="primary" shape="circle" loading />
            <br />
            <a-button type="primary" :loading="zhuangtai" @mouseenter="enterLoading">
                mouseenter me!
            </a-button>
            <a-button type="primary" icon="poweroff" :loading="iconZhuangtai" @click="enterIconLoading">
                延迟1s
            </a-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ButtonDemo",
        data(){
            return{
                zhuangtai:false,
                iconZhuangtai:false,
            }
        },
        methods:{
            enterLoading(){
                this.zhuangtai = true;
            },
            enterIconLoading(){
                this.iconZhuangtai = {delay:1000}
            },
           
        }
    }
</script>
```

上面的代码中

- @mouseenter="enterLoading"，鼠标经过的时候会调用方法enterLoading，请方法可以让zhuangtai=true
- @click="enterIconLoading"，点击时会调用方法enterIconLoading，其方法可以让iconZhuangtai延迟1秒。这说明loading有2个值，如果:loading时，要么false，不发生加载状态；要么true，发生加载状态。如果有delay的话，就会延迟加载状态

**浏览器**

![image-20190813153717864](http://ww1.sinaimg.cn/large/006tNc79ly1g5y4p4rwoaj30ed04o3yy.jpg)

## 2.7 多个按钮组合

- 修改src/components/ButtonDemo.vue
- src/main.js中引入第三方组件
- 浏览器测试效果

****

**ButtonDemo.vue**

```vue
<template>
    <div id="buttondemo">
				...
        <br/>
        <h3>7、多个按钮组合  </h3>
        <p>按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 Dropdown.Button 中组合使用。</p>
        <a-button type="primary">Primary</a-button>
        <a-button>secondary</a-button>
        <div>
            <a-dropdown>
                <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1">1st item</a-menu-item>
                    <a-menu-item key="2">2nd item</a-menu-item>
                    <a-menu-item key="3">3rd item</a-menu-item>
                </a-menu>
                <a-button>
                    Actions <a-icon type="down" />
                </a-button>
            </a-dropdown>
        </div>

    </div>
</template>

<script>
    export default {
				...
        methods:{
           ...
            handleMenuClick(e) {
                console.log('click', e);
            }
        }
    }
</script>

```

上面的代码中

- <a-dropdown>需要导入{ Dropdown }

- <a-menu>需要导入{ Menu }

- 按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 Dropdown.Button 中组合使用。<a-dropdown>其中有button，也有menu

- <a-menu slot="overlay">使用了一个插槽slot，当鼠标覆盖这个按钮时，会下拉带有3个操作的选项。

- @click="handleMenuClick"，点击某一个选项时，会调用方法handleMenuClick，在控制台打印click字符串和e事件

  ![image-20190813155428857](http://ww1.sinaimg.cn/large/006tNc79ly1g5y4p58qfvj30e704s3zd.jpg)

  

**main.js**

```js
...
import "ant-design-vue/dist/antd.css";
import { Button,Icon,Dropdown,Menu } from "ant-design-vue"; //按需导入

Vue.use(Button).use(Icon).use(Dropdown).use(Menu)
...
```

**浏览器**

![image-20190813155018820](http://ww1.sinaimg.cn/large/006tNc79ly1g5y4p5p353j30at05fgly.jpg)

## 2.8 按钮尺寸

- 修改src/components/ButtonDemo.vue
- src/main.js中引入第三方组件
- 浏览器测试效果

**ButtonDemo.vue**

```vue
<template>
    <div id="buttondemo">

        <br/>
        <h3>8、按钮尺寸  </h3>
        <p>按钮有大、中、小三种尺寸。
            通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。</p>
        <div>
            <a-radio-group :value="size" @change="handleSizeChange">
                <a-radio-button value="large">Large</a-radio-button>
                <a-radio-button value="default">Default</a-radio-button>
                <a-radio-button value="small">Small</a-radio-button>
            </a-radio-group>
            <br /><br />
            <a-button type="primary" :size="size">Primary</a-button>
            <a-button :size="size">Normal</a-button>
            <a-button type="dashed" :size="size">Dashed</a-button>
            <a-button type="danger" :size="size">Danger</a-button>
            <br />
            <a-button type="primary" shape="circle" icon="download" :size="size" />
            <a-button type="primary" icon="download" :size="size">Download</a-button>
            <br />
            <a-button-group :size="size">
                <a-button type="primary">
                    <a-icon type="left" />Backward
                </a-button>
                <a-button type="primary">
                    Forward<a-icon type="right" />
                </a-button>
            </a-button-group>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ButtonDemo",
        data(){
            return{
            ...
                size:'large'
            }
        },
        methods:{
        ...
            handleSizeChange (e) {
                this.size = e.target.value
            },
        }
    }
</script>
```

上面的代码中

- <a-radio>需要导入{  Radio }
- 每一个button都绑定了size，size根据@change="handleSizeChange"发生变化
- e.target.value，先弄清楚e.target指向哪个元素，然后看看这个元素的value属性的值就可以得到了。初学者一般会把e.target和this弄混，搞不懂这两个具体指向哪个元素。简单来说，this就是指向当前事件所绑定的元素，而e.target指向事件执行时鼠标所点击区域的那个元素。容易搞不懂的地方是，初学者会认为当前事件所绑定的元素不就是鼠标所点击的那个元素嘛，这时候就要看看事件绑定的元素内部有没有子元素了，如果有子元素的话e.target指向这个子元素，如果没有，e.target和this都指向事件所绑定的元素。

**main.js**

```js
...
import "ant-design-vue/dist/antd.css";
import { Button,Icon,Dropdown,Menu,Radio } from "ant-design-vue"; //按需导入

Vue.use(Button).use(Icon).use(Dropdown).use(Menu).use(Radio)
...
```

**浏览器**

![image-20190813162233671](http://ww2.sinaimg.cn/large/006tNc79ly1g5y4p64u6mj30iw06fjs4.jpg)

## 2.9 block 按钮

- 修改src/components/ButtonDemo.vue
- 浏览器测试效果

**ButtonDemo.vue**

```vue
<template>
    <div id="buttondemo">
				...
        <br/>
        <h3>9、block 按钮  </h3>
        <p>block属性将使按钮适合其父宽度。</p>
        <div>
            <a-button type="primary" block>Primary</a-button>
            <a-button block>Default</a-button>
            <a-button type="dashed" block>Dashed</a-button>
            <a-button type="danger" block>danger</a-button>
        </div>

    </div>
</template>

```

**浏览器**

![image-20190813162409805](http://ww4.sinaimg.cn/large/006tNc79ly1g5y4p6lb00j30op05caab.jpg)

# 3 图标icon

## 3.1 基本用法

- 新建src/components/IconDemo.vue
- src/main.js中引入第三方组件
- src/router.js的routers中设置IconDemo.vue的路由
- src/views/Home.vue中router-link to指向IconDemo.vue的路径path或者name
- 浏览器测试效果

**IconDemo.vue**

```vue
<template>
    <div class="icondemo">
        <br/>
        <h3>1、基本用法 </h3>
        <p>使用icon标签声明组件，指定图标对应的 type 属性。可以通过 theme 属性来设置不同的主题风格的图标，
            也可以通过设置 spin 属性来实现动画旋转效果。</p>
        <div class="icons-list">
            <a-icon type="home" />
            <a-icon type="setting" theme="filled" />
            <a-icon type="smile" theme="outlined" />
            <a-icon type="sync" spin />
            <a-icon type="loading" />
        </div>

    </div>
</template>

<script>
    export default {
        name: "IconDemo"
    }
</script>

<style scoped>
    .icondemo{
        margin: 2rem 2rem;
    }
    .icons-list >>> .anticon {
        margin-right: 6px;
        font-size: 24px;
    }
</style>
```

上面的代码中

- .icons-list >>> .anticon是什么没看懂，我的理解是不是让图标间隔让出距离

  ![image-20190813205738475](http://ww2.sinaimg.cn/large/006tNc79ly1g5yebxrpldj30oe036aag.jpg)

  

**main.js**

```js
...
import "ant-design-vue/dist/antd.css";
import { Button,Icon,Dropdown,Menu,Radio } from "ant-design-vue"; //按需导入

Vue.use(Button).use(Icon).use(Dropdown).use(Menu).use(Radio)
...
```

**router.js**

```js
...
import IconDemo from '@/components/IconDemo.vue'

export default new Router({

  routes: [
    {
      path: '/iconDemo',
      name: 'iconDemo',
      component: IconDemo
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
              <router-link to="/iconDemo">IconDemo</router-link>：图标 Icon
          </li>
      </ul>

  </div>
</template>
```

**浏览器**

![image-20190813204727622](http://ww3.sinaimg.cn/large/006tNc79ly1g5yeby5cokj30p403tgm0.jpg)

## 3.2 使用 iconfont.cn

- 修改src/components/IconDemo.vue
- 浏览器测试效果

**IconDemo.vue**

```vue
<template>
    <div class="icondemo">

        <br/>
        <h3>2、使用 iconfont.cn </h3>
        <p>对于使用 iconfont.cn 的用户，通过设置 createFromIconfontCN 方法参数对象中的 scriptUrl 字段， 即可轻松地使用已有项目中的图标。</p>
        <div class="icons-list">
            <icon-font type="icon-tuichu" />
            <icon-font type="icon-facebook" />
            <icon-font type="icon-twitter" />
        </div>

    </div>
</template>

<script>
    import { Icon } from 'ant-design-vue';

    const IconFont = Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    })

    export default {
        name: "IconDemo",
        components: {
            IconFont,
        }
    }
</script>

<style scoped>
    .icondemo{
        margin: 2rem 2rem;
    }
    .icons-list  >>> .anticon {
        margin-right: 6px;
        font-size: 24px;
    }
</style>
```

**浏览器**

![image-20190813215521465](http://ww1.sinaimg.cn/large/006tNc79ly1g5yebym5joj30m502twer.jpg)

## 3.3 多色图标

- 修改src/components/IconDemo.vue
- 浏览器测试效果

IconDemo.vue

```vue
<template>
    <div class="icondemo">
  			...
        <br/>
        <h3>3、多色图标  </h3>
        <p>可以通过设置 theme 属性为 twoTone 来渲染双色图标，并且可以设置主题色。</p>
        <div class="icons-list">
            <a-icon type="smile" theme="twoTone" />
            <a-icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
            <a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
        </div>

    </div>
</template>


<style scoped>
    .icons-list  >>> .anticon {
        margin-right: 6px;
        font-size: 24px;
    }
</style>
```

**浏览器**

![image-20190813215905494](http://ww4.sinaimg.cn/large/006tNc79ly1g5yebz86n9j30e502tq33.jpg)

# 4 表格table

## 4.1 远程加载数据

- 新建src/components/TableDemo.vue
- src/main.js中引入第三方组件
- src/router.js的routers中设置TableDemo.vue的路由
- src/views/Home.vue中router-link to指向TableDemo.vue的路径path或者name
- 浏览器测试效果

**TableDemo.vue**

```vue
<template>
    <div class="tabledemo">
        <br/>
        <h3>1、远程加载数据</h3>
        <p>这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。
            另外，本例也展示了筛选排序功能如何交给服务端实现，列不需要指定具体的 onFilter 和 sorter 函数，而是在把筛选和排序的参数发到服务端来处理。
            注意，此示例使用 模拟接口，展示数据可能不准确，请打开网络面板查看请求。</p>
        <a-table :columns="columns"
                 :rowKey="record => record.login.uuid"
                 :dataSource="data"
                 :pagination="pagination"
                 :loading="loading"
                 @change="handleTableChange"
        >
            <template slot="name" slot-scope="name">
                {{name.first}} {{name.last}}
            </template>
        </a-table>

    </div>
</template>

<script>
    import reqwest from 'reqwest';

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: true,
            width: '20%',
            scopedSlots: { customRender: 'name' },
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            filters:[
                {text:'Male',value:'male'},
                {text:'Female',value:'female'}
            ],
            width:'20%'
        },
        {
            title:'Email',
            dataIndex:'email'
        }
    ]

    export default {
        name: "TableDemo",
        mounted() {
            this.fetch();
        },
        data() {
            return {
                data: [],
                pagination: {},
                loading: false,
                columns,
            }
        },
        methods: {
            handleTableChange (pagination, filters, sorter) {
                console.log(pagination);//打印pagination，每一次都不一样
                const pager = { ...this.pagination };//将pager变成一个数组，然后变成参数序列。
                pager.current = pagination.current;
                this.pagination = pager;
                this.fetch({
                    results: pagination.pageSize,
                    page: pagination.current,
                    sortField: sorter.field,
                    sortOrder: sorter.order,
                    ...filters,
                });//给params传参，例如{results:10,page:1,sortField:name,sortOrder:ascend,gender:Array(1)}
            },
            fetch (params = {}) {
                console.log('params:', params);//第一次显示为  params:{};以后显示时，会根据分页、排序、筛选的变化而生成不同的参数。这里打印在控制台，就是为了说明params是一个变化的参数
                this.loading = true
                reqwest({
                    url: 'https://randomuser.me/api',
                    method: 'get',
                    data: {
                        results: 10,
                        ...params,  //将一个数组变成参数序列，传给后台的data，不知道要传多少个参数，这个要传的参数是动态变化的，所以在这里把params变成一个数组，这个数组可以变成参数序列。
                    },
                    type: 'json',
                }).then((data) => {     //promise对象用法，then（(response)=>{})是指后台将返回的结果放在response中
                    const pagination = { ...this.pagination };//将pagination变成一个数组，然后变成参数序列。
                    // Read total count from server
                    // pagination.total = data.totalCount;
                    pagination.total = 200;
                    this.loading = false;
                    this.data = data.results;
                    this.pagination = pagination;//将可变的数组成为一个参数序列
                });
            }
        },
    }
</script>

<style scoped>
.tabledemo{
    margin: 2rem 2rem;
}
</style>
```

上面的代码中

- <a-table>需要导入{ Table }

- :columns  表格列的配置描述，需要在下面的script中配置

- :rowKey  表格行key的取值，可以是字符串或者一个函数

- :dataSource 数据数组

- :pagination 分页器

- :loading 是否加载

- @change="handleTableChange"  change事件，分页、排序、筛选变化时触发，调用handleTableChange方法

- <template slot="name" slot-scope="name">
                  {{name.first}} {{name.last}}
              </template>

  插槽slot="name"，使用的范围=“name"，插槽让{{name.first}} {{name.last}}放在一起显示。使用时就需要scopedSlots: { customRender: 'name' },name指的是dataIndex。为了更好的理解，我们把slot注释掉，然后把dataIndex改成name.first，代码如下

  ![image-20190814105215853](http://ww3.sinaimg.cn/large/006tNc79ly1g5z226zu4jj30en07yt9r.jpg)

  效果如下

  ![image-20190814105247098](http://ww4.sinaimg.cn/large/006tNc79ly1g5z227f39yj30os0ixmzw.jpg)

  上面的测试也证明了slot可以让多个字段放在一列显示。

- import reqwest from 'reqwest';  类似ajax，需要install，如果不知道install什么，就全局install把，我用的是sudo npm install，就是将所有需要的模块安装模块到`node_modules`目录。
-  const columns，申明变量columns，在这里对表格列的描述进行配置。有很多描述，比如
  - title，标题
  - dataIndex，列显示的字段，后台传什么就显示什么，字段名要跟后台一致
  - sorter，排序
  - width，宽，样式设置
  - scopedSlots，插槽范围
  - filters，过滤数组
-  mounted() ，初始化的时候执行
- fetch (params = {}) ，参数params是json类型，先没有值
- ...params是es6的语法，扩展运算符(...)。[数组的扩展](https://es6.ruanyifeng.com/?search=...&x=6&y=12#docs/array)
- 实际上handleTableChange方法中的pager是为了理解，去掉后没影响

![image-20190814113534976](http://ww3.sinaimg.cn/large/006tNc79ly1g5z227w5tgj30et05t75a.jpg)

**main.js**

```js
...

import "ant-design-vue/dist/antd.css";
import { Button,Icon,Dropdown,Menu,Radio,Table } from "ant-design-vue"; //按需导入

Vue.use(Button).use(Icon).use(Dropdown).use(Menu).use(Radio).use(Table)
...
```

**router.js**

```js

import TableDemo from '@/components/TableDemo.vue'

export default new Router({
  routes: [
 
    {
      path: '/tableDemo',
      name: 'tableDemo',
      component: TableDemo
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
              <router-link to="/tableDemo">TableDemo</router-link>：表格 Table
          </li>
      </ul>

  </div>
</template>
```

**浏览器**

![image-20190814114004260](http://ww2.sinaimg.cn/large/006tNc79ly1g5z228u4fqj30pg0klq6b.jpg)

# 5 表单form

## 5.1 表单联动

- 新建src/components/FormDemo.vue
- src/main.js中引入第三方组件
- src/router.js的routers中设置FormDemo.vue的路由
- src/views/Home.vue中router-link to指向FormDemo.vue的路径path或者name
- 浏览器测试效果

FormDemo.vue

```vue
<template>
    <div>
        <br/>
        <h3>1、表单联动</h3>
        <p>使用 setFieldsValue 来动态设置其他控件的值。</p>
        <a-form
                :form="form"
                @submit="handleSubmit"
        >
            <a-form-item
                    label="Note"
                    :label-col="{ span: 5 }"
                    :wrapper-col="{ span: 12 }"
            >
                <a-input
                        v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
                />
            </a-form-item>
            <a-form-item
                    label="Gender"
                    :label-col="{ span: 5 }"
                    :wrapper-col="{ span: 12 }"
            >
                <a-select
                        v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
                        placeholder="Select a option and change input text above"
                        @change="handleSelectChange"
                >
                    <a-select-option value="male">
                        male
                    </a-select-option>
                    <a-select-option value="female">
                        female
                    </a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item
                    :wrapper-col="{ span: 12, offset: 5 }"
            >
                <a-button
                        type="primary"
                        html-type="submit"
                >
                    Submit
                </a-button>
            </a-form-item>
        </a-form>

    </div>
</template>

<script>
    export default {
        name: "FormDemo",
        data () {
            return {
                formLayout: 'horizontal',
                form: this.$form.createForm(this),
            };
        },
        methods: {
            handleSubmit (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
            handleSelectChange (value) {
                console.log(value);
                this.form.setFieldsValue({
                    note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
                });
            },
        },
    }
</script>

<style scoped>

</style>
```

上面的代码中，

- <a-form>、<a-input>、<a-select>需要导入{ Form,Input,Select }
- :label-col="{ span: 5 }"  24格栅，[Grid格栅](https://vue.ant.design/components/grid-cn/#API)
- :wrapper-col="{ span: 10 }"  输入框的长度
- 换一种解释方法：在官方文档中，读一遍源代码，自己跑起来试一遍，对照API，就明白了。可意会不可言传
- 怎么看按官方文档呢，[form表单](https://vue.ant.design/components/form-cn/)

![image-20190815103936557](http://ww2.sinaimg.cn/large/006tNc79ly1g605zo10cdj30pw0ccq46.jpg)

在页面右侧有API，对于不懂的可以自己查看。对照交互效果、代码、API就能明白了

![image-20190815104000466](http://ww1.sinaimg.cn/large/006tNc79ly1g605zoxrncj305h0at0t4.jpg)

**main.js**

```js
...
import "ant-design-vue/dist/antd.css";
import { Button,Icon,Dropdown,Menu,Radio,Table,Form,Input,Select } from "ant-design-vue"; //按需导入

Vue.use(Button).use(Icon).use(Dropdown).use(Menu).use(Radio).use(Table).use(Form).use(Input).use(Select)
...
```

# 6 格栅grid

- 新建src/components/GridDemo.vue
- src/main.js中引入第三方组件
- src/router.js的routers中设置GridDemo.vue的路由
- src/views/Home.vue中router-link to指向GridDemo.vue的路径path或者name
- 浏览器测试效果

**GridDemo.vue**

```vue
<template>
    <div class="gridDemo">
        <br/>
        <h3>1、flex布局</h3>
        <p>Flex 布局基础。
            使用 row-flex 定义 flex 布局，其子元素根据不同的值 start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式。</p>
        <div class="gutter-example">
            <a-row :gutter="16" style="background: red">
                <a-col class="gutter-row" :span="6" style="background:yellow">
                    <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6" >
                    <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">col-6</div>
                </a-col>
            </a-row>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GridDemo"
    }
</script>

<style scoped>
 .gridDemo{
     margin: 2rem 2rem;
}

 .gutter-box {
     background: #00A0E9;

 }
</style>
```

上面的代码中

- :gutter="16"  格栅间隔，比如格栅系统是24，格栅间隔=24-16=8。:gutter是动态属性绑定，说明格栅间隔能支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}`
- 响应式对象有
  - xs    <576px
  - sm   >=576px
  - md  >=768px
  - lg  >=992px
  - xl  >=1200px
  - xxl   >=1600px

**main.js**

```js

import "ant-design-vue/dist/antd.css";
import { Button,Icon,Dropdown,Menu,Radio,Table,Form,Input,Select,Row,Col } from "ant-design-vue"; //按需导入

Vue.use(Button).use(Icon).use(Dropdown).use(Menu).use(Radio).use(Table).use(Form).use(Input).use(Select).use(Row).use(Col)

```

**浏览器**

![image-20190815141042639](http://ww4.sinaimg.cn/large/006tNc79ly1g60c25biskj30p703yt94.jpg)

