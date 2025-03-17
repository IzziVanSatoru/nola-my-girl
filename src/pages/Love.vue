<template>
    <div class="love" @click="createLoveParticles">
      <h2>My Love, Naila ❤️</h2>
      <img ref="nailaPhoto" src="../assets/MyNola.png" alt="Naila" class="photo" />
      <canvas ref="canvas" class="canvas"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import gsap from "gsap";
  
  const canvas = ref<HTMLCanvasElement | null>(null);
  const nailaPhoto = ref<HTMLElement | null>(null);
  
  onMounted(() => {
    gsap.from(nailaPhoto.value, {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
    });
  });
  
  const createLoveParticles = (event: MouseEvent) => {
    const ctx = canvas.value?.getContext("2d");
    if (!ctx || !canvas.value) return;
  
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
  
    const hearts: { x: number; y: number; size: number; opacity: number }[] = [];
  
    for (let i = 0; i < 15; i++) {
      hearts.push({
        x: event.clientX,
        y: event.clientY,
        size: Math.random() * 20 + 10,
        opacity: 1,
      });
    }
  
    const animate = () => {
      if (!ctx || !canvas.value) return;
  
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
      hearts.forEach((heart, index) => {
        ctx.font = `${heart.size}px Arial`;
        ctx.fillStyle = `rgba(255, 0, 100, ${heart.opacity})`;
        ctx.fillText("❤️", heart.x, heart.y);
  
        heart.y -= 2;
        heart.opacity -= 0.02;
  
        if (heart.opacity <= 0) hearts.splice(index, 1);
      });
  
      if (hearts.length > 0) requestAnimationFrame(animate);
    };
  
    animate();
  };
  </script>
  
  <style scoped>
  .love {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to right, #ff758c, #ff7eb3);
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  
  h2 {
    color: #e74c3c;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .photo {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }
  
  .photo:hover {
    transform: scale(1.1);
  }
  
  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  </style>
  