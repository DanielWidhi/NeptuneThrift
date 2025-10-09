<script setup>
import { ref, reactive } from 'vue'
import Sidebar from '@/components/Sidebar.vue' // Pastikan path ini benar
import DefaultAvatar from '@/asset/images/user_profile/default-avatar.png' // Import avatar default
import Rating from '@/asset/images/Rating.png' // Komponen rating bintang

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
    rating: Rating,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    id: 2,
    rating: Rating,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    id: 3,
    rating: Rating,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    id: 4,
    rating: Rating,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  }
])

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
            <img :src="review.rating" alt="Rating" />

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
