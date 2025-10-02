<script setup>
// Pastikan path ke logo sudah benar (menggunakan alias @ ke src)
import logofootwear from "@/asset/images/Footwear.png";
</script>

<template>
  <!-- Footer bergaya minimal seperti contoh -->
  <footer class="bg-slate-100 text-gray-800">
    <div class="mx-auto w-full max-w-screen-xl px-6 py-8 lg:py-10">
      <div class="grid items-center text-center md:grid-cols-3 md:text-left">
        <a href="#" class="flex items-center justify-center gap-3 pt-12 md:justify-start">
          <img :src="logofootwear" class="h-10 w-auto" alt="NeptuneThrift Logo" />
          <span class="text-2xl font-extrabold tracking-tight">
            <span class="text-blue-700">NEPTUNE</span>THRIFT
          </span>
        </a>

        <nav class="mt-8 md:justify-self-center">
          <ul class="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold">
            <li><a href="#" class="hover:underline hover:text-blue-700">About</a></li>
            <li><a href="#" class="hover:underline hover:text-blue-700">Promo</a></li>
            <li><a href="#" class="hover:underline hover:text-blue-700">Product</a></li>
            <li><a href="#" class="hover:underline hover:text-blue-700">Contact</a></li>
          </ul>
        </nav>

        <!-- <div class="hidden md:block"></div> -->
      </div>

      <div class="text-center text-sm text-gray-700">
        <p>Your sneaker story starts here — discover, style, and save with NeptuneThrift.</p>
        <p>Your sneaker story starts here — discover.</p>
      </div>

      <hr class="my-8 border-gray-300" />

      <div class="text-center md:text-left">
        <span class="text-sm text-gray-600">© 2025 UrbanStep. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>
