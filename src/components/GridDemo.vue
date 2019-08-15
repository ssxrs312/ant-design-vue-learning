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