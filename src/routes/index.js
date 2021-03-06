// import home from 'pages/route-home/home.vue'
// import categroy from 'pages/route-category/category.vue'
// import worthBuying from 'pages/route-worthBuying/worthBuying.vue'
// import cart from 'pages/route-cart/cart.vue'
// import profile from 'pages/route-profile/profile.vue'
// import categoryOfItem from 'pages/route-categoryOfItem/categoryOfItem.vue'
// import search from 'pages/route-search/search.vue'
// import loginByPhone from 'pages/route-loginByPhone/loginByPhone.vue'
// import loginByPwd from 'pages/route-loginByPwd/loginByPwd.vue'

const home = () => import(/* webpackChunkName: "home" */ 'pages/route-home/home.vue')
const categroy = () => import(/* webpackChunkName: "categroy" */ 'pages/route-category/category.vue')
const worthBuying = () => import(/* webpackChunkName: "worthBuying" */ 'pages/route-worthBuying/worthBuying.vue')
const cart = () => import(/* webpackChunkName: "cart" */ 'pages/route-cart/cart.vue')
const profile = () => import(/* webpackChunkName: "profile" */ 'pages/route-profile/profile.vue')
const categoryOfItem = () => import(/* webpackChunkName: "categoryOfItem" */ 'pages/route-categoryOfItem/categoryOfItem.vue')
const search = () => import(/* webpackChunkName: "search" */ 'pages/route-search/search.vue')
const loginByPhone = () => import(/* webpackChunkName: "loginByPhone" */ 'pages/route-loginByPhone/loginByPhone.vue')
const loginByPwd = () => import(/* webpackChunkName: "loginByPwd" */ 'pages/route-loginByPwd/loginByPwd.vue')

import store from 'store'
export default [{
    path: '/home',
    component: home,
    meta: {
      showFooter: true,
      id: 1
    },
  },
  {
    path: '/categroy',
    component: categroy,
    meta: {
      showFooter: true,
      id: 2
    },
    children: [{
        path: ':id',
        component: categoryOfItem,
        meta: {
          showFooter: true,
          id: 2
        },
        props: true
      },
      {
        path: '',
        redirect: '11',
        meta: {
          showFooter: true,
          id: 2
        },
      }
    ]
  },
  {
    path: '/worthBuying',
    component: worthBuying,
    meta: {
      showFooter: true,
      id: 3
    },
  },
  {
    path: '/cart',
    component: cart,
    meta: {
      showFooter: true,
      id: 4
    },
  },
  {
    path: '/profile',
    component: profile,
    meta: {
      showFooter: false,
      id: 5
    },
  },
  {
    path: "/search",
    component: search
  },
  {
    path: "/loginByPhone",
    component: loginByPhone,
    meta: {
      showFooter: false
    },
    beforeEnter: (to, from, next) => {
      if (store.state.login.token) {
        next('/profile')
      } else {
        next()
      }
    }
  },
  {
    path: "/loginByPwd",
    component: loginByPwd,
    meta: {
      showFooter: false
    },
    beforeEnter: (to, from, next) => {
      if (store.state.login.token) {
        next('/profile')
      } else {
        next()
      }
    }
  },
  {
    path: '/',
    component: home,
    meta: {
      showFooter: true,
      id: 1
    },
  }
]
