<template>
  <div class="payonline">
    <v-topbar :title="topbar.title" :is_arrow_show="topbar.is_arrow_show" @back="topBack"></v-topbar>
    <div class="payonline-content">
      <div class="pay-time">
        <p>支付剩余时间</p>
        <div class="time">5：00</div>
        <div class="pay-detail">
          <div class="shop-name">轰伽伽哩饭（仓前路店） 外卖订单</div>
          <div class="detail">
            详情
          </div>
          <div class="total-price">
            ￥33:00
          </div>
        </div>
      </div>
      <div class="pay-method">
        <h2>选择支付方式</h2>
        <div>
          <div class="pay-method-item" @click="alipay">
            <div class="icon iconfont icon-z-alipay">
            </div>
            <div class="name">
              支付宝
            </div>
            <div class="radio iconfont icon-radio" :class="{active:method=='zhifubao'}">
            </div>
          </div>
          <div class="flod-box" v-if="show_more_method">
            <div class="pay-method-item" @click="weixin">
              <div class="icon iconfont icon-weixin-pay">
              </div>
              <div class="name">
                微信支付
              </div>
              <div class="radio iconfont icon-radio" :class="{active:method=='weixin'}">
              </div>
            </div>
            <div class="pay-method-item" @click="yinlian">
              <div class="icon iconfont icon-yinlianzhifu">
              </div>
              <div class="name">
                银联支付
              </div>
              <div class="radio iconfont icon-radio" :class="{active:method=='yinlian'}">
              </div>
            </div>
          </div>
        </div>
        <div class="show-more" @click="showMore">
          查看其它支付方式<i class="iconfont icon-xiasanjiao"></i>
        </div>
      </div>
    </div>
    <div class="bottom-content">
      确认支付
    </div>
  </div>
</template>
<script>
  import router from '../../router'
  import topbar from '../header/header-top-bar'

  export default {
    name: 'payonline',
    data() {
      return {
        topbar: {
          title: '在线支付',
          is_arrow_show: true,
        },
        show_more_method: false,
        method:'zhifubao'
      }
    },
    methods: {
      topBack() {
        router.go(-1);
      },
      showMore: function () {
        this.show_more_method = !this.show_more_method;
      },
      alipay:function(){
        this.method = 'zhifubao';
      },
      weixin:function(){
        this.method = 'weixin';
      },
      yinlian:function(){
        this.method = "yinlian";
      }
    },
    components: {
      'v-topbar': topbar
    }
  }

</script>

<style>
  .payonline {
    height: 100%;
  }

  .payonline .payonline-content {
    padding-top: 45px;
  }

  .payonline .payonline-content .pay-time {
    background: #fff;
    text-align: center;
    padding: 0 10px;
  }

  .payonline .payonline-content .pay-time p {
    font-size: 12px;
    color: #333;
    margin-bottom: 15px;
    padding-top: 15px;
  }

  .payonline-content .pay-time .time {
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }

  .payonline-content .pay-detail {
    height: 40px;
    display: flex;
    line-height: 40px;
  }

  .payonline-content .pay-detail .detail {
    flex: 0 0 30px;
    font-size: 12px;
  }

  .payonline-content .pay-detail .total-price {
    color: #ff6000;
    flex: 0 0 100px;
  }

  .payonline-content .pay-detail .shop-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 10px;
  }

  .payonline-content .pay-method {
    background: #fff;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }

  .payonline-content .pay-method h2 {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
  }

  .payonline-content .pay-method .pay-method-item {
    display: flex;
    height: 60px;
    line-height: 60px;
    margin-left: 10px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }

  .payonline-content .pay-method .pay-method-item .iconfont {
    font-size: 24px;
    flex: 0 0 40px;
  }

  .payonline-content .pay-method .pay-method-item .icon-z-alipay {
    color: #00a1e9;
  }
  .payonline-content .pay-method .pay-method-item .icon-radio{
    color: #ccc;
  }
  .payonline-content .pay-method .pay-method-item .icon-radio.active,
  .payonline-content .pay-method .pay-method-item .icon-weixin-pay {
    color: #00ba61;
  }
  .payonline-content .pay-method .pay-method-item .icon-yinlianzhifu{
    color: rgb(0, 150, 255);
  }
  .payonline-content .pay-method .pay-method-item .name {
    flex: 1;
  }

  .payonline-content .pay-method .show-more {
    height: 40px;
    line-height: 40px;
    color: #ccc;
    text-align: center;
    font-size: 14px;
  }

  .payonline-content .pay-method .show-more .iconfont {
    font-size: 12px;
    display: inline-block;
    margin-left: 10px;
  }
  .payonline .bottom-content {
    position: fixed;
    background: #4cd964;
    bottom: 0;
    left: 0;
    right: 0;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #fff;
  }

</style>
