<template>
  <div class="evaluateitem">
    <div class="left-content">
      <img src="../../common/images/user-icon.jpg" alt="">
    </div>
    <div class="right-content">
      <div class="top-content">
        <div class="user-date-box"><span class="user-name">让风消亡</span><span class="evaluate-date">2017-03-6 21:45</span></div>
        <div class="star-time-box">
          <v-star score="4.0"></v-star><span class="spend-time">80分钟送达</span></div>
      </div>
      <div class="center-content">
        油条凉了，而且没有酱。75分钟才到。很慢。送餐员态度不错，但毕竟好晚了啊。
      </div>
      <div class="bottom-content">
        <span class="goods-label">西红柿鸡蛋面</span>
        <span class="goods-label">次坞打面大碗</span>
        <span class="goods-label">次坞打面大碗</span>
        <span class="goods-label">次坞打面大碗</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Star from '../component/star'

  export default {
    name: 'evaluateitem',
    components: {
      'v-star': Star
    }
  }

</script>
<style>
  .evaluateitem {
    display: flex;
    padding: 18px 0;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  
  .evaluateitem .left-content {
    flex: 0 0 28px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 12px;
    overflow: hidden;
  }
  
  .evaluateitem .left-content img {
    display: inline-block;
    height: 28px;
    width: 28px;
    border-radius: 50%;
  }
  
  .evaluateitem .right-content {
    flex: 1;
  }
  
  .evaluateitem .right-content .top-content {
    font-size: 10px;
    line-height: 12px;
    color: rgb(147, 153, 159);
  }
  
  .evaluateitem .right-content .top-content .user-name {
    color: rgb(7, 17, 27);
  }
  
  .evaluateitem .right-content .top-content .evaluate-date {
    font-weight: 200;
    float: right;
  }
  .evaluateitem .right-content .top-content .star-time-box{
    height: 12px;
    line-height: 12px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
  .evaluateitem .right-content .top-content .spend-time{
    font-size:10px;
    line-height: 12px;
    height: 12px;
    color: rgb(147, 153, 159);
    font-weight: 200;
  }
  .evaluateitem .right-content .top-content .star{
    display:inline-block;
    vertical-align:top;
  }
  .evaluateitem .right-content .top-content .star span{
    width: 12px;
    height: 12px;
    margin-right: 4px;
    display: inline-block;
    font-size: 12px;
  }
  .evaluateitem .right-content .top-content .star span.on{
    background: url('../../common/images/star24_on@2x.png') no-repeat center center;
    background-size: 12px 12px;
  }
  .evaluateitem .right-content .top-content .star span.half{
    background: url('../../common/images/star24_half@2x.png') no-repeat center center;
    background-size: 12px 12px;
  }
  .evaluateitem .right-content .top-content .star span.off{
    background: url('../../common/images/star24_off@2x.png') no-repeat center center;
    background-size: 12px 12px;
  }
  .evaluateitem .center-content{
    font-size: 12px;
    color: rgb(7, 17, 27);
    line-height: 18px;
    margin-bottom: 8px;
  }
  .evaluateitem .bottom-content{
    font-size: 0px;
    color: rgb(183,187,193);
    line-height: 16px;
  }
  .evaluateitem .bottom-content .goods-label{
    display: inline-block;
    font-size: 12px;
    background-color: rgb(255, 255, 255);
    border-radius: 2px;
    border: 1px solid rgba(7, 17, 27, 0.1);
    padding: 0 6px;
    margin-right: 8px;
    width: 90px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space:nowrap; overflow:hidden;
  }
</style>
