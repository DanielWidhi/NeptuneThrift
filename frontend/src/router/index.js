import { createRouter, createWebHistory } from 'vue-router'
// layouts
import AppLayout from '@/layouts/AppLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import Accounts from '@/pages/admin/accounts/Accounts.vue'
import Products from '@/pages/admin/products/Products.vue'
import Transactions from '@/pages/admin/transactions/Transactions.vue'
import Status from '@/pages/admin/status/Status.vue'
// Pages
import Home from '@/pages/Home.vue'
import ProductPage from '@/pages/Product.vue'
import PromoPage from '@/pages/Promo.vue'
import AboutPage from '@/pages/About.vue'
import DetailProductPage from '@/pages/DetailProduct.vue'
// User Profile
import Profile from '@/pages/profile/Profile.vue'
import Cart from '@/pages/profile/Cart.vue'
import Wishlist from '@/pages/profile/Wishlist.vue'
import Review from '@/pages/profile/Review.vue'
// Admin
import Dashboard from '@/pages/admin/Dashboard.vue'
import AccountsList from '@/pages/admin/accounts/AccountLists.vue'
import CategoryLists from '@/pages/admin/categories/CategoryLists.vue'
import CommentLists from '@/pages/admin/comments/CommentLists.vue'
import ProductLists from '@/pages/admin/products/ProductLists.vue'
import TransactionLists from '@/pages/admin/transactions/TransactionLists.vue'
import StatusLists from '@/pages/admin/status/StatusLists.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
        },
        {
          path: '/product',
          name: 'Product',
          component: ProductPage,
        },
        {
          path: '/promo',
          name: 'Promo',
          component: PromoPage,
        },
        {
          path: '/about',
          name: 'About',
          component: AboutPage,
        },
        {
          path: '/detailproduct',
          name: 'DetailProduct',
          component: DetailProductPage,
        },
        {
          path: '/user',
          // component: AppLayout,
          children: [
            {path: 'profile', name : 'Profile', component: Profile },
            {path: 'cart', name : 'Cart', component: Cart },
            {path: 'wishlist', name : 'Wishlist', component: Wishlist },
            {path: 'review', name : 'Review', component: Review },
          ],
        },
      ],
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {path: 'dashboard', name : 'Dashboard', component: Dashboard },
        {
          path: 'accounts',
          component: Accounts,
          children: [
            {path: '', name : 'Accounts', component: AccountsList },
          ]
        },
        {
          path: 'products',
          component: Products,
          children: [
            {path: '', name : 'Products', component:  ProductLists },
          ]
        },
        {
         path: 'categories',
         name: 'Categories',
         component: CategoryLists,
       },
        {
          path: 'transactions',
          component: Transactions,
          children: [
            {path: '', name : 'Transactions', component: TransactionLists },
          ]
        },
        {
          path: 'status',
          component: Status,
          children: [
            {path: '', name : 'Status', component: StatusLists },
          ]
        },
         {
          path: 'comments',
          name: 'Comments',
          component: CommentLists,
        },
      ]
    }
  ],
})

export default router
