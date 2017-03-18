<template>
  <div class="evaluate">
    <div class="evaluate-content">
    <div class="top-score">
      <div class="left-content">
        <span class="score">3.9</span>
        <span class="total-evaluate">综合评价</span>
        <span class="high-rate">高于周边商家76.7%</span>
      </div>
      <div class="right-content">
        <div class="service"><span class="title">服务态度</span><v-star :score="service_score"></v-star><span class="score">{{service_score}}</span></div>
        <div class="goods-evaluate"><span class="title">菜品评价</span><v-star :score="goods_score"></v-star><span class="score" v-text="goods_score"></span></div>
        <div class="send-time"><span class="title">送达时间</span><span class="time">39分钟</span></div>
      </div>
    </div>
    <div class="evaluate-bottom">
      <div class="evaluate-bottom-label">
        <span class="label-item all">全部<span class="number">57</span></span>
        <span class="label-item satisfaction">满意<span class="number">10</span></span>
        <span class="label-item dissatisfaction">不满意<span class="number">4</span></span>
      </div>
      <div class="evaluate-bottom-content">
        <v-evaluateitem></v-evaluateitem>
        <v-evaluateitem></v-evaluateitem>
        <v-evaluateitem></v-evaluateitem>
        <v-evaluateitem></v-evaluateitem>
        <v-evaluateitem></v-evaluateitem>
        <v-evaluateitem></v-evaluateitem>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import Star from '../component/star'
  import EvaluateItem from '../component/evaluate-item'
  export default{
    name:'evaluate',
    data(){
      return {
        service_score:'3.9',
        goods_score:'4.0'
      }
    },
    components:{
      'v-star':Star,
      'v-evaluateitem':EvaluateItem
    }
  }
</script>
<style>
  .evaluate{
    position: absolute;
    top: 0;
    bottom: 0;
    background:#f3f5f7;
    overflow: auto;
  }
  .top-score{
    padding:18px 0;
    display:flex;
    border-bottom:1px solid rgba(7,17,27,0.1);
    margin-bottom:18px;
    background:#fff;
  }
  .top-score .left-content{
    flex:0 0 135px;
    width:135px;
    text-align:center;
  }
  .top-score .left-content .score{
    font-size:24px;
    color:rgb(255,153,0);
    line-height:28px;
    display:block;
    margin-bottom:6px;
  }
  .top-score .left-content .total-evaluate{
    display:block;
    font-size:12px;
    line-height:12px;
    color:rgb(7,17,27);
    margin-bottom:8px;
  }
  .top-score .left-content .high-rate{
    font-size:10px;
    line-height:10px;
    color:rgb(147,153,159);
  }
  .top-score .right-content{
    flex:1;
    border-left:1px solid rgba(7,17,27,0.1);
    padding:0 24px;
  }
  .top-score .right-content .service,.top-score .right-content .goods-evaluate,.top-score .right-content .send-time{
    font-size:12px;
    line-height:18px;
    color:rgb(7,17,27);
    margin-bottom:8px;
  }
  .top-score .right-content .title{
    display:inline-block;
    margin-right:12px;
  }
  .top-score .right-content .score{
    display: inline-block;
    font-size:12px;
    line-height:18px;
    color:rgb(255,153,0);
  }
  .top-score .right-content .send-time{
    margin-bottom:0;
  }
  .top-score .right-content .send-time .time{
    color:rgb(147,153,159);
  }
  .evaluate .star{
    display:inline-block;
    vertical-align:top;
    height: 18px;
  }
  .evaluate .star span{
    width: 18px;
    height: 18px;
    margin-right: 4px;
    display: inline-block;
    font-size: 12px;
  }
  .star span.on{
    background: url('../../common/images/star24_on@2x.png') no-repeat center center;
    background-size: 18px 18px;
  }
  .star span.half{
    background: url('../../common/images/star24_half@2x.png') no-repeat center center;
    background-size: 18px 18px;
  }
  .star span.off{
    background: url('../../common/images/star24_off@2x.png') no-repeat center center;
    background-size: 18px 18px;
  }
  .evaluate-bottom{
    padding:18px;
    border-top:1px solid rgba(7,17,27,0.1);
    background:#fff;`
    border-bottom:1px solid rgba(7,17,27,0.1);
  }
  .evaluate-bottom-label{
    font-size:0;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .evaluate-bottom-label .label-item{
    display:inline-block;
    line-height:32px;
    padding:0 12px;
    font-size:12px;
    border-radius:2px;
    margin-left:8px;  
  }
  .evaluate-bottom-label .label-item .number{
    font-size:8px;
    padding-left:4px;
  }
  .evaluate-bottom-label .all{
    background:rgb(0,160,220);
    color:#fff;
  }
  .evaluate-bottom-label .satisfaction{
    background:rgba(0,160,220,0.2);
    color:rgb(77,85,93);
  }
   .evaluate-bottom-label .dissatisfaction{
    background:rgba(77,85,93,0.2);
    color:#5b6269;
  }
</style>
