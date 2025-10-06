<script>
// Impor komponen sidebar
import Sidebar from '@/components/Sidebar.vue';
export default {
  name: 'ProfileLayoutWrapper', // Nama bisa apa saja
  components: {
    Sidebar,
  },
};
</script>

<template>
  <!--
    Ini adalah "layout" untuk semua halaman profil.
    Flexbox digunakan untuk menyusun sidebar dan konten secara berdampingan.
  -->
  <div class="container mx-auto flex flex-col md:flex-row py-8 gap-8">

    <!-- 1. Sidebar selalu ditampilkan di sini -->
    <Sidebar />

    <!-- Garis pemisah vertikal (opsional) -->
    <div class="border-l border-gray-200 hidden md:block"></div>

    <!--
      2. Konten halaman anak (Profile, Cart, dll.) akan dirender di sini.
      Router akan secara otomatis memasukkan komponen yang sesuai ke dalam <RouterView>.
    -->
    <main class="w-full">
      <RouterView />
    </main>

  </div>
</template>

