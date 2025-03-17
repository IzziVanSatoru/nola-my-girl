<template>
    <div class="about">
      <div ref="card" class="card" @click="showProposal">
        <h2>Naila 📚🎨</h2>
        <p>✨ Hobi baca buku, dunia imajinasinya luas banget.</p>
        <p>🖌️ Suka gambar, karyanya penuh ekspresi.</p>
        <p>💖 My type banget dah!</p>
        <p v-if="proposalVisible" class="proposal">Mau gak jadi Pacar aku? 😳💕</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import gsap from 'gsap';
  
  const card = ref<HTMLElement | null>(null);
  const proposalVisible = ref(false);
  
  onMounted(() => {
    gsap.from(card.value, {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: "power2.out"
    });
  });
  
  const showProposal = () => {
    proposalVisible.value = true;
    gsap.from(".proposal", {
      opacity: 0,
      y: 10,
      duration: 0.6,
      ease: "power2.out"
    });
  };
  </script>
  
  <style scoped>
  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #ff758c, #ff7eb3);
    text-align: center;
  }
  
  .card {
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    cursor: pointer;
    transition: transform 0.3s ease, background 0.3s ease;
  }
  
  .card:hover {
    transform: scale(1.05);
    background: #ffe0e9;
  }
  
  h2 {
    color: #e74c3c;
  }
  
  p {
    color: #333;
    font-size: 1.1rem;
  }
  
  .proposal {
    margin-top: 15px;
    font-size: 1.3rem;
    font-weight: bold;
    color: #e74c3c;
    opacity: 0;
  }
  </style>
  