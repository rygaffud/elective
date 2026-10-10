<template>
  <section id="skills">
    <h2>Skills & Expertise</h2>

    <div class="skills-horizontal-wrapper">
      
      <!-- 1. Web & Software Development -->
      <div class="skill-card">
        <h3>Web & Software</h3>
        <div class="skills-list">
          <div>HTML & CSS</div>
          <div>JavaScript</div>
          <div>Vue.js</div>
          <div>TypeScript</div>
          <div>Python</div>
          <div>C++</div>
        </div>
      </div>

      <!-- 2. Hardware & Embedded Systems -->
      <div class="skill-card">
        <h3>Hardware & Systems</h3>
        <div class="skills-list">
          <div>Arduino</div>
          <div>Microcontrollers</div>
          <div>Circuit Design</div>
          <div>Networking</div>
          <div>Troubleshooting</div>
        </div>
      </div>

      <!-- 3. Tools & Applications -->
      <div class="skill-card">
        <h3>Tools & Software</h3>
        <div class="skills-list">
          <div>Git & GitHub</div>
          <div>VS Code</div>
          <div>Figma (UI/UX)</div>
          <div>Proteus / Multisim</div>
          <div>Canva</div>
        </div>
      </div>

      <!-- 4. Soft Skills & Professional Attributes -->
      <div class="skill-card">
        <h3>Professional Skills</h3>
        <div class="skills-list">
          <div>Problem Solving</div>
          <div>Teamwork</div>
          <div>Project Planning</div>
          <div>Critical Thinking</div>
          <div>Adaptability</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
#skills {
  width: 100%;
  padding: 40px 20px;
  text-align: left;
  box-sizing: border-box;
}

h2 {
  color: #fa47d9;
  margin-bottom: 25px;
  font-size: 2.25rem;
  font-weight: bold;
  text-align: left;
}

/* Horizontal Multi-Column Layout */
.skills-horizontal-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  width: 100%;
  align-items: stretch;
}

/* Single Box / Border Container for Each Title and Skills List */
.skill-card {
  background: #432b3f69;
  padding: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(250, 71, 217, 0.15);
  box-sizing: border-box;
}

h3 {
  color: #fa47d9;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: left;
  border-bottom: 1px solid rgba(250, 71, 217, 0.25);
  padding-bottom: 10px;
}

/* Vertical list of skills inside the border box */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.skills-list div {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  padding: 10px 12px;
  text-align: left;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(250, 71, 217, 0.1);
  transition: all 0.3s ease;
}

/* Hover Effect */
.skills-list div:hover {
  border-color: #fa47d9;
  transform: translateX(4px);
  background: rgba(250, 71, 217, 0.15);
}

/* ===================================================
   RESPONSIVE MEDIA QUERIES (Mobile, Tablet, Desktop)
   =================================================== */

/* Tablets & Small Laptops (1024px pababa) */
@media screen and (max-width: 1024px) {
  .skills-horizontal-wrapper {
    grid-template-columns: repeat(2, 1fr); /* 2 columns sa tablets */
    gap: 18px;
  }
}

/* Mobile Devices (768px pababa) */
@media screen and (max-width: 768px) {
  #skills {
    padding: 30px 15px;
  }

  h2 {
    font-size: 1.85rem;
    margin-bottom: 20px;
  }

  .skills-horizontal-wrapper {
    grid-template-columns: 1fr; /* Single column layout sa mobile phones */
    gap: 16px;
  }

  .skill-card {
    padding: 20px;
  }

  h3 {
    font-size: 1.1rem;
  }

  .skills-list div {
    font-size: 0.85rem;
    padding: 9px 11px;
  }
}

/* Small Smartphone Screen Widths (380px pababa) */
@media screen and (max-width: 380px) {
  #skills {
    padding: 20px 10px;
  }

  .skill-card {
    padding: 15px;
  }
}
</style>