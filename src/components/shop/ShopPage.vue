<template>
  <div class="shoppage">
    <div class="shoppage-topbanner">
      <div class="shoppage-topbanner-content">
        <div class="shoppage-topbanner-info clearfix">
          <img src="../../common/images/shoppage-topbanner-img.png" alt="" class="brand-img">
          <div class="brand-text">
            <div class="shop-name">
              <span class="shop-name-icon"></span>粥品香坊（大运村）
            </div>
            <p class="shop-send-time">蜂鸟转送 / 38分钟送达</p>
            <div class="shop-activity">
              <span class="shop-activity-icon"></span>在线支付满28减5，满50减10
            </div>
          </div>
        </div>
        <div class="shoppage-notice" @click="showDetail">
          <span class="shop-notice-icon"></span>粥品香坊起烹饪粥料源于中国千年古法，再融合现代制作工艺加工而成，味道鲜美。
          <i class="iconfont icon-arrow"></i>
        </div>
        <div class="shop-activity-number" @click="showDetail">
          5个<i class="iconfont icon-arrow"></i>
        </div>
      </div>
    </div>
    <div class="shoppage-tabbar">
      <router-link class="tab-item" to="/shoppage/goods">商品</router-link>
      <router-link class="tab-item" to="/shoppage/evaluate">评价</router-link>
      <router-link class="tab-item" to="/shoppage/seller">商家</router-link>
    </div>

    <div class="shoppage-detail" v-show="show_detail">
      <div class="detail-main clearfix">
        <div class="detail-content">
          <div class="shop-name">粥品香坊(大运村)</div>
          <div class="star-box">
            <v-star :score="score"></v-star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="title-text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul>
            <li class="activity-item"><span class="icon"></span>在线支付满28减5，满50减10</li>
            <li class="activity-item"><span class="icon"></span>在线支付满28减5，满50减10</li>
            <li class="activity-item"><span class="icon"></span>在线支付满28减5，满50减10</li>
            <li class="activity-item"><span class="icon"></span>在线支付满28减5，满50减10</li>
            <li class="activity-item"><span class="icon"></span>在线支付满28减5，满50减10</li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="title-text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="shop-bulletin">
            <p class="shop-bulletin-text">粥品香坊其烹饪原料源于中国千年古法，再融合现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然0添加良心品质深受消费者青睐，发展至今已成为粥类引领品牌。是2008年奥运会和2013年园博园指定餐饮提供商。</p>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <i class="iconfont icon-close" @click="hideDetail"></i>
      </div>
    </div>

    <div class="shoppage-tabcontent">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Star from '../component/star';
  import Goods from '../shop/goods'
  export default {
    name: 'shoppage',
    data() {
      return {
        show_detail: false,
        score: 4.5
      };
    },
    methods: {
      showDetail: function () {
        this.show_detail = true;
      },
      hideDetail: function () {
        this.show_detail = false;
      }
    },
    components: {
      'v-star': Star,
      'v-goods':Goods
    }
  }

