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

        <br/>
        <h3>2、使用 iconfont.cn </h3>
        <p>对于使用 iconfont.cn 的用户，通过设置 createFromIconfontCN 方法参数对象中的 scriptUrl 字段， 即可轻松地使用已有项目中的图标。</p>
        <div class="icons-list">
            <icon-font type="icon-tuichu" />
            <icon-font type="icon-facebook" />
            <icon-font type="icon-twitter" />
        </div>

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