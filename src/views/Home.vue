<template>
  <div class="home">

      <br/>
      <h1>列表index</h1>
      <ul>
          <li>
              <router-link to="/buttondemo">ButtonDemo</router-link>：按钮 Button
          </li>
          <li>
              <router-link to="/iconDemo">IconDemo</router-link>：图标 Icon
          </li>
          <li>
              <router-link to="/tableDemo">TableDemo</router-link>：表格 Table
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
