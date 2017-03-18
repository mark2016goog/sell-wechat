<template>
  <div class="order">
    <v-topbar></v-topbar>
    <div class="order-content">
      <order-list-item></order-list-item>
      <order-list-item></order-list-item>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import HeaderTopBar from '../header/header-top-bar';
import OrderListItem from '../body/order-list-item';
import Footer from '../footer/index-footer';
export default {
  name: 'order',
  data () {
    return {
      title: '订单'
    };
  },
  components: {
    'v-topbar': HeaderTopBar,
    'order-list-item': OrderListItem,
    'v-footer':Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .order{
      width: 100%;
      background-color: #ddd;    
    }
    .order-content{
      margin-top: 40px;
    }
</style>