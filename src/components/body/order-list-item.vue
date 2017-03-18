<template>
  <div class="order-list-item ">
   <h2 class="order-list-item-title">嘉鑫大碗牛肉面<i class="iconfont icon-arrow"></i><span class="order-status">订单完成</span></h2>
   <div class="order-list-item-content clearfix">
       <img src="../../common/images/order-icon.png" alt="" class="order-icon">
       <div class="order-list-item-content-right">
           <div class="price">￥<span class="order-price">23</span></div>
           <div class="order-time">2017-01-19 11:57</div>
           <div class="send-service">由 商家 提供配送服务</div>
           <i class="iconfont icon-arrow"></i>
       </div>
   </div>
   <div class="bottom-btn">
       <span class="other-one">再来一单</span>
   </div>
  </div>
</template>

<script>
export default {
  name: 'order-list-item',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .order-list-item{
        margin-bottom: 15px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        background: #fff;
    }
    .order-list-item .order-list-item-title{
        padding: 0 10px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid #ccc;
    }
    .order-list-item-title .iconfont,.order-list-item-title .order-status{
        font-weight: normal;
    }
    .order-list-item-title .order-status{
        font-size: 14px;
        color: #666;
        float: right;
    }
    .order-list-item-content{
        padding: 10px;
    }
    .order-list-item-content-right {
       margin-left: 130px;
       position: relative;
    }
    .order-list-item-content-right .price{
        color: #ff0000;
        font-size: 20px;
        line-height: 30px;
    }
    .order-list-item-content-right .order-time,.order-list-item-content-right .send-service{
        font-size: 16px;
        line-height: 24px;
    }
    .order-list-item-content-right .icon-arrow{
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -10px;
        font-size: 20px;
    }
    .order-list-item-content .order-icon{
        width: 120px;
        height: 80px;
        float: left;
    }
    .bottom-btn{
        border-top: 1px solid #ccc;
        height: 50px;   
        line-height: 50px;
        text-align: right;
        padding-right: 10px;
    }
    .bottom-btn .other-one{
        display: inline-block;
        height: 36px;
        padding: 0 15px;
        line-height: 36px;
        border-radius: 4px;
        border: 1px solid #ccc;
        color: #666;
        font-size: 14px;

    }
</style>
