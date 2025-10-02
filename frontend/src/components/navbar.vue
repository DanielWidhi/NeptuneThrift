<script setup>
import defaultAvatar from "@/asset/images/user_profile/default-avatar.png";
import logofootwear from "@/asset/images/Footwear.png";
</script>
<template>
  <nav class="bg-white shadow-md px-6 py-3 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo + Brand -->
      <div class="flex items-center space-x-2">
        <img :src="logofootwear" alt="Logo" class="h-8 w-8" />
        <span class="font-extrabold text-xl">
          <span class="text-blue-700">NEPTUNE</span>THRIFT
        </span>
      </div>

      <!-- Menu Tengah -->
      <div class="hidden md:flex space-x-8">
        <router-link to="/product" class="font-medium text-blue-700 hover:text-blue-500"
          >Product</router-link
        >
        <router-link to="/promo" class="font-medium text-blue-700 hover:text-blue-500"
          >Promo</router-link
        >
        <router-link to="/about" class="font-medium text-blue-700 hover:text-blue-500"
          >About</router-link
        >
      </div>

      <!-- Avatar/User -->
      <div>
        <img :src="defaultAvatar" alt="User" class="h-10 w-10 rounded-full object-cover" />
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Styling tambahan kalau diperlukan */
</style>
