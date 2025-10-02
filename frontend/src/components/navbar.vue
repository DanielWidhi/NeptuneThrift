<script setup>

</script>
<template>
  <nav class="bg-white shadow-md px-6 py-3">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo + Brand -->
      <div class="flex items-center space-x-2">
        <!-- <img src="/logo.png" alt="Logo" class="h-8 w-8" /> -->
        <span class="font-bold text-xl">
          <span class="text-blue-700">NEPTUNE</span>THRIFT
        </span>
      </div>

      <!-- Menu Tengah -->
      <div class="hidden md:flex space-x-8">
        <router-link to="/product" class="text-gray-700 hover:text-blue-700">Product</router-link>
        <router-link to="/promo" class="text-gray-700 hover:text-blue-700">Promo</router-link>
        <router-link to="/about" class="text-gray-700 hover:text-blue-700">About</router-link>
      </div>

      <!-- Avatar/User -->
      <div>
        <!-- <img src="/user.jpg" alt="User" class="h-10 w-10 rounded-full object-cover" /> -->
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Styling tambahan kalau diperlukan */
</style>
