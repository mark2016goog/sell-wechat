<template>
  <div class="goodsitemlist">
    <h2 class="goods-item-list-title">单人特色套餐</h2>
    <ul class="goods-item-list-content">
      <li>
        <div class="item-icon"><img src="../../common/images/shoppage-topbanner-img.png" alt=""></div>
        <div class="item-description">
          <h3 class="item-title">皮蛋瘦肉粥配包子套餐</h3>
          <div class="item-name">咸粥</div>
          <div class="sell-number"><span class="">月售1132份</span><span class="good-evaluation-rate
">好评率100%</span></div>
          <div class="price"><span class="now"><i>￥</i>24</span><span class="old"><i>￥</i>28</span></div>
        </div>
      </li>
      <li>
        <div class="item-icon"><img src="../../common/images/shoppage-topbanner-img.png" alt=""></div>
        <div class="item-description">
          <h3 class="item-title">皮蛋瘦肉粥配包子套餐</h3>
          <div class="item-name">咸粥</div>
          <div class="sell-number"><span class="">月售1132份</span><span class="good-evaluation-rate
">好评率100%</span></div>
          <div class="price"><span class="now"><i>￥</i>24</span><span class="old"><i>￥</i>28</span></div>
        </div>
      </li>
      <li>
        <div class="item-icon"><img src="../../common/images/shoppage-topbanner-img.png" alt=""></div>
        <div class="item-description">
          <h3 class="item-title">皮蛋瘦肉粥配包子套餐</h3>
           <div class="item-name">咸粥</div>
          <div class="sell-number"><span class="">月售1132份</span><span class="good-evaluation-rate
">好评率100%</span></div>
          <div class="price"><span class="now"><i>￥</i>24</span><span class="old"><i>￥</i>28</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'goodsitemlist',
  }

</script>
<style>
  .goods-item-list-title {
    height: 26px;
    line-height: 26px;
    background-color: #f3f5f7;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    padding-left: 14px;
  }
  
  .goods-item-list-content{
    padding: 0 18px;
  }
  
  .goods-item-list-content li{
     box-sizing:border-box;
     display:flex;
     margin:18px 0;
     padding-bottom:18px;
     border-bottom:1px solid rgba(7,17,27,0.1);
  }
  .goods-item-list-content li:first-child{
    border-bottom:none;
  }
  .goods-item-list-content .item-icon{
    flex: 0 0 60px;
    width:60px;
    overflow:hidden;
    height:60px;
    border-radius:4px;
    margin-right:10px;
  }
  .goods-item-list-content .item-icon img{
    height:60px;
    width:60px;
  }
  .goods-item-list-content .item-description{
    flex:1;
  }
  .goods-item-list-content .item-description .item-title{
    margin-top:2px; 
    font-size:14px;
    line-height:14px;
    color:rgb(7,17,27);
  }
  .goods-item-list-content .item-description .item-name{
    font-size:10px;
    color:rgb(147,153,159);
    line-height:10px;
    margin:8px 0;
  }
  .goods-item-list-content .item-description .price{
    font-size:10px;
    color:rgb(240,20,20);
    font-weight:normal;
    line-height:24px;
  }
  .goods-item-list-content .item-description .price .now{
    display:inline-block;
    font-size:14px;
    font-weight:700;
    vertical-align:middle;
  }
  .goods-item-list-content .item-description .price .now i{
    font-size:10px;
    font-weight:normal;
  }
  .goods-item-list-content .item-description .price .old{
    display:inline-block;
    font-size:10px;
    color:rgb(147,153,159);
    font-weight:700;
    text-decoration:line-through;
  }

  .goods-item-list-content .item-description .sell-number{
    font-size:10px;
    color:rgb(147,153,159);
    margin-top:8px;
    line-height:10px;
    margin-bottom:4px;
  }
</style>
