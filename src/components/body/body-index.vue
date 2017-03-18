<template>
  <div class="index">
    <header class="index-header">
      <div class="top-banner">
        <div class="now-address"><i class="iconfont icon-shouhuodizhi"></i>岐山县<i class="iconfont icon-arrow"></i></div>
      </div>
      <div class="nav-bar">
        <ul class="nav-bar-list">
          <li class="nav-bar-list-item">
            <img src="../../common/images/meishi.png" alt="美食图片" class="item-pic"> 美食
          </li>
          <li class="nav-bar-list-item">
            <img src="../../common/images/meishi.png" alt="美食图片" class="item-pic"> 超市
          </li>
          <li class="nav-bar-list-item">
            <img src="../../common/images/meishi.png" alt="美食图片" class="item-pic"> 鲜果购
          </li>
          <li class="nav-bar-list-item">
            <img src="../../common/images/meishi.png" alt="美食图片" class="item-pic"> 甜点饮品
          </li>
          <li class="nav-bar-list-item">
            <img src="../../common/images/meishi.png" alt="美食图片" class="item-pic"> 正餐优选
          </li>
          <li class="nav-bar-list-item">
            <img src="../../common/images/meishi.png" alt="美食图片" class="item-pic"> 小迪专送
          </li>
          <li class="nav-bar-list-item">
            <img src="../../common/images/meishi.png" alt="美食图片" class="item-pic"> 能量西餐
          </li>
          <li class="nav-bar-list-item">
            <img src="../../common/images/meishi.png" alt="美食图片" class="item-pic"> 精选小吃
          </li>
        </ul>
      </div>
    </header>
    <div class="content">
      <h2 class="content-title">
        <p>附近商家</p>
      </h2>
      <good-list-item @go="goShopPage"></good-list-item>
      <good-list-item></good-list-item>
      <good-list-item></good-list-item>
      <good-list-item></good-list-item>
      <good-list-item></good-list-item>
      <good-list-item></good-list-item>
      <good-list-item></good-list-item>
      <good-list-item></good-list-item>
      <good-list-item></good-list-item>
      <good-list-item></good-list-item>
      <good-list-item></good-list-item>
      <good-list-item></good-list-item>
      <good-list-item></good-list-item>
      <good-list-item></good-list-item>
      <div class="more">
        更多商家接入中，敬请期待！
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import router from '@/router'
  import goodListItem from './good-list-item';
  import Footer from '../footer/index-footer';

  export default {
    name: 'index',
    data() {
      return {
        title: '主页'
      };
    },
    components: {
      'good-list-item': goodListItem,
      'v-footer': Footer
    },
    methods: {
      goShopPage: function () {
        router.push('/shoppage/goods');
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    width: 100%;
    background: springgreen;
  }
  
  .index-header {
    width: 100%;
    border-bottom: 1px solid #ddd;
  }
  
  .index-header .top-banner {
    width: 100%;
    height: 150px;
    background-color: yellow;
    position: relative;
  }
  
  .top-banner .now-address {
    height: 28px;
    border-radius: 14px;
    line-height: 28px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 14px;
    color: #fff;
    padding: 0 30px;
  }
  
  .now-address .iconfont {
    font-size: 14px;
    position: absolute;
    line-height: 28px;
  }
  
  .now-address .icon-shouhuodizhi {
    left: 10px;
  }
  
  .now-address .icon-arrow {
    right: 10px;
  }
  
  .nav-bar-list {
    display: flex;
    width: 100%;
    height: 160px;
    background-color: #fff;
    flex-flow: row wrap;
    align-content: flex-start;
    font-size: 12px;
  }
  
  .nav-bar-list .nav-bar-list-item {
    box-sizing: border-box;
    flex: 0 0 25%;
    height: 80px;
    overflow: hidden;
    text-align: center;
  }
  
  .nav-bar-list-item .item-pic {
    display: block;
    width: 40px;
    height:40px;
    margin: 10px auto;
  }
  
  .content {
    width: 100%;
    background-color: #ddd;
  }
  
  .content .good-list-item {
    margin-bottom: 10px;
  }
  
  .content .more {
    text-align: center;
    height: 90px;
    background-color: #f3f3ea;
    margin-top: -10px;
    padding-top: 20px;
  }
  
  .content .content-title {
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #666;
    background-color: #ddd;
    padding: 5px 0;
  }
  
  .content .content-title p {
    padding-left: 20px;
    border-left: 4px solid #fdad3a;
  }

</style>
