<script setup>
import { ref, reactive } from 'vue'
import Sidebar from '@/components/Sidebar.vue' // Pastikan path ini benar
import DefaultAvatar from '@/asset/images/user_profile/default-avatar.png' // Import avatar default

// Data reaktif untuk informasi pengguna yang akan dikirim ke Sidebar
const userProfile = reactive({
  username: 'FIKY KNJT',
  email: 'fkyknjt@gmail.com',
  image: DefaultAvatar,
})

// Data reaktif untuk daftar ulasan. Anda bisa menggantinya dengan data dari API.
const reviews = ref([
  {
    id: 1,
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    id: 2,
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    id: 3,
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    id: 4,
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  }
])

// Komponen kecil untuk menampilkan bintang rating
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
        <svg class="w-6 h-6" :class="n <= rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.363 2.444a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.363-2.444a1 1 0 00-1.175 0l-3.363 2.444c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      </template>
    </div>
  `
}
</script>

<template>
  <div class="flex">
    <!-- Mengirim data pengguna ke Sidebar untuk konsistensi -->
    <Sidebar :user="userProfile" />

    <!-- Konten Utama Halaman Ulasan -->
    <main class="w-full p-8 md:p-12">
      <div class="mx-auto max-w-7xl">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Review</h1>

        <!-- Grid untuk menampilkan kartu ulasan -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Looping melalui setiap ulasan -->
          <div
            v-for="review in reviews"
            :key="review.id"
            class="border border-gray-200 rounded-xl p-6 shadow-sm"
          >
            <!-- Komponen Rating Bintang -->
            <StarRating :rating="review.rating" />

            <!-- Teks Ulasan -->
            <p class="mt-4 text-gray-600 leading-relaxed">
              "{{ review.text }}"
            </p>
          </div>

          <!-- Pesan jika tidak ada ulasan -->
          <div v-if="reviews.length === 0" class="col-span-full text-center py-10">
            <p class="text-gray-500">You have no reviews yet.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
