<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Skills from "./components/Skills.vue"
import Projects from "./components/Projects.vue"
import Contact from "./components/Contact.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <div class="app-wrapper">
    <!-- Fixed Video Background Container -->
    <div class="video-container">
      <video autoplay loop muted playsinline class="bg-video">
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div class="video-overlay"></div>
    </div>

    <!-- Navigation Bar -->
    <Navbar />

    <!-- Foreground Content Layer -->
    <main class="content-layer">
      <Home />
      <div v-reveal><About id="about" /></div>
      <div v-reveal><Skills id="skills" /></div>
      <div v-reveal><Projects id="projects" /></div>
      <div v-reveal><Contact id="contact" /></div>
      
      <!-- Footer na may sariling v-reveal -->
      <div v-reveal><Footer id="footer" /></div>
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0f172a;
  color: white;
  overflow-x: hidden;
}

/* Video Container */
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
}

.bg-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.content-layer {
  position: relative;
  z-index: 10;
}

/* Bawat section ay eksaktong 100vh para masolo ng Contact ang viewport */
section {
  min-height: 100vh;
  padding: 100px 10% 60px 10%;
  background: transparent !important;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* SMOOTH SCROLL REVEAL ANIMATIONS */
.reveal-init {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), 
              transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: opacity, transform;
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>