<template>
  <div class="seller">
    <div class="seller-top">
      <div class="seller-name">
        粥品香坊（大运村）
      </div>
      <div class="star-sell-num">
        <v-star :score="4.0" :size ="star.size"></v-star><span class="sell-count">月售690单</span>
      </div>
      <div class="sell-detail">
        <div class="can-send">
          <span>起送价</span>
          <p>20<span class="small-font">元</span></p>
        </div>
        <div class="sell-send">
          <span>商家配送</span>
          <p>4<span class="small-font">元</span></p>
        </div>
        <div class="send-time">
          <span>平均配送时间</span>
          <p>20<span class="small-font">分钟</span></p>
        </div>
      </div>
    </div>
    <div class="notice-activity">
      <h2 class="title">公告与活动</h2>
      <p>粥品香坊其烹饪原料源于中国千年古法，再融合现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然0添加良心品质深受消费者青睐，发展至今已成为粥类引领品牌。是2008年奥运会和2013年园博园指定餐饮提供商。</p>
      <ul>
        <li><span class="activity-item"><span class="icon"></span>在线支付满28，减5</span></li>
        <li><span class="activity-item"><span class="icon"></span>在线支付满28，减5</span></li>
        <li><span class="activity-item"><span class="icon"></span>在线支付满28，减5</span></li>
        <li><span class="activity-item"><span class="icon"></span>在线支付满28，减5</span></li>
        <li><span class="activity-item"><span class="icon"></span>在线支付满28，减5</span></li>
      </ul>
    </div>
    <div class="seller-infomation">
      <h2 class="title">商家信息</h2>
      <ul>
        <li>该商家支持开发票，请在下单时写好发票抬头</li>
        <li>该商家支持开发票，请在下单时写好发票抬头</li>
        <li>该商家支持开发票，请在下单时写好发票抬头</li>
        <li>该商家支持开发票，请在下单时写好发票抬头</li>
        <li>该商家支持开发票，请在下单时写好发票抬头</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Star from '../component/star'
  export default {
    name: 'seller',
    data() {
      return {
        star:{
          size:'36'
        }
      }
    },
    components: {
      'v-star': Star
    }
  }

</script>

<style>
  .seller{
    position: absolute;
    top: 0;
    bottom: 0;
    background:#f3f5f7;
    overflow: auto;
  }
  .seller .seller-top{
    background-color: #fff;
    padding: 18px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  
  .seller .seller-name {
    font-size: 14px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    margin-bottom: 8px;
  }
  
  .seller .star-sell-num {
    font-size: 0;
    color: rgb(77, 85, 93);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    padding-bottom: 18px;
  }
  .star-sell-num .star{
    display: inline-block;
    vertical-align: top;
  }
  .seller .star-sell-num .sell-count {
    vertical-align: top;
    display: inline-block;
    line-height: 18px;
    font-size: 10px;
    margin-left: 20px;
  }
  
  .sell-detail {
    display: flex;
    padding-top: 18px;
    width: 100%;
    text-align: center;
  }
  
  .sell-detail span {
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  
  .sell-detail p {
    margin-top: 4px;
    font-size: 20px;
    color: rgb(7, 17, 27);
    line-height: 24px;
    font-weight: 200;
  }
  
  .sell-detail p span.small-font {
    color: rgb(7, 17, 27);
  }
  
  .sell-detail .can-send {
    flex: 1;
  }
  
  .sell-detail .sell-send {
    flex: 1;
    border-left: 1px solid rgba(7, 17, 27, 0.1);
  }
  
  .sell-detail .send-time {
    flex: 1;
    border-left: 1px solid rgba(7, 17, 27, 0.1);
  }
  
  .seller .notice-activity {
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    margin: 18px 0;
    padding: 18px;
    background-color: #fff;
  }
  .seller .notice-activity .title{
    font-size: 14px;
    color: rgb(7, 17, 27);
    margin-bottom: 8px;
  }
  .seller .notice-activity p{
    font-size: 10px;
    font-weight: 200;
    color: rgb(240, 20, 220);
    line-height: 24px;
    padding-left: 12px;
  }
  .seller .notice-activity ul li{
    padding: 16px 12px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
  }
  .seller .notice-activity .activity-item{
    display: inline-block;
    height: 16px;
    width:100%;
    line-height: 16px;
    font-size: 12px;
    font-weight: 200;
    color: rgb(7, 17, 27);
    margin: 0;
  }
  .seller .notice-activity .activity-item .icon{
    display: inline-block;
    height: 16px;
    width: 16px;
    background: url('../../common/images/decrease_1@2x.png') no-repeat center center;
    background-size: 16px 16px;
  }
  .seller-infomation{
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    background: #fff;
    padding: 18px;
    margin-bottom: 50px;
  }
  .seller-infomation .title{
    font-size: 14px;
    color: rgb(7, 17, 27);
    margin-bottom: 8px;
  }
  .seller-infomation ul li{
    padding: 16px 12px;
    font-size: 12px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
  }
  .seller-infomation ul li:last-child{
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
</style>
