<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo: Zoom-in Effect kapag tinapatan ng cursor -->
      <a href="#home" class="logo">Ryza <span>Mae</span></a>

      <!-- Center Links (Home, About, Skills, Projects) -->
      <div class="nav-links" :class="{ 'open': isMenuOpen }">
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#about" @click="closeMenu">About</a>
        <a href="#skills" @click="closeMenu">Skills</a>
        <a href="#projects" @click="closeMenu">Projects</a>
      </div>

      <!-- Right Call-to-Action Pure Pink Pill Button -->
      <a href="#contact" class="btn-nav-contact">Contact Me</a>

      <!-- Hamburger Toggle Button (Non-Desktop Devices) -->
      <button 
        class="hamburger-btn" 
        :class="{ 'is-active': isMenuOpen }" 
        @click="toggleMenu"
        aria-label="Toggle Navigation"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 1000;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(250, 71, 217, 0.2);
  transform: translateZ(0);
}

.nav-container {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo Base Styling */
.logo {
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: -0.5px;
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), text-shadow 0.3s ease;
}

.logo span {
  color: #fa47d9;
}

/* Zoom-in Hover Effect */
.logo:hover {
  transform: scale(1.08);
  text-shadow: 0 0 12px rgba(250, 71, 217, 0.8);
}

/* Navigation Links */
.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  position: relative;
  padding-bottom: 6px;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

/* Pure Pink Underline Highlight on Hover */
.nav-links a::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2.5px;
  bottom: 0;
  left: 0;
  background: #fa47d9;
  border-radius: 2px;
  box-shadow: 0 0 10px #fa47d9;
  transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.nav-links a:hover {
  color: #fa47d9;
  text-shadow: 0 0 8px rgba(250, 71, 217, 0.6);
}

.nav-links a:hover::after {
  width: 100%;
}

/* Right Pill Button (Contact Me) */
.btn-nav-contact {
  background: #fa47d9;
  color: #ffffff;
  padding: 10px 24px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(250, 71, 217, 0.4);
}

.btn-nav-contact:hover {
  background: #d633b5;
  box-shadow: 0 6px 25px rgba(250, 71, 217, 0.7);
  transform: translateY(-2px);
}

/* Hamburger Button (Hidden on Desktop) */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0;
}

.hamburger-btn .bar {
  width: 100%;
  height: 3px;
  background-color: #ffffff;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.hamburger-btn.is-active .bar:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
}

.hamburger-btn.is-active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.is-active .bar:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
}

/* Non-Desktop Responsiveness (1024px pababa) */
@media (max-width: 1024px) {
  .btn-nav-contact {
    display: none;
  }

  .hamburger-btn {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background: rgba(20, 15, 30, 0.95);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    flex-direction: column;
    padding: 30px 0;
    gap: 20px;
    transform: translateY(-150%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.35s ease;
    border-bottom: 1px solid rgba(250, 71, 217, 0.3);
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>