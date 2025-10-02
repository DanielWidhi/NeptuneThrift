<script setup>
// Pastikan path ke logo Anda sudah benar
import logofootwear from "@/asset/images/Footwear.png";
</script>

<template>
  <!-- Ganti background menjadi abu-abu terang, bukan gelap -->
  <footer class="bg-gray-100">
    <div>
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <!-- Container untuk Logo dan Menu -->
        <!-- sm:flex akan membuat layout menjadi baris di layar kecil ke atas -->
        <!-- sm:justify-between akan mendorong logo ke kiri dan menu ke kanan -->
        <div class="sm:flex sm:items-center">
          <div class="pl-24 grid grid-flow-col grid-rows-3 gap-4">
            <!-- Logo -->
            <div class="flex items-start row-span-3">
              <a href="#" class="flex mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img :src="logofootwear" class="h-10" alt="NeptuneThrift Logo" />
                <span class="self-center text-2xl font-bold whitespace-nowrap">
                  <span class="text-blue-700">NEPTUNE</span>THRIFT
                </span>
              </a>
            </div>
          </div>

          <div class="col-span-2 pl-24">
            <!-- Menu Navigasi (sebagai saudara/sibling dari logo, bukan di dalamnya) -->
            <div class="row-span-2 sm:flex sm:items-center sm:justify-center">
              <ul
                class="flex flex-wrap items-center mb-6 text-sm font-semibold text-gray-800 sm:mb-0"
              >
                <li>
                  <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                  <a href="#" class="hover:underline me-4 md:me-6">Promo</a>
                </li>
                <li>
                  <a href="#" class="hover:underline me-4 md:me-6">Product</a>
                </li>
                <li>
                  <a href="#" class="hover:underline">Contact</a>
                </li>
              </ul>
            </div>

            <!-- Tagline (elemen ini hilang di kodemu) -->
            <div class="mt-6 text-center text-sm text-gray-700">
              <p>Your sneaker story starts here — discover, style, and save with NeptuneThrift.</p>
              <p>Your sneaker story starts here — discover.</p>
            </div>
          </div>

        </div>

        <!-- Garis pemisah -->
        <hr class="my-6 border-gray-400 sm:mx-auto lg:my-8" />
    </div>


      <!-- Copyright -->
      <div class="sm:flex sm:justify-start">
        <!-- Ganti teks copyright agar sesuai gambar -->
        <span class="text-sm text-gray-500 sm:text-center">
          © 2025 UrbanStep. All rights reserved.
        </span>
      </div>
      
    </div>
  </footer>
</template>
