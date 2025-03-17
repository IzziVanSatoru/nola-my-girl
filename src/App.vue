<template>
  <div class="container">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Agar tinggi minimal setara dengan viewport */
}

main {
  flex: 1; /* Membuat konten utama mengisi sisa ruang di antara Navbar & Footer */
  padding: 20px;
}
</style>
