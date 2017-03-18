<template>
  <div class="good-list-item" @click="routerTo">
    <div class="good-list-item-left">
      <img src="../../common/images/meishi.png" alt="商家图片" class="goods-pic">
    </div>
    <div class="good-list-item-right">
      <div class="main">
        <h2 class="good-name">吉野家（北京站店）<span class="distance">1.2km</span></h2>
        <div class="score"><span class="sell-number">月售 1378 单</span><span class="send-time">29分钟</span></div>
        <div class="send-detail"><span class="send-price">起送价￥30</span><span class="send-money">配送费￥10</span></div>
      </div>
      <div class="discount">
        <p class="discount-item"><img src="../../common/images/decrease_3@2x.png" alt="" class="discount-icon">满30减10；满50减18；满80减28</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Star from '../component/star'
  export default {
    name: 'good-list-item',
    data() {
      return {
        score: 4
      };
    },
    methods: {
      routerTo: function () {
        this.$emit('go');
      }
    },
    components: {
      'v-star': Star
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .good-list-item {
    width: 100%;
    background-color: #fff;
    display: flex;
  }
  .good-list-item .good-list-item-left {
    margin-top: 8px;
    flex: 0 0 70px;
    padding:0 8px;
  }
  
  .good-list-item .good-list-item-right {
    flex: 1;
  }
  
  .good-list-item .good-list-item-right .main {
    padding-right: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 6px;
  }
  
  .good-list-item .good-list-item-right .good-name {
    font-size: 16px;
    line-height: 32px;
  }
  
  .good-list-item .good-list-item-right .good-name .distance {
    font-size: 12px;
    float: right;
  }
  
  .good-list-item-right .score {
    font-size: 12px;
    padding: 0 0px 8px;
  }
  
  .good-list-item-right .score .sell-number {
    padding-left: 10px;
  }
  
  .good-list-item-right .score .send-time {
    float: right;
  }
  
  .good-list-item-right .send-detail {
    font-size: 14px;
  }
  
  .good-list-item-right .send-detail .send-price {
    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid #ccc;
  }
  
  .good-list-item .goods-pic {
    width: 60px;
    height: 60px;
    border-radius: 2px;
  }
  
  .discount .discount-item {
    font-size: 12px;
    line-height: 24px;
  }
  
  .discount .discount-item .discount-icon {
    width: 12px;
  }

</style>
