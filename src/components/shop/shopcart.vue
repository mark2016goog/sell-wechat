<template>
  <div class="shopcart">
    <div class="shopcart-content" @click="toggleList">
      <div class="shopcart-totalprice" :class="{'highlight-price':total_count>0}"><span class="iconfont icon-shopcart" :class="{'highlight-cart':total_count>0}"><i class="food-total-count" v-if="total_count">{{total_count}}</i></span>￥{{total_price}}</div>
      <div class="shopcart-send-money"> 另需配送费{{deliveryPrice}}元</div>
      <div class="littleprice" :class="{cansend:total_price>= minPrice}" @click="settlement">{{pay_description}}</div>
    </div>
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-title">
          购物车
          <span class="empty" @click="empty">清空</span>
        </div>
        <div class="shopcart-list-box" ref="listContent">
          <ul>
            <li class="shopcart-list-item" v-for="food in selectFoods">
              <div class="name">{{food.name}}</div>
              <div class="price"><span class="price-icon">￥</span>{{food.price}}</div>
              <div class="cartcontrol-box">
                <v-cartcontrol :food="food"></v-cartcontrol>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" @click="hideList" v-show="listShow"></div>
    </transition>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import cartcontrol from '../shop/cartcontrol'
  import router from '../../router'

  export default {
    name: 'shopcart',
    data() {
      return {
        fold: true,
      }
    },
    props: {
      selectFoods: {
        type: Array,
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    components: {
      'v-cartcontrol': cartcontrol
    },
    methods: {
      empty: function () {
        this.selectFoods.forEach((food) => {
          food.count = 0;
        });
      },
      toggleList: function () {
        if (!this.total_count) {
          return;
        }
        this.fold = !this.fold;
      },
      hideList: function () {
        this.fold = true;
      },
      settlement: function (e) {
        if (this.total_price >= this.minPrice) {
          e.stopPropagation();
          // router.push('/user/loginphonenumber');
          router.push('/comfirmorder');
        }
      }
    },
    computed: {
      total_price() {
        let total = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total;
      },
      total_count() {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      pay_description() {
        if (this.total_price == 0) {
          return `￥${this.minPrice}元起送`;
        } else if (this.total_price < this.minPrice) {
          let diff = this.minPrice - this.total_price;
          return `还差${diff}元起送`;
        } else {
          return '去结算';
        }
      },
      listShow() {
        if (!this.total_count) {
          this.fold = true;
          return false;
        }
        let show = !this.fold;
        if (show) {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.listContent, {
                click: true,
              })
            } else {
              this.scroll.refresh();
            }
          })
        }
        return show;
      }
    }
  }

</script>
<style>
  .shopcart {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 46px;
    line-height: 46px;
    z-index: 50;
  }

  .food-total-count {
    background: #f31515;
    display: inline-block;
    width: 20px;
    height: 12px;
    position: absolute;
    border-radius: 6px;
    color: #fff;
    font-size: 8px;
    line-height: 12px;
    font-weight: normal;
  }

  .shopcart .shopcart-content {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #141d27;
    color: rgba(255, 255, 255, 0.4);
  }

  .shopcart .icon-shopcart {
    position: absolute;
    top: -10px;
    left: 12px;
    display: inline-block;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    background-color: #141d27;
  }

  .shopcart .icon-shopcart:before {
    display: inline-block;
    position: absolute;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.2);
    font-size: 25px;
  }

  .shopcart .highlight-cart {
    color: #fff;
  }

  .shopcart .highlight-cart:before {
    background: rgb(0, 150, 255);
  }

  .shopcart .shopcart-totalprice {
    flex: 0 0 115px;
    width: 115px;
    padding-left: 60px;
    text-align: center;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 700;
    box-sizing: border-box;
  }

  .shopcart .highlight-price {
    color: #fff;
  }

  .shopcart .shopcart-send-money {
    flex: 1;
    font-size: 10px;
    padding-left: 12px;
    margin-left: 12px;
    line-height: 22px;
    height: 22px;
    margin-top: 12px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  .shopcart .littleprice {
    flex: 0 0 110px;
    width: 110px;
    font-size: 12px;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.2);
    text-align: center;
  }

  .shopcart .cansend {
    background: #00b43c;
    color: #fff;
  }

  .shopcart-list {
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: translate3d(0, -100%, 0)
  }

  .fold-enter-active,
  .fold-leave-active {
    transition: all 0.5s;
  }

  .fold-enter,
  .fold-leave-active {
    transform: translate3d(0, 0, 0);
  }

  .shopcart-list .list-title {
    height: 40px;
    background-color: #f3f4f5;
    padding: 0 18px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 200;
    color: rgb(7, 17, 27);
  }

  .shopcart-list .shopcart-list-box {
    max-height: 217px;
    overflow: hidden;
    padding: 0 18px;
  }

  .shopcart-list .list-title .empty {
    font-size: 12px;
    color: rgb(0, 160, 200);
    float: right;
  }

  .shopcart-list .shopcart-list-item {
    line-height: 48px;
    border-bottom: 1px solid #d7d7d7;
    padding: 0 18px;
    display: flex;
    position: relative;
  }

  .shopcart-list .shopcart-list-item .name {
    color: rgb(7, 17, 27);
    flex: 0 0 170px;
    font-size: 14px;
  }

  .shopcart-list .shopcart-list-box .cartcontrol-box {
    flex: 0 0 75px;
  }

  .shopcart-list .shopcart-list-item .price {
    flex: 1;
    color: rgb(240, 20, 20);
    font-size: 14px;
  }

  .shopcart-list .shopcart-list-item .price .price-icon {
    font-size: 10px;
  }

  .cartcontrol-box {
    position: absolute;
    bottom: 12px;
    right: 0;
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 1;
    background: rgba(7, 17, 27, 0.6);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
    background: rgba(7, 17, 27, 0)
  }

</style>
