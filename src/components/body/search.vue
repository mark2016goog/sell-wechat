<template>
  <div class="search">
    <v-topbar :title="topbar.title" :is_arrow_show="topbar.is_arrow_show" @back="topBack"></v-topbar>
    <div class="search_content" style="padding-top:44px;">
      <div class="search-box"><input type="text" placeholder="搜索商家、商品名称"></div>
      <div class="list-content">
        
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../../router'
  import axios from 'axios';
  import topbar from '../header/header-top-bar'
  import BScroll from 'better-scroll'

  export default{
    name:'search',
    data(){
      return {
        search_data:[],
        topbar:{
          title:'小迪外卖',
          is_arrow_show:true,
        }
      }
    },
    components:{
      'v-topbar':topbar
    },
    methods:{
      topBack:function(){
        router.go(-1);
      }
    }
  }
</script>

<style scoped>
  .search-box{
    background: rgb(0, 150, 255);
    height: 40px;
    padding: 8px;
    box-sizing: border-box;
  }
   .search-box input{
     border: none;
     background: #fff;
     height: 24px;
     font-size: 12px;
     width: 100%;
     border-radius: 12px;
    
     outline: none;
     box-sizing: border-box;
     padding: 0;
      padding-left: 20px;
   }
</style>