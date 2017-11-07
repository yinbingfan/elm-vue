import Vue from 'vue'
import Router from 'vue-router'
import shopClass from '../pages/shopClass.vue'
import find from '../pages/find.vue'
import index from '../pages/index.vue'
import goodsCartPay from '../pages/goodsCartPay.vue'
import orders from '../pages/orders.vue'
import ordershow from '../pages/ordershow.vue'
import detail from '../pages/detail.vue'
import mine from '../pages/mine.vue'
import logoinbox from '../pages/logoinbox.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'index',
      path: '/',
      component: index
    },
    {
      name:'goodsCartPay',
      path: '/goodsCartPay',
      component: goodsCartPay
    },
    {
      name:'shopClass',
      path: '/shopClass',
      component: shopClass
    },
    {
      name:'find',
      path: '/find',
      component: find
    },
    {
      name:'detail',
      path: '/detail',
      component: detail
    },
    {
      name:'orders',
      path: '/orders',
      component: orders
    },
    {
      name:'ordershow',
      path: '/ordershow',
      component: ordershow
    },
    {
      name: 'mine',
      path: '/mine',
      component: mine
    },
    {
      name: 'logoinbox',
      path: '/logoinbox',
      component: logoinbox
    }
  ]
})
