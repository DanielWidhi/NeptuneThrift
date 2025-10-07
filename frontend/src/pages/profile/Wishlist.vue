<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue' // Pastikan path ini sudah benar
// Anda bisa mengganti data statis ini dengan data dari API
const wishlistItems = ref([
  {
    id: 1,
    name: 'Patta x Nike Air Max 1',
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: 20,
    // Ganti dengan path gambar yang sesuai di proyek Anda
    imageUrl: 'https://i.ibb.co/6rPyMJK/patta-x-nike-air-max-1.png'
  },
  {
    id: 2,
    name: 'Nike Air Force 1',
    rating: 4.5,
    price: 120,
    originalPrice: null,
    discount: null,
    // Ganti dengan path gambar yang sesuai di proyek Anda
    imageUrl: 'https://i.ibb.co/1MjzXzQ/nike-air-force-1.png'
  }
])

// Komponen untuk menampilkan bintang rating
const StarRating = {
  props: {
    rating: {
      type: Number,
      required: true
    }
  },
  template: `
    <div class="flex items-center">
      <template v-for="n in 5" :key="n">
        <svg class="w-5 h-5" :class="n <= rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.363 2.444a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.363-2.444a1 1 0 00-1.175 0l-3.363 2.444c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      </template>
      <span class="text-gray-500 text-sm ml-2">{{ rating }}/5</span>
    </div>
  `
}
</script>

<template>
  <div class="flex">
    <Sidebar />
    <main class="w-full p-8 md:p-12">
      <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Wishlist</h1>

      <!-- Grid untuk daftar produk -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-12">
        <!-- Looping item wishlist -->
        <div v-for="item in wishlistItems" :key="item.id" class="group relative">
          <!-- Gambar Produk -->
          <div
            class="aspect-square w-full overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-80 transition-opacity duration-300"
          >
            <img :src="item.imageUrl" :alt="item.name" class="h-full w-full object-cover object-center" />
          </div>

          <!-- Detail Produk -->
          <div class="mt-4 flex flex-col gap-1">
            <h3 class="text-lg font-bold text-gray-900">
              {{ item.name }}
            </h3>

            <!-- Rating Bintang -->
            <StarRating :rating="item.rating" />

            <!-- Info Harga -->
            <div class="flex items-center gap-3 mt-1">
              <p class="text-2xl font-bold text-gray-900">${{ item.price }}</p>
              <p v-if="item.originalPrice" class="text-lg text-gray-400 line-through">
                ${{ item.originalPrice }}
              </p>
              <span
                v-if="item.discount"
                class="text-sm font-semibold text-red-600 bg-red-100 px-2 py-1 rounded-md"
              >
                -{{ item.discount }}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
</template>

