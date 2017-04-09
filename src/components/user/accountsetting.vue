<template>
  <div class="accountsetting">
    <v-topbar :title="topbar.title" :is_arrow_show="topbar.is_arrow_show" @back="topBack"></v-topbar>
    <div class="account-content">
      <div class="person-icon">
        <span class="title">头像</span>
        <img src="../../common/images/user-icon.jpg" alt="头像">
      </div>
      <div class="username">
        <span class="title">用户名</span>
      </div>
      <div class="setpassword">
        <h2 >设置密码</h2>
        <div class="password">
          <span class="title">登录密码</span>
          <span class="setting" @click="setPassword">未设置</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import router from '../../router'
  import topbar from '../header/header-top-bar'

  export default {
    name: 'accountsetting',
    data() {
      return {
        topbar: {
          title: '账户设置',
          is_arrow_show: true,
        }
      };
    },
    components: {
      'v-topbar': topbar
    },
    methods: {
      topBack: function () {
        router.go(-1);
      },
      setPassword:function(){
        router.push('/user/setpassword');
      }
    }
  }

</script>

<style scoped>
  .accountsetting {
    background-color: #f5f5f5;
    height: 100%;
  }

  .account-content {
    padding-top: 45px;
  }

  .account-content .person-icon {
    margin-top: 10px;
    background: #fff;
    height: 70px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    line-height: 70px;
    position: relative;
    padding-left: 10px;
  }

  .account-content .person-icon .title {
    display: inline-block;
    vertical-align: top;
  }

  .account-content .person-icon img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .account-content .username{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    background: #fff;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .account-content .username .title{
    display: inline-block;
  }

  .setpassword{
    margin-top: 10px;
    background: #fff;
  }
  .setpassword h2{
    height: 40px;
    line-height: 40px;
    color: #ccc;
    font-size: 14px;
    padding-left:10px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
  }
  .setpassword .password{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .setpassword .password span{
    display: inline-block;
  }
  .setpassword .password .setting{
    float: right;
    color: rgb(0, 150, 255);
  }
</style>
