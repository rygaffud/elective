<template>
  <section id="skills" class="skills-section">
    <div class="skills-container">
      
      <!-- Section Title -->
      <h2 class="section-title" v-reveal="0">
        Skills & <span class="highlight">Expertise</span>
      </h2>

      <!-- Card Grid Layout (Gaya ng nasa halimbawang larawan) -->
      <div class="skills-grid">
        
        <!-- 1. Web & Software Development -->
        <div class="skill-card" v-reveal="0">
          <div class="card-icon">
            <i class='bx bx-code-alt'></i>
          </div>
          <h3 class="card-title">Web & Software</h3>
          <p class="card-subtitle">Development & Programming</p>
          <div class="skills-tags">
            <span>HTML & CSS</span>
            <span>JavaScript</span>
            <span>Vue.js</span>
            <span>TypeScript</span>
            <span>Python</span>
            <span>C++</span>
          </div>
        </div>

        <!-- 2. Hardware & Systems -->
        <div class="skill-card" v-reveal="150">
          <div class="card-icon">
            <i class='bx bx-chip'></i>
          </div>
          <h3 class="card-title">Hardware & Systems</h3>
          <p class="card-subtitle">Embedded Systems & Architecture</p>
          <div class="skills-tags">
            <span>Arduino</span>
            <span>Microcontrollers</span>
            <span>Circuit Design</span>
            <span>Networking</span>
            <span>Troubleshooting</span>
          </div>
        </div>

        <!-- 3. Tools & Applications -->
        <div class="skill-card" v-reveal="300">
          <div class="card-icon">
            <i class='bx bx-wrench'></i>
          </div>
          <h3 class="card-title">Tools & Software</h3>
          <p class="card-subtitle">Development & Design Tools</p>
          <div class="skills-tags">
            <span>Git & GitHub</span>
            <span>VS Code</span>
            <span>Figma (UI/UX)</span>
            <span>Proteus / Multisim</span>
            <span>Canva</span>
          </div>
        </div>

        <!-- 4. Professional Skills -->
        <div class="skill-card" v-reveal="450">
          <div class="card-icon">
            <i class='bx bx-brain'></i>
          </div>
          <h3 class="card-title">Professional Skills</h3>
          <p class="card-subtitle">Core & Soft Competencies</p>
          <div class="skills-tags">
            <span>Problem Solving</span>
            <span>Teamwork</span>
            <span>Project Planning</span>
            <span>Critical Thinking</span>
            <span>Adaptability</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.skills-section {
  width: 100%;
  min-height: 100vh;
  padding: 100px 20px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.skills-container {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
}

/* Centered Section Heading */
.section-title {
  color: #ffffff;
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
  letter-spacing: -0.5px;
}

.section-title .highlight {
  color: #fa47d9;
  text-shadow: 0 0 15px rgba(250, 71, 217, 0.6);
}

/* Grid Layout matching the reference image */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  width: 100%;
  align-items: stretch;
}

/* Card Container (Pink/Glass Accent version of the reference) */
.skill-card {
  background: rgba(45, 25, 42, 0.65);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(250, 71, 217, 0.25);
  border-radius: 28px;
  padding: 35px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.35);
}

.skill-card:hover {
  border-color: #fa47d9;
  transform: translateY(-10px);
  box-shadow: 0 18px 45px rgba(250, 71, 217, 0.4);
  background: rgba(60, 30, 55, 0.82);
}

/* Top Centered Icon Styling */
.card-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(250, 71, 217, 0.15);
  border: 1px solid rgba(250, 71, 217, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #fa47d9;
  font-size: 2rem;
  transition: transform 0.4s ease, background 0.4s ease;
}

.skill-card:hover .card-icon {
  transform: scale(1.1);
  background: #fa47d9;
  color: #ffffff;
  box-shadow: 0 0 20px rgba(250, 71, 217, 0.7);
}

/* Title & Subtitle Styling */
.card-title {
  color: #ffffff;
  font-size: 1.45rem;
  font-weight: 800;
  margin-bottom: 6px;
  line-height: 1.25;
}

.card-subtitle {
  color: #fa47d9;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 22px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Skills Tag List inside Card */
.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  width: 100%;
  margin-top: auto;
}

.skills-tags span {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.9);
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(250, 71, 217, 0.18);
  transition: all 0.3s ease;
}

.skills-tags span:hover {
  border-color: #fa47d9;
  background: rgba(250, 71, 217, 0.25);
  color: #ffffff;
  transform: translateY(-2px);
}

/* Responsive Media Queries */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  .skills-section {
    padding: 80px 15px 40px;
  }

  .section-title {
    font-size: 2.1rem;
    margin-bottom: 35px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .skill-card {
    padding: 28px 18px;
  }
}
</style>