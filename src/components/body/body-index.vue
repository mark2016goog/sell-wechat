<template>
  <div class="index">
    <div class="index-content">
      <div>
        <header class="index-header">
          <div class="top-banner">
            <div class="address-box"><span class="iconfont icon-dizhi"></span>{{address}}</div>
            <div class="weather">
              <span class="temperature">{{weather.temperature}}°</span>
              <span class="text">{{weather.description}}</span>
              <img class="weather-icon" :src="weather.image_path"alt="">
            </div>
            <div class="search-box" @click="search"><input type="text" placeholder="搜索商家、商品" readonly></div>
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
          <div>
            <good-list-item v-for="item in goods_data" :key="item.id" :restaurant_info="item" @go="goShopPage"></good-list-item>
          </div>
          <div class="more">
            更多商家接入中，敬请期待！
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import router from '@/router'
  import goodListItem from './good-list-item';
  import Footer from '../footer/index-footer';
  import BScroll from 'better-scroll'
  import axios from 'axios'

  export default {
    name: 'index',
    data() {
      return {
        address: "地址获取中...",
        goods_data: [],
        weather: {
          "temperature": 13,
          "description": "晴夜",
          "image_path": "http://fuss10.elemecdn.com/e/85/614c1229282673bb8609909812e76png.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/"
        }
      };
    },
    components: {
      'good-list-item': goodListItem,
      'v-footer': Footer
    },
    methods: {
      goShopPage: function (id) {
        router.push('/shoppage/' + id + '/goods');
      },
      search: function () {
        router.push('/search');
      }
    },
    created: function () {
      var self = this;
      axios.get('../../../static/restaurant.json', {
        params: {
          longitude: 120.207372,
          latitude: 30.26409,
          offset: 0,
          limit: 10,
        }
      }).then(function (response) {
        self.goods_data = response.data;
        self.$nextTick(function () {
          new BScroll(document.querySelector('.index-content'), {
            click: true,
          });
        });
      });
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .index-content {
    height: 100%;
    overflow: hidden;
  }

  .index-header {
    width: 100%;
    border-bottom: 1px solid #ddd;
    position: relative;
  }

  .index-header .weather {
    position: absolute;
    right: 15px;
    color: #fff;
    font-size: 10px;
    top: 15px;
    padding-right: 26px;
  }

  .index-header .weather span {
    display: block;
  }

  .index-header .weather .weather-icon {
    position: absolute;
    height: 24px;
    width: 24px;
    right: 0;
    top: 0;
  }

  .index-header .top-banner {
    width: 100%;
    height: 120px;
    background-color: rgb(0, 150, 255);
    position: relative;
    padding: 15px;
    box-sizing: border-box;
  }

  .index-header .address-box {
    font-size: 18px;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
    margin-bottom: 20px;
  }

  .address-box .iconfont {
    font-size: 14px;
    color: #fff;
    display: inline-block;
    margin-right: 4px;
  }

  .index-header .search-box {
    height: 40px;
    width: 100%;
    border-radius: 40px;
    background: #fff;
    overflow: hidden;
    padding: 0 40px;
    box-sizing: border-box;
  }

  .index-header .search-box input {
    border: none;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 14px;
    outline: none;
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
    height: 40px;
    margin: 10px auto;
  }

  .content {
    width: 100%;
    background-color: #ddd;
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
