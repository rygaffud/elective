<template>
  <section id="about">
    <h2>About Me!</h2>

    <div class="main-layout">
      <!-- 1. KALIWA: Larawan (Sukat mula sa image_10.png) -->
      <div class="column-section image-card">
        <img 
          src="/about.jpg" 
          alt="Ryza Mae Gaffud" 
          class="profile-image"
        />
      </div>

      <!-- 2. GITNA: About Me Paragraphs (Mas malawak pakanan) -->
      <div class="column-section text-column flex-grow-col">
        <div class="card">
          <p>
            I am a 4th Year Computer Engineering student. I enjoy creating websites, learning programming, and developing innovative technology solutions.
          </p>
        </div>

        <div class="card">
          <p>
            My journey in tech spans both hardware concepts and software engineering, with a strong focus on modern web development.
          </p>
        </div>

        <div class="card">
          <p>
            I am passionate about continuous learning, collaborating on tech projects, and crafting clean, user-friendly digital experiences.
          </p>
        </div>
      </div>

      <!-- 3. KANAN: Educational Background (Mas malawak pakanan) -->
      <div class="column-section text-column flex-grow-col">
        <div class="card edu-single-box">
          <h3 class="edu-heading">Educational Background</h3>

          <div class="edu-item">
            <span class="sub-title">College | 2023 – Present</span>
            <h4>BS Computer Engineering</h4>
            <p>Currently a 4th-year student focusing on software engineering, web development, and computer systems architecture.</p>
          </div>

          <div class="edu-divider"></div>

          <div class="edu-item">
            <span class="sub-title">Senior High School | 2021 – 2023</span>
            <h4>STEM Strand</h4>
            <p>Graduated with honors, focusing on advanced mathematics, basic programming principles, and physical sciences.</p>
          </div>

          <div class="edu-divider"></div>

          <div class="edu-item">
            <span class="sub-title">Junior High School | 2017 – 2021</span>
            <h4>Secondary Education</h4>
            <p>Completed secondary education with active participation in computer literacy clubs and science fairs.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
#about {
  width: 100%;
  padding: 40px 40px;
  box-sizing: border-box;
}

h2 {
  color: #fa47d9;
  margin-bottom: 25px;
  font-size: 2.25rem;
  font-weight: bold;
  text-align: left;
}

/* Gagamit ng Flex para makontrol ang growth ng columns */
.main-layout {
  display: flex;
  gap: 24px;
  width: 100%;
  align-items: stretch;
}

.column-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
}



.profile-image {
  width: 100%;
  height: 100%;
  max-height: 420px;
  object-fit: cover;
  object-position: top center;
  border-radius: 8px;
}

/* 2 at 3. Text & Education Columns: Kusang lalapad pakanan upang punuin ang space */
.flex-grow-col {
  flex: 1 1 0%; /* Dynamic na lumalaki at pumapantay sa natitirang space */
}

/* Standard Glass Card Styling */
.card {
  background: #432b3f69;
  padding: 25px;
  text-align: left;
  border-radius: 10px;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  border: 1px solid rgba(250, 71, 217, 0.15);
}

.card p {
  color: #ffffff;
  margin: 0;
  line-height: 1.6;
  font-size: 0.95rem;
  text-align: left;
}

/* Education Box Styling */
.edu-single-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-align: left;
}

.edu-heading {
  color: #fa47d9;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: left;
}

.edu-item {
  text-align: left;
}

.edu-item h4 {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 4px;
  text-align: left;
}

.sub-title {
  color: #fa47d9;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 2px;
  text-align: left;
}

.edu-divider {
  height: 1px;
  background-color: rgba(250, 71, 217, 0.25);
  margin: 12px 0;
  width: 100%;
}

/* Responsive adjustment para sa mobile screens */
@media (max-width: 900px) {
  .main-layout {
    flex-direction: column;
  }
  .image-card {
    width: 100%; /* Sa mobile, kukuha na siya ng full width para responsive */
  }
}
</style>