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
      showFooter: true
    },
  },
  {
    path: '/categroy',
    component: categroy,
    meta: {
      showFooter: true
    },
    children: [{
        path: ':id',
        component: categoryOfItem,
        meta: {
          showFooter: true
        },
        props: true
      },
      {
        path: '',
        redirect: '11',
        meta: {
          showFooter: true
        },
      }
    ]
  },
  {
    path: '/worthBuying',
    component: worthBuying,
    meta: {
      showFooter: true
    },
  },
  {
    path: '/cart',
    component: cart,
    meta: {
      showFooter: true
    },
  },
  {
    path: '/profile',
    component: profile,
    meta: {
      showFooter: false
    },
  },
  {
    path: '/',
    component: home,
    meta: {
      showFooter: true
    },
  }
]
