<template>
  <div class="home">
    <div ref="card" class="card">
      <h2>For You, Nola 💖</h2>
      <p>Dalam lautan pilihan, kenapa hatiku selalu berlabuh padamu?</p>
      <p>Apakah ini takdir atau kebetulan yang terlalu indah?</p>
      <p>Atau... ada sesuatu dalam dirimu yang bahkan aku sendiri tak bisa jelaskan?</p>
    </div>
    <button ref="ctaButton" class="cta-button" @click="goToAbout">
      Why Choose You
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"; // Import Vue Router
import gsap from "gsap";

const router = useRouter(); // Gunakan Router
const card = ref<HTMLElement | null>(null);
const ctaButton = ref<HTMLElement | null>(null);

// Animasi GSAP saat halaman dimuat
onMounted(() => {
  gsap.from(card.value, {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out",
  });

  gsap.from(ctaButton.value, {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 1,
    ease: "elastic.out(1, 0.5)",
  });
});

// Navigasi ke halaman About
const goToAbout = () => {
  router.push("/about"); // Arahkan ke halaman About.vue
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #ff9a9e, #fad0c4);
  text-align: center;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  animation: fadeInUp 1s ease-in-out;
}

h2 {
  margin-bottom: 10px;
  color: #e74c3c;
}

p {
  color: #333;
  font-size: 1.1rem;
}

.cta-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;
}

.cta-button:hover {
  background: #c0392b;
  transform: scale(1.05);
}
</style>