</script>
<style>
  .shoppage {
    position: relative;
    width:100%;
    height:100%;
  }
  
  .shoppage-topbanner {
    position: relative;
    width: 100%;
    background-color: rgba(7, 17, 27, 0.5);
    color: #fff;
    font-weight: normal;
    font-size: 14px;
  }
  
  .shoppage-topbanner::before {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background: url('../../common/images/shoppage-topbanner-img.png') no-repeat center center;
    background-size: cover;
    filter: blur(10px);
    z-index: -1;
  }
  
  .shoppage-topbanner-content {
    position: relative;
  }
  
  .shoppage-topbanner .shoppage-topbanner-info {
    padding-top: 24px;
    padding-bottom: 18px;
  }
  
  .shoppage-topbanner .shoppage-topbanner-info .brand-img {
    width: 64px;
    margin: 0px 16px 0px 24px;
    float: left;
  }
  
  .shoppage-topbanner .shoppage-topbanner-info .brand-text {
    float: left;
  }
  
  .shoppage-topbanner .shoppage-topbanner-info .shop-name {
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
  }
  
  .shoppage-topbanner .shoppage-topbanner-info .shop-name .shop-name-icon {
    height: 18px;
    display: inline-block;
    width: 30px;
    vertical-align: top;
    background: url('../../common/images/brand@2x.png') no-repeat center center;
    background-size: 30px 18px;
    margin-right: 6px;
  }
  .shoppage-topbanner-info .shop-send-time {
    font-size: 12px;
    font-weight: 200;
    line-height: 12px;
    margin: 8px 0;
  }
  
  .shoppage-topbanner-info .shop-activity {
    font-size: 10px;
    font-weight: 200;
    line-height: 12px;
  }
  
  .shoppage-topbanner-info .shop-activity .shop-activity-icon {
    display: inline-block;
    height: 12px;
    width: 12px;
    vertical-align: top;
    background:url('../../common/images/decrease_1@2x.png') no-repeat center center;
    background-size: 12px 12px;
    margin-right: 4px;
  }
  
  .shoppage-notice {
    position: relative;
    padding: 0 22px 0 12px;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 28px;
    background-color: rgba(7, 17, 27, 0.2);
  }
  .shoppage-notice .shop-notice-icon{
    display: inline-block;
    height: 28px;
    width: 22px;
    background: url('../../common/images/bulletin@2x.png') no-repeat center center;
    background-size: 22px 12px;
    vertical-align: top;
    margin-right: 4px;
  }
  
  .shoppage-notice .icon-arrow {
    position: absolute;
    right: 5px;
    font-size: 12px;
  }
  
  .shoppage-notice img {
    height: 12px;
    vertical-align: middle;
  }
  
  .shop-activity-number {
    position: absolute;
    font-size: 10px;
    font-weight: 200;
    height: 24px;
    width: 32px;
    border-radius: 12px;
    line-height: 24px;
    padding: 0 8px;
    background-color: rgba(0, 0, 0, 0.2);
    bottom: 50px;
    right: 12px;
  }
  
  .shop-activity-number i.icon-arrow {
    position: absolute;
    right: 5px;
    font-size: 12px;
    line-height: 24px;
  }
  
  .shoppage-tabbar {
    font-size: 14px;
    width: 100%;
    height: 40px;
    display: flex;
    text-align: center;
    line-height: 40px;
    color: rgb(77, 85, 93);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    box-sizing: border-box;
  }
  
  .shoppage-tabbar .tab-item {
    flex: 1;
    color: rgb(77, 85, 93);
    text-decoration: none;
  }
  
  .shoppage-tabbar .router-link-active {
    color: rgb(240, 20, 20);
  }
  
  .shoppage-detail {
    padding: 0 36px;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index:100;
    top: 0;
    left: 0;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
  }
  
  .shoppage-detail .detail-main {
    min-height: 100%;
    width: 100%;
  }
  
  .shoppage-detail .detail-main .detail-content {
    margin-top: 64px;
    padding-bottom: 64px;
  }
  
  .detail-content .shop-name {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    line-height: 16px;
    text-align: center;
  }
  
  .shoppage-detail .detail-close {
    position: relative;
    margin: -64px auto 0 auto;
    height: 32px;
    width: 32px;
    font-size: 32px;
    clear: both;
    color: rgba(255, 255, 255, 0.5);
  }
  
  .detail-close .icon-close {
    font-size: 32px;
  }
  
  .star-box {
    text-align: center;
    margin: 16px 0 28px 0;
  }
  
  .shoppage-detail .title {
    width: 100%;
    margin: 28px auto 24px auto;
    display: flex;
  }
  
  .shoppage-detail .title .line {
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgba(255, 255, 2555, 0.2);
  }
  
  .shoppage-detail .title .title-text {
    padding: 0 12px;
    font-size: 14px;
    color: #fff;
    font-weight: 700;
    line-height: 14px;
  }
  
  .activity-item {
    font-size: 12px;
    font-weight: 200;
    line-height: 16px;
    color: #fff;
    margin-bottom: 12px;
    margin-left: 12px;
  }
  
  .activity-item .icon {
    display: inline-block;
    height: 16px;
    width: 16px;
    background: url('../../common/images/decrease_1@2x.png') no-repeat center center;
    background-size: 16px 16px;
    vertical-align: top;
    margin-right: 6px;
  }
  .shop-bulletin{
    padding: 0 12px;
    font-size: 12px;
    line-height: 24px;
    font-weight: 200;
    color: #fff;
  }
  .shoppage-tabcontent{
    position:absolute;
    width:100%;
    top:176px;
    bottom:0;
    overflow:hidden;
  }
</style>
