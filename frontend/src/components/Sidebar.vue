<script>
</script>

<template>
  <!-- Lebar bisa disesuaikan, misal w-64 atau w-72 -->
  <aside class="w-72 p-4">
    <div class="flex flex-col gap-8">
      <!-- Info Pengguna -->
      <div class="flex items-center gap-4">
        <img
          :src="user.imageUrl"
          alt="User Profile"
          class="h-16 w-16 rounded-full border-2 border-gray-200 object-cover"
        />
        <div>
          <p class="text-lg font-semibold text-gray-800">{{ user.name }}</p>
          <p class="text-sm text-gray-500">{{ user.email }}</p>
        </div>
      </div>

      <!-- Tautan Navigasi -->
      <nav>
        <ul class="flex flex-col gap-2">
          <li>
            <RouterLink
              :to="{ name: 'Profile' }"
              class="flex items-center gap-4 rounded-xl p-3 text-lg font-medium text-gray-700 transition-all hover:bg-gray-100"
              :class="$route.path.startsWith('/profile') ? 'bg-emerald-50 text-emerald-700' : ''"
            >
              <!-- Ikon Profile -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                :class="$route.path.startsWith('/profile') ? 'text-emerald-700' : 'text-gray-500'"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Profile</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'Cart' }"
              class="flex items-center gap-4 rounded-xl p-3 text-lg font-medium text-gray-700 transition-all hover:bg-gray-100"
              :class="$route.path.startsWith('/cart') ? 'bg-emerald-50 text-emerald-700' : ''"
            >
              <!-- Ikon Keranjang -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                :class="$route.path.startsWith('/cart') ? 'text-emerald-700' : 'text-gray-500'"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Cart</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'Wishlist' }"
              class="flex items-center gap-4 rounded-xl p-3 text-lg font-medium text-gray-700 transition-all hover:bg-gray-100"
              :class="$route.path.startsWith('/wishlist') ? 'bg-emerald-50 text-emerald-700' : ''"
            >
              <!-- Ikon Wishlist -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                :class="$route.path.startsWith('/wishlist') ? 'text-emerald-700' : 'text-gray-500'"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Wishlist</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'UserReview' }"
              class="flex items-center gap-4 rounded-xl p-3 text-lg font-medium text-gray-700 transition-all hover:bg-gray-100"
              :class="$route.path.startsWith('/reviews') ? 'bg-emerald-50 text-emerald-700' : ''"
            >
              <!-- Ikon Review -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                :class="$route.path.startsWith('/reviews') ? 'text-emerald-700' : 'text-gray-500'"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>Review</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

