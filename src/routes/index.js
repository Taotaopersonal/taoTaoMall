import home from 'pages/route-home/home.vue'
import categroy from 'pages/route-category/category.vue'
import worthBuying from 'pages/route-worthBuying/worthBuying.vue'
import cart from 'pages/route-cart/cart.vue'
import profile from 'pages/route-profile/profile.vue'
import categoryOfItem from 'pages/route-categoryOfItem/categoryOfItem.vue'

export default [{
    path: '/home',
    component: home,
    meta: {
      showFooter: true,
      id:1
    },
  },
  {
    path: '/categroy',
    component: categroy,
    meta: {
      showFooter: true,
      id:2
    },
    children: [{
        path: ':id',
        component: categoryOfItem,
        meta: {
          showFooter: true,
          id:2
        },
        props: true
      },
      {
        path: '',
        redirect: '11',
        meta: {
          showFooter: true,
          id:2
        },
      }
    ]
  },
  {
    path: '/worthBuying',
    component: worthBuying,
    meta: {
      showFooter: true,
      id:3
    },
  },
  {
    path: '/cart',
    component: cart,
    meta: {
      showFooter: true,
      id:4
    },
  },
  {
    path: '/profile',
    component: profile,
    meta: {
      showFooter: false,
      id:5
    },
  },
  {
    path: '/',
    component: home,
    meta: {
      showFooter: true,
      id:1
    },
  }
]
