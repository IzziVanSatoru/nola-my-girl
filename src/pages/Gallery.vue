<template>
    <div class="gallery">
      <h2>💑 Our Memories 💑</h2>
  
      <div class="photo-container">
        <div v-for="(photo, index) in photos" :key="index" class="photo-wrapper">
          <img
            :src="photo.src"
            :alt="photo.alt"
            class="photo"
            @click="openFullscreen(photo.src)"
          />
        </div>
      </div>
  
      <!-- Fullscreen Viewer -->
      <div v-if="fullscreenImage" class="fullscreen-overlay" @click="closeFullscreen">
        <img :src="fullscreenImage" class="fullscreen-img" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";
  import gsap from "gsap";
  
  // Pastikan gambar ada di folder public/
  const photos = ref([
    { src: "/Jau.jpg", alt: "Photo Couple 1" },
    { src: "/MyNola.png", alt: "Photo Couple 2" },
  ]);
  
  const fullscreenImage = ref<string | null>(null);
  
  // Animasi GSAP saat gambar muncul
  onMounted(() => {
    gsap.from(".photo", {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      stagger: 0.3,
      ease: "power2.out",
    });
  });
  
  // Slideshow otomatis
  let interval: number | undefined;
  onMounted(() => {
    interval = setInterval(() => {
      photos.value.push(photos.value.shift()!);
    }, 5000);
  });
  
  // Hentikan slideshow saat halaman tidak digunakan
  onUnmounted(() => {
    clearInterval(interval);
  });
  
  // Buka foto dalam mode fullscreen
  const openFullscreen = (src: string) => {
    fullscreenImage.value = src;
  };
  
  // Tutup mode fullscreen
  const closeFullscreen = () => {
    fullscreenImage.value = null;
  };
  </script>
  
  <style scoped>
  .gallery {
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(to right, #ff9a9e, #fad0c4);
  }
  
  h2 {
    font-size: 2rem;
    color: #e74c3c;
    margin-bottom: 20px;
  }
  
  /* Container Foto */
  .photo-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .photo-wrapper {
    overflow: hidden;
    border-radius: 15px;
    transition: transform 0.3s ease-in-out;
  }
  
  /* Efek Hover Parallax */
  .photo-wrapper:hover {
    transform: scale(1.05);
  }
  
  .photo {
    width: 250px;
    height: 350px;
    object-fit: cover;
    border-radius: 15px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  
  /* Fullscreen Overlay */
  .fullscreen-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .fullscreen-img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
  }
  </style>
  