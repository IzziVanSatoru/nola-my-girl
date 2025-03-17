<template>
    <nav class="navbar">
      <div class="logo">NolaMyGirl</div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/love">Love</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #333;
    color: white;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  
  .nav-links li {
    display: inline;
  }
  
  .nav-links a {
    text-decoration: none;
    color: white;
    transition: color 0.3s;
  }
  
  .nav-links a:hover {
    color: #f39c12;
  }
  </style>
  