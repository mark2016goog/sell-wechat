<template>
  <div style="background:#fff;">
    <div class="order-list-item">
      <div class="left-content">
        <img src="../../common/images/meishi.png" alt="" class="shop-icon">
      </div>
      <div class="right-content">
        <div class="top-content">
          <div class="shop-name">
            东北饺子馆<span class="iconfont icon-arrow"></span>
            <div class="time">35分钟以前</div>
          </div>
          <div class="order-status">
            订单已完成
          </div>
        </div>
        <div class="center-content">
          <ul class="good-list">
            <li class="good-list-item">
              <div class="text">芹菜肉水饺芹菜肉水饺芹菜肉芹菜肉水饺芹菜肉水饺芹菜肉水饺水饺</div>
              <div class="price">￥33.00</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
        <div class="again-order">
            再来一单
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order-list-item',
    data() {
      return {
        order:{
            image_path:'',
            shop_name:'',
            status:0,
            time:'',
            good_list:[
                {
                    text:'芹菜饺子芹菜饺子芹菜饺子芹菜饺子',
                    price:33.00,
                    number:1
                }
            ]
        }
      };
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .order-list-item {
    display: flex;
    width: 100%;
    overflow: hidden;
    padding: 10px 10px 0;
    background: #fff;
    margin-top: 8px;
    box-sizing: border-box;
  }

  .order-list-item .left-content {
    flex: 0 0 40px;
  }

  .order-list-item .left-content .shop-icon {
    display: inline-block;
    width: 36px;
    text-align: center;
    border-radius: 2px;
  }

  .order-list-item .right-content {
    flex: 1;
    overflow: hidden;
  }

  .order-list-item .right-content .top-content {
    display: flex;
    color: #222;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }

  .order-list-item .right-content .top-content .order-status {
    flex: 0 0 120px;
    font-size: 14px;
    padding-top: 6px;
    text-align: right;
  }

  .order-list-item .right-content .top-content .shop-name {
    flex: 1;
    font-size: 18px;
    padding: 4px 0 10px;
  }

  .order-list-item .right-content .top-content .shop-name .iconfont {
    font-size: 8px;
    display: inline-block;
    height: 18px;
    line-height: 18px;
    vertical-align: top;
    margin-left: 6px;
  }

  .order-list-item .right-content .top-content .shop-name .time {
    font-size: 10px;
    margin-top: 8px;
    color: #999;
  }

  .order-list-item .right-content .center-content {
    padding: 20px 0;
    box-sizing: border-box;
    width: 100%;
  }

  .order-list-item .right-content .center-content .good-list-item {
    display: flex;
    font-size: 14px;
    color: #666;
    width: 100%;
  }

  .order-list-item .right-content .center-content .good-list-item .text {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 10px;
  }

  .order-list-item .right-content .center-content .good-list-item .price {
    font-weight: bolder;
    color: #222;
  }
  .bottom{
      height: 50px;
      line-height: 50px;
      border-top: 1px solid rgba(7, 17, 27, 0.1);
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      text-align: right;
      padding-right: 10px;
  }
  .bottom .again-order{
      display: inline-block;
      height: 30px;
      border: 1px solid rgb(0, 150, 255);
      line-height: 30px;
      padding: 0 10px;
      border-radius: 3px;
      color: rgb(0, 150, 255);   
  }
</style>
