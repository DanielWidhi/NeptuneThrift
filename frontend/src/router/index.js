import { createRouter, createWebHistory } from 'vue-router'

// layouts
import AppLayout from '@/layouts/AppLayout.vue'
import UserLayout from '@/pages/profile/index.vue'
// Pages
import Home from '@/pages/Home.vue'
import ProductPage from '@/pages/Product.vue'
import PromoPage from '@/pages/Promo.vue'
import AboutPage from '@/pages/About.vue'
import DetailProductPage from '@/pages/DetailProduct.vue'
// User Profile
import Profile from '@/pages/profile/Profile.vue'



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
          component: UserLayout,
          children: [
            {path: 'profile', name : 'Profile', component: Profile },
          ],
        },
      ],
    },
  ],
})

export default router
