<template>
  <div class="header-top-bar">
   <i class="iconfont icon-arrow" v-show ="is_arrow_show"></i>
   {{title}}
  </div>
</template>

<script>
export default {
  name: 'header-top-bar',
  data () {
    return {
      title: '我的',
      'is_arrow_show': true
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header-top-bar{
        position: fixed;
        top: 0;
        left: 0;
        height: 45px;
        width: 100%;
        background-color: rgb(0, 150, 255);
        z-index: 1;
        line-height: 45px;
        font-size: 20px;
        color: #fff;
        text-align: center;
        box-sizing: border-box;
    }
    .icon-arrow{
        position: absolute;
        left: 0px;
        display: inline-block;
        width: 30px;
        font-size: 24px;
        color: #fff;
        transform: rotate(180deg);
    }
</style>