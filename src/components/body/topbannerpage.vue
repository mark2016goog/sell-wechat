<template>
  <div class="topbannberpage">
    <v-topbar :title="title" :is_arrow_show="topbar.is_arrow_show" @back="topBack"></v-topbar>    
  </div>
</template>
<script>
  import router  from '../../router'
  import axios from 'axios'
  import topbar from '../header/header-top-bar'
  import bus from '../../bus'
  export default {
    name:'topbannerpage',
    data(){
      return {
        topbar:{
          is_arrow_show:true
        },
        title:''        
      }
    },
    components:{
      'v-topbar':topbar
    },
    methods:{
      topBack(){
        router.go(-1);
      }
    },
    created:function(){
      var self = this;
      bus.$once('topSearch',function(title){
        self.title = title;
        self.topbar.is_arrow_show = false;
      });
    }
  }
</script>