<template>
  <div class="addaddress">
    <v-topbar :title="topbar.title" :is_arrow_show="topbar.is_arrow_show" @back="topBack"></v-topbar>
    <div class="addaddress-content">
      <div class="input-box">
        <div class="title">联系人</div>
        <div class="left-content">
          <input type="text" placeholder="姓名" v-model="name" >
          <label for="man" :class="{active:sex =='先生'}">先生</label><input type="radio" id="man" value="先生" v-model="sex" ><label for="woman" :class="{active:sex =='女士'}">女士</label><input type="radio" id="woman"value="女士" v-model="sex" >
        </div>
      </div>
      <div class="input-box">
        <div class="title">收货人电话</div>
        <div class="left-content">
          <input type="text" placeholder="收货人电话" v-model="phonenumber" style="border:none;">
        </div>
      </div>
      <div class="input-box">
        <div class="title">地址</div>
        <div class="left-content">
          <input type="text" placeholder="小区/写字楼/学校等" v-model="block">
          <input type="text" placeholder="详细地址" v-model="detail_address"  style="border:none;">
        </div>
      </div>
      <div class="input-box">
        <div class="title">门牌号</div>
        <div class="left-content">
          <input type="text" placeholder="例：5号楼203室" v-model="doornumber"  style="border:none;">
        </div>
      </div>
      <div class="input-box" >
        <div class="title">标签</div>
        <div class="left-content">
          <label for="home":class="{active:label =='家'}">家</label><input type="radio" id="home" value="家" v-model="label"><label for="company" :class="{active:label =='公司'}">公司</label><input type="radio" value="公司" v-model="label" id="company"><label for="school" :class="{active:label =='学校'}">学校</label><input type="radio" value="学校" v-model="label" id="school">
        </div>
      </div>
      <div style="width:100%;padding:0 10px;box-sizing:border-box;margin-top:10px;"> 
        <button type="button" class="btn" @click="login">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
  import router from '../../router'
  import topbar from '../header/header-top-bar'

  export default{
    name:'addaddress',
    data(){
      return{
        topbar:{
          title:'新增地址',
          is_arrow_show:true
        },
        sex:'',
        name:'',
        phonenumber:'',
        label:'',
        block:'',
        detail_address:'',
        doornumber:''
      };
    },
    methods:{
      topBack:function(){
        router.go(-1);
      }
    },
    components:{
      'v-topbar':topbar
    }
  }
</script>
<style>
  .addaddress{
    height: 100%;
  }
  .addaddress-content{
    padding-top: 45px;
  }
  .addaddress-content .input-box:first-child{
    margin-top: 10px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
  }
  .addaddress-content .input-box{
    background: #fff;
    display: flex;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    padding: 0 10px;
  }
  .addaddress-content .title{
    flex: 0 0 100px;
    height: 40px;
    line-height: 40px;
  }
  .addaddress-content .left-content{
    flex: 1;  
  }
  .addaddress-content .left-content input[type=text]{
    display: block;
    height: 40px;
    border: none;
    line-height: 40px;
    padding: 0;
    outline: none;
    width: 100%;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .addaddress-content .left-content input[type=radio]{
    display: none;
  }
  .addaddress-content .left-content label{
    display: inline-block;
    padding: 5px 0;
    width: 60px;
    text-align: center;
    border: 1px solid rgba(7, 17, 27, 0.1);
    margin: 6px 0;
    color: #333;
    border-radius: 2px;
    margin-right: 10px;
  }
  .addaddress-content .left-content label.active{
    color: rgb(0, 150, 255);
    border: 1px solid rgb(0, 150, 255);
  }
  .btn{
    height: 40px;
    border: none;
    width: 100%;
    background: #4cd964;
    font-size: 16px;
    color: #fff;
    box-sizing: border-box;
    display: block;
    border-radius: 4px;
    outline: none;
  }
</style>