<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/navbar.vue";
</script>

<template>
  <div class="app-container">
    <Navbar />
    <main class="main-content">
      <h1 class="text-green-700 title">You did it!</h1>
      <p>
        Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
        documentation
      </p>
      <div>
        <h1 class="title">Ini Judul dengan Font Montserrat</h1>
        <p class="paragraph">Ini adalah paragraf biasa.</p>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 700; /* Bold */
}

.paragraph {
  font-family: "Montserrat", sans-serif;
  font-weight: 400; /* Regular */
}
.decorative-title {
  font-family: "Bitcount Single Ink", cursive;
  font-weight: 400; /* Atur ketebalan sesuai selera */
  font-size: 2.5rem;
  text-align: center;
}
</style>
