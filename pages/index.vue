<template>
  <div id="home-page">

       <span class="header-1">Welcome to the VueJs-Quiz</span>

      <br/>

      <span class="description">
        This Quiz was developed using Vue.js and Nuxt.js to achieve Server Side Rendering. 
        <nuxt-link to="/quiz">Test your knowledge on the quiz page!</nuxt-link>
      </span>
  </div>
</template>

<style lang="less" scoped>
#home-page {
    .header-1 {
        font-size:25px;
        color:navy;
    }

    .description{
      font-size:14px;
      color:darkblue;
    }
}
</style>
