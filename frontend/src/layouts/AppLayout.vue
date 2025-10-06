<script setup>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/Footer.vue'
import { RouterView, useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'


onMounted(() => {
  import('flowbite').then(({ initDropdowns }) => {
    initDropdowns() // Inisialisasi ulang dropdown
  })
})

watch(useRoute(), () => {
  import('flowbite').then(({ initDropdowns }) => {
    initDropdowns()
  })
})
</script>
<template>
  <div>
    <Navbar />
    <div class="relative min-h-screen overflow-x-hidden">
      <router-view v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </router-view>
    </div>
    <Footer />
  </div>
</template>
