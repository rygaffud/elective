<script setup lang="ts">
// Function para sa CV Download
const downloadCV = () => {
  const cvUrl = '/Ryza_Gaffud_CV.pdf';
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'Ryza_Mae_Gaffud_CV.pdf';
  link.click();
};
</script>

<template>
  <section id="home" class="home-section">
    <div class="home-content">
      <!-- Left Column: Intro Text + Connect & Resume -->
      <div class="text-box">
        <span class="greeting">Hello, I'm</span>
        <h1>Ryza Mae Gaffud</h1>
        <h2>Computer Engineering Student</h2>
        
        <p class="description">
          Passionate about web development, IoT solutions, and continuous technical learning. Building clean, modern, and user-friendly digital experiences.
        </p>

        <!-- Social Media Links & Download CV -->
        <div class="connect-container">
          <div class="social-links">
            <a href="https://github.com/rygaffud" target="_blank" rel="noopener noreferrer" class="social-icon" title="GitHub">
              💻
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">
              💼
            </a>
            <a href="mailto:yzagaffud03@gmail.com" class="social-icon" title="Email">
              ✉️
            </a>
            <a href="https://www.facebook.com/ryzamae.gaffud" target="_blank" rel="noopener noreferrer" class="social-icon" title="Facebook">
              🌐
            </a>
          </div>

          <!-- Download CV Button -->
          <button @click="downloadCV" class="btn-download-cv">
            <span class="icon">📄</span>
            <span>Download CV</span>
          </button>
        </div>
      </div>

      <!-- Right Column: Profile Picture -->
      <div class="avatar-box">
        <img src="/profile.jpg" alt="Ryza Mae Gaffud" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 100px 20px 40px;
  box-sizing: border-box;
}

.home-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
}

.text-box {
  flex: 1;
  text-align: left;
}

.greeting {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
}

.text-box h1 {
  color: #fa47d9;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 5px;
}

.text-box h2 {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 25px;
  max-width: 550px;
}

/* Connect & Resume Actions */
.connect-container {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #432b3f69;
  border: 1px solid rgba(250, 71, 217, 0.3);
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  border-color: #fa47d9;
  background: #fa47d9;
  transform: translateY(-3px);
}

.btn-download-cv {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border: 2px solid #fa47d9;
  border-radius: 30px;
  background: transparent;
  color: #fa47d9;
  font-weight: bold;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-download-cv:hover {
  background: #fa47d9;
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(250, 71, 217, 0.4);
}

/* Profile Picture Circle Box */
.avatar-box {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #fa47d9;
  box-shadow: 0 0 25px rgba(250, 71, 217, 0.4);
  flex-shrink: 0;
}

.avatar-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

/* Mobile Responsiveness */
@media (max-width: 850px) {
  .home-content {
    flex-direction: column-reverse;
    text-align: center;
    gap: 30px;
  }

  .text-box {
    text-align: center;
  }

  .text-box h1 {
    font-size: 2.2rem;
  }

  .text-box h2 {
    font-size: 1.2rem;
  }

  .connect-container {
    justify-content: center;
  }

  .avatar-box {
    width: 220px;
    height: 220px;
  }
}
</style>