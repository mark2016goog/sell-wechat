import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '@/components/body/body-index'
import Order from '@/components/body/body-order'
import PersonerCenter from '@/components/body/body-personcenter'
import ShopPage from '@/components/shop/ShopPage'
import Goods from '@/components/shop/goods'
import Seller from '@/components/shop/seller'
import Evaluate from '@/components/shop/evaluate'
import Loginphonenumber from '../components/user/loginphonenumber'
import Loginpassword from '../components/user/loginpassword'
import Accountsetting from '../components/user/accountsetting'
import Setpassword from '../components/user/setpassword'
import Comfirmorder from '../components/body/comfirmorder'
import Sendaddress from '../components/body/sendaddress'
import Addaddress from '../components/body/addaddress'
import Payonline from '../components/body/payonline'

Vue.use(Router)

export default new Router({
  model: history,
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
    },
    {
      path: '/user',
      component:App,
      children: [
      {
        path: 'loginphonenumber',
        component: Loginphonenumber
      },
      {
        path: 'loginpassword',
        component: Loginpassword
      },
      {
        path: 'accountsetting',
        component: Accountsetting
      },
      {
        path: 'setpassword',
        component: Setpassword
      },
      ]
    },
    {
      path:'/comfirmorder',
      component:Comfirmorder
    },
    {
      path:'/sendaddress',
      component:Sendaddress
    },
    {
      path:'/addaddress',
      component:Addaddress
    },
    {
      path:'/payonline',
      component:Payonline
    }
  ]
})
