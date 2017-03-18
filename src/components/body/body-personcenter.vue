<template>
  <div class="personcenter">
    <v-topbar></v-topbar>
    <div class="container">
      <div class="account">
        {{username}}
        <i class="iconfont icon-arrow"></i>
      </div>
      <ul class="details">
        <li class="details-item"><i class="iconfont icon-shouhuodizhi"></i>收货地址管理<i class="iconfont icon-arrow"></i></li>
         <li class="details-item"><i class="iconfont icon-daijinquan"></i>商家代金券<i class="iconfont icon-arrow"></i></li>
          <li class="details-item"><i class="iconfont icon-yijianfankui"></i>意见反馈<i class="iconfont icon-arrow"></i></li>
           <li class="details-item"><i class="iconfont icon-changjianwenti"></i>常见问题<i class="iconfont icon-arrow"></i></li>
            <li class="details-item"><i class="iconfont icon-kefudianhua"></i>客服电话<i class="iconfont icon-arrow"></i></li>   
      </ul>
      <div class="quit-btn">退出登录</div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import HeaderTopBar from '../header/header-top-bar';
import Footer from '../footer/index-footer';

export default {
  name: 'personcenter',
  data () {
    return {
      title: '个人中心',
      username: 'rzn937789897'
    };
  },
  components: {
    'v-topbar': HeaderTopBar,
    'v-footer':Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .personcenter {
    width: 100%;
  }
  .container{
    margin-top: 40px;
     background-color:#fff;
  }
  .account{
    height: 50px;
    font-size: 16px;
    line-height: 45px;
    padding:0 15px;
    position: relative;
  }
  .account .icon-arrow{
    font-size: 20px;
    display: inline-block;
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -25px;
  }
  .personcenter .details{
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 0 15px;
  }
  .personcenter .details .details-item{
    position: relative;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
  }
  .personcenter .details .details-item:last-child{
    border: none;
  }

  .personcenter .details .details-item .iconfont{
    font-size: 16px;
    padding:0 5px;
  }
  .personcenter .details .details-item .icon-arrow{
    padding: 0;
    font-size: 20px;
    display: inline-block;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -20px;
  }
  .personcenter .quit-btn{
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid orangered;
    color: orangered;
    border-radius: 3px;
    margin: 20px 10px 0;
  }
</style>
