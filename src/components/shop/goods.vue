<template>
  <div class="goods">
    <div class="goods-content">
      <div class="goods-left-side" ref="menuWrapper">
        <ul class="goods-left-side-list">
          <li class="goods-left-side-list-item" :class="{'on':index == currentIndex}" v-for="(item,index) in goods" @click="selectMenu(index,$event)"><span class="text"><span class="icon"></span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="goods-right-content" ref="foodsWrapper">
        <ul>
          <li v-for="item in goods" ref="foodList">
            <h2 class="goods-item-list-title">{{item.name}}</h2>
            <ul class="goods-item-list-content">
              <li v-for="food in item.foods">
                <div class="item-icon"><img :src="food.icon" alt=""></div>
                <div class="item-description">
                  <h3 class="item-title">{{food.name}}</h3>
                  <div class="item-name">{{food.description}}</div>
                  <div class="sell-number"><span class="">月售{{food.sellCount}}份</span><span class="good-evaluation-rate
">好评率{{food.rating}}%</span></div>
                  <div class="price"><span class="now"><i>￥</i>{{food.price}}</span><span class="old" v-show="food.oldPrice"><i>￥</i>{{food.oldPrice}}</span></div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="goods-shopcart">
      <div class="shopcart-totalprice"><span class="iconfont icon-shopcart"></span>￥{{total_price}}</div>
      <div class="shopcart-send-money"> 另需配送费￥4元</div>
      <div class="littleprice" :class="{cansend:total_price >= 20}">{{littleprice}}</div>
    </div>
  </div>
</template>
<script>
  import GoodsListItem from '../component/goods-item-list'
  import BScroll from 'better-scroll'
  import axios from 'axios'
  export default {
    name: 'goods',
    data() {
      return {
        total_price: 30,
        goods: [],
        listHeight:[],
        scrollY:0,
      }
    },
    computed: {
      littleprice() {
        return this.total_price > 20 ? '去结算' : '￥20起送';
      },
      currentIndex(){
        for(let i = 0;i < this.listHeight.length;i++){
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i+1];

          if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
            return i;
          }
        }
        return 0;
      }
    },
    methods: {
      selectMenu(index, event) {
        if (!event._constructed) {
          return;
        }
        let foodList = this.$refs.foodList;
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
      },
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3
        });
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        })
      },
      _calculateHeight() {
        let foodList = this.$refs.foodList;
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      }
    },
    components: {
      'v-goodlistitem': GoodsListItem
    },
    created() {
      let self = this;
      axios.get('../../../static/data.json').then(function (response) {
        self.goods = response.data.goods;
        self.$nextTick(function() {
          self._initScroll();
          self._calculateHeight();
        });
      }).catch(function (error) {
        console.log('请求出错了');
      });
    }
  }

</script>
<style>
  .goods-content {
    position: absolute;
    top: 0px;
    bottom: 46px;
    display: flex;
    width: 100%;
    overflow: hidden;
  }
  
  .goods-left-side {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
  }
  
  .goods-left-side-list-item {
    display: table;
    height: 54px;
    width: 56px;
    padding: 0 12px;
    font-size: 0;
    line-height: 14px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  
  .goods-left-side-list-item.on {
    background: #fff;
  }
  
  .goods-left-side-list-item .icon {
    display: inline-block;
    height: 14px;
    width: 14px;
    background: url('../../common/images/decrease_1@2x.png') no-repeat center center;
    background-size: 14px 14px;
    vertical-align: top;
    margin-right: 2px;
  }
  
  .goods-left-side-list-item .text {
    display: table-cell;
    width: 56px;
    font-size: 12px;
    font-weight: 200;
    vertical-align: middle;
  }
  
  .goods-right-content {
    flex: 1;
  }
  
  .goods-shopcart {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 46px;
    line-height: 46px;
    background-color: #141d27;
    color: rgba(255, 255, 255, 0.4);
  }
  
  .goods-shopcart .icon-shopcart {
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
  
  .goods-shopcart .icon-shopcart:before {
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
  
  .goods-shopcart .shopcart-totalprice {
    flex: 0 0 115px;
    width: 115px;
    padding-left: 60px;
    text-align: center;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 700;
    box-sizing: border-box;
  }
  
  .goods-shopcart .shopcart-send-money {
    flex: 1;
    font-size: 10px;
    padding-left: 12px;
    margin-left: 12px;
    line-height: 22px;
    height: 22px;
    margin-top: 12px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .goods-shopcart .littleprice {
    flex: 0 0 110px;
    width: 110px;
    font-size: 12px;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.2);
    text-align: center;
  }
  
  .goods-shopcart .cansend {
    background: #00b43c;
    color: #fff;
  }

</style>
