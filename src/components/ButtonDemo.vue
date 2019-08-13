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

        <br/>
        <h3>4、幽灵按钮</h3>
        <p>幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。</p>
        <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
            <a-button type="primary" ghost>Primary</a-button>
            <a-button ghost>Default</a-button>
            <a-button type="dashed" ghost>Dashed</a-button>
            <a-button type="danger" ghost>danger</a-button>
        </div>

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
                this.iconZhuangtai = {delay:3000}
            },
            handleMenuClick(e) {
                console.log('click', e);
            }
        }


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