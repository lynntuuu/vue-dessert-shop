import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/pages/admin/Login';
import Dashboard from '@/components/pages/admin/Dashboard';

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.name === "Index") {
      return {
        x: 0,
        y: 0
      }
    } else {
      return { x: 0, y: 700 }
    }
  },
  routes: [
    {
      path: '*',
      redirect: '/index',
    },
    {
      path: '/login', 
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      redirect: '/index',
      component: () => import('@/components/pages/frontend/Layout'),
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('@/components/pages/frontend/Index'),
        },
        {
          path: 'products',
          name: 'Products',
          component: () => import('@/components/pages/frontend/Products'),
        },
        {
          path: 'product_detail/:id',
          name: 'ProductDetail',
          component: () => import('@/components/pages/frontend/ProductDetail'),
        },
        {
          path: 'cart',
          name: 'Cart',
          component: () => import('@/components/pages/frontend/Cart'),
        },
        {
          path: 'customer_orders',
          name: 'CustomerOrders',
          component: () => import('@/components/pages/frontend/CustomerOrders'),
        },
        {
          path: 'payment/:orderId',
          name: 'Payment',
          component: () => import('@/components/pages/frontend/Payment'),
        },
        {
          path: 'pay_complete/:orderId',
          name: 'PayComplete',
          component: () => import('@/components/pages/frontend/PayComplete'),
        },
      ]
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      // 製作巢狀router路徑
      children: [
        {
          path: 'products_list',
          name: 'ProductsList',
          component: () => import('@/components/pages/admin/ProductsList.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('@/components/pages/admin/Orders.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: () => import('@/components/pages/admin/Coupons.vue'),
          meta: { requiresAuth: true },
        },
        // {
        //   path: 'report',
        //   name: 'Report',
        //   component: () => import('@/components/pages/admin/Report.vue'),
        //   meta: { requiresAuth: true },
        // }
      ],
    },
    // {
    //   path: '/',
    //   name: 'Dashboard',
    //   component: Dashboard,
    //   // 製作巢狀router路徑
    //   children: [
    //     {
    //       path: 'customer_order',
    //       name: 'CustomerOrder',
    //       component: CustomerOrder,
    //     },
    //     {
    //       path: 'customer_checkout/:orderId',
    //       name: 'CustomerCheckout',
    //       component: CustomerCheckout,
    //     },
    //   ],
    // },
  ],
});
