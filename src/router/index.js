import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/body/body-index'
import Order from '@/components/body/body-order'
import PersonerCenter from '@/components/body/body-personcenter'
import ShopPage from '@/components/shop/ShopPage'
import Goods from '@/components/shop/goods'
import Seller from '@/components/shop/seller'
import Evaluate from '@/components/shop/evaluate'

Vue.use(Router)

export default new Router({
  model:history,
  routes: [{
      path: '/index',
      component: Index
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/personcenter',
      component: PersonerCenter
    },
    {
      path: '/shoppage',
      component: ShopPage,
      children: [{
          path: 'evaluate',
          component: Evaluate
        },
        {
          path: 'goods',
          component: Goods
        },
        {
          path: 'seller',
          component: Seller
        },
      ]
    }
  ]
})
