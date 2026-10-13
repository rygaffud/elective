<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/CV-Ryza.pdf';
  link.download = 'CV-Ryza.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Typewriter Effect Logic
const fullText = "Computer Engineer";
const typedText = ref("");
let charIndex = 0;
let isDeleting = false;
let timeoutId: number | undefined;

const typeEffect = () => {
  if (!isDeleting && charIndex <= fullText.length) {
    typedText.value = fullText.substring(0, charIndex);
    charIndex++;
    if (charIndex > fullText.length) {
      isDeleting = true;
      timeoutId = window.setTimeout(typeEffect, 2000); // Hihinto muna ng 2 segundo bago burahin
      return;
    }
  } else if (isDeleting && charIndex >= 0) {
    typedText.value = fullText.substring(0, charIndex);
    charIndex--;
    if (charIndex < 0) {
      isDeleting = false;
      charIndex = 0;
    }
  }

  const speed = isDeleting ? 60 : 120;
  timeoutId = window.setTimeout(typeEffect, speed);
};

onMounted(() => {
  typeEffect();
});

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>

<template>
  <section id="home" class="home-section">
    <div class="home-content">
      
      <!-- Left Column: Text Hierarchy, Social Links & Action Buttons -->
      <div class="text-box">
        <!-- Main Large Heading -->
        <h1 class="main-title">
          Hi, It's <span class="highlight">Ryza</span>
        </h1>

        <!-- Sub Heading with Typewriter Effect -->
        <h2 class="sub-title">
          I'm a <span class="highlight typewriter-text">{{ typedText }}</span>
        </h2>
        
        <!-- Short Description Paragraph -->
        <p class="description">
          Passionate about web development, IoT solutions, and continuous technical learning. 
          Building clean, modern, and user-friendly digital experiences.
        </p>

        <!-- Circular Social Media Icons -->
        <div class="social-links">
          <a href="https://github.com/rygaffud" target="_blank" rel="noopener noreferrer" class="social-icon" title="GitHub">
            <i class='bx bxl-github'></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">
            <i class='bx bxl-linkedin'></i>
          </a>
          <a href="mailto:yzagaffud03@gmail.com" class="social-icon" title="Email">
            <i class='bx bx-envelope'></i>
          </a>
          <a href="https://www.facebook.com/ryzamae.gaffud" target="_blank" rel="noopener noreferrer" class="social-icon" title="Facebook">
            <i class='bx bxl-facebook'></i>
          </a>
        </div>

        <!-- Action Pill Buttons -->
        <div class="action-buttons">
          <button @click="downloadCV" class="btn-solid">
            Download CV
          </button>
          <a href="#contact" class="btn-outline">
            Contact
          </a>
        </div>
      </div>

      <!-- Right Column: Interactive Highlight Photo Container -->
      <div class="hero-image-container">
        <div class="pink-glow-circle">
          <img src="/profile.jpg" alt="Ryza Mae Gaffud" class="profile-photo" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Typewriter Cursor Indicator */
.typewriter-text {
  border-right: 2px solid #fa47d9;
  padding-right: 4px;
  animation: blinkCursor 0.8s infinite;
}

@keyframes blinkCursor {
  0%, 100% { border-color: #fa47d9; }
  50% { border-color: transparent; }
}

.home-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 100px 30px 40px;
  box-sizing: border-box;
}

.home-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
  max-width: 1200px;
}

.text-box {
  flex: 1;
  text-align: left;
}

/* Main Title: "Hi, It's Ryza" */
.main-title {
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 8px;
}

/* Sub Title: "I'm a Computer Engineer" */
.sub-title {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 18px;
}

.highlight {
  color: #fa47d9;
}

.description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 28px;
  max-width: 500px;
}

/* Social Media Circular Buttons */
.social-links {
  display: flex;
  gap: 14px;
  margin-bottom: 28px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #fa47d9;
  background: transparent;
  color: #fa47d9;
  text-decoration: none;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #fa47d9;
  color: #ffffff;
  box-shadow: 0 0 15px rgba(250, 71, 217, 0.7);
  transform: translateY(-3px);
}

/* Action Buttons (Solid Download CV vs Outline Contact) */
.action-buttons {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-solid {
  padding: 12px 32px;
  border-radius: 30px;
  background: #fa47d9;
  border: 2px solid #fa47d9;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 18px rgba(250, 71, 217, 0.5);
}

.btn-solid:hover {
  background: #d633b5;
  border-color: #d633b5;
  box-shadow: 0 0 28px rgba(250, 71, 217, 0.8);
  transform: translateY(-2px);
}

.btn-outline {
  padding: 12px 32px;
  border-radius: 30px;
  background: transparent;
  border: 2px solid #fa47d9;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: rgba(250, 71, 217, 0.18);
  transform: translateY(-2px);
}

/* Photo Container & Hover Highlight Effect */
.hero-image-container {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pink-glow-circle {
  width: 420px;
  height: 420px;
  border-radius: 50%;
  overflow: hidden;
  background: radial-gradient(circle, rgba(250, 71, 217, 0.85) 0%, rgba(250, 71, 217, 0.25) 60%, transparent 100%);
  border: 3px solid rgba(250, 71, 217, 0.5);
  box-shadow: 0 0 35px rgba(250, 71, 217, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  border-radius: 50%;
  transition: transform 0.4s ease;
}

/* HOVER HIGHLIGHT DESIGN: Kapag tinapat ang cursor sa larawan */
.pink-glow-circle:hover {
  border-color: #fa47d9;
  box-shadow: 0 0 70px rgba(250, 71, 217, 0.95), inset 0 0 30px rgba(250, 71, 217, 0.6);
  transform: scale(1.03);
}

.pink-glow-circle:hover .profile-photo {
  transform: scale(1.05);
}

/* Responsive Layout */
@media (max-width: 992px) {
  .home-content {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
  }

  .text-box {
    text-align: center;
  }

  .main-title {
    font-size: 2.6rem;
  }

  .sub-title {
    font-size: 1.4rem;
  }

  .description {
    margin: 0 auto 25px auto;
  }

  .social-links,
  .action-buttons {
    justify-content: center;
  }

  .pink-glow-circle {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2.2rem;
  }

  .pink-glow-circle {
    width: 240px;
    height: 240px;
  }

  .action-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn-solid,
  .btn-outline {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>