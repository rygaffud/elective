<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Skills from "./components/Skills.vue"
import Projects from "./components/Projects.vue"
import Contact from "./components/Contact.vue"
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
      <About />
      <Skills />
      <Projects />
      <Contact />
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
  /* Hinahawakan ang scroll para sakto sa bawat section ang hinto */
  scroll-snap-type: y mandatory;
}

body {
  background-color: #0f172a;
  color: white;
  overflow-x: hidden;
}

/* Video Container - Permanent behind everything */
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

/* Siguradong buong screen bawat section at hiwalay ang kasunod */
section {
  min-height: 100vh;
  padding: 100px 10% 60px 10%;
  background: transparent !important;
  box-sizing: border-box;
  
  /* Hihinto ang scroll nang sakto sa itaas ng bawat section */
  scroll-snap-align: start;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>