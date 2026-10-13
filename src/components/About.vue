<template>
  <section id="about" class="about-section">
    <div class="about-container">
      
      <!-- 1. KALIWA / TAAS: Centered Glowing Circular Profile Picture Container -->
      <div class="about-image-wrapper" v-reveal="0">
        <div class="glow-circle">
          <img 
            src="/about.jpg" 
            alt="Ryza Mae Gaffud" 
            class="profile-circle-img"
          />
        </div>
      </div>

      <!-- 2. KANAN / BABA: Title, Short Description & Read More Button -->
      <div class="about-text-content" v-reveal="150">
        <h2 class="about-title">
          About <span class="highlight">Me</span>
        </h2>

        <p class="about-description">
          A dedicated Computer Engineering student eager to apply technical expertise in programming, hardware system, and system design. Focused on building a strong foundation in engineering principles while embracing innovation and continuous growth. Dedicated to creating efficient, reliable, and forward-looking solutions that contribute to technological advancement and practical applications in everyday life.
        </p>

        <!-- Read More Button to Trigger Modal Popup -->
        <button class="btn-read-more" @click="isModalOpen = true">
          Read More
        </button>
      </div>

    </div>

    <!-- 3. MODAL POPUP OVERLAY (Lalabas kapag klining ang Read More) -->
    <Transition name="modal-fade">
      <div v-if="isModalOpen" class="modal-backdrop" @click.self="isModalOpen = false">
        <div class="modal-card">
          <!-- Close Modal Cross Button -->
          <button class="close-btn" @click="isModalOpen = false" aria-label="Close modal">
            <i class='bx bx-x'></i>
          </button>

          <h2 class="modal-title">More About <span class="highlight">Ryza</span></h2>

          <div class="modal-grid">
            <!-- Educational Background Section -->
            <div class="modal-section">
              <h3 class="modal-subtitle">Educational Background</h3>
              
              <div class="info-item">
                <span class="sub-title">College | 2023 – Present</span>
                <h4>BS Computer Engineering</h4>
                <p>Currently a 4th-year student focusing on software engineering, web development, and computer systems architecture.</p>
              </div>

              <div class="modal-divider"></div>

              <div class="info-item">
                <span class="sub-title">Senior High School | 2021 – 2023</span>
                <h4>STEM Strand</h4>
                <p>Graduated with honors, focusing on advanced mathematics and physical sciences.</p>
              </div>

              <div class="modal-divider"></div>

              <div class="info-item">
                <span class="sub-title">Junior High School | 2017 – 2021</span>
                <h4>Secondary Education</h4>
                <p>Completed secondary education with active participation in school activities.</p>
              </div>
            </div>

            <!-- Certifications & Seminars Section -->
            <div class="modal-section">
              <h3 class="modal-subtitle">Certifications & Seminars</h3>

              <div class="info-item">
                <span class="sub-title">Eligibilities & Certifications | March 9, 2026</span>
                <h4>Civil Service Professional Level Passer</h4>
                <p>Career Service Professional Eligibility</p>
              </div>

              <div class="modal-divider"></div>

              <div class="info-item">
                <span class="sub-title">Conference | December 12–13, 2025</span>
                <h4>Frontiers of Computer Engineering: 2025 International Conference on New and Emerging Technologies</h4>
                <p>International conference discussing emerging tech, hardware innovations, and modern engineering paradigms.</p>
              </div>

              <div class="modal-divider"></div>

              <div class="info-item">
                <span class="sub-title">Webinar | April 10, 2026</span>
                <h4>Cybersecurity Webinar 2026</h4>
                <p>Technical webinar focusing on cybersecurity fundamentals, threat landscapes, and system protection.</p>
              </div>

              <div class="modal-divider"></div>

              <div class="info-item">
                <span class="sub-title">Convention | July 20–22, 2026</span>
                <h4>Regional Information Technology and Engineering (ITE) Convention 2026</h4>
                <p>Regional convention featuring engineering advancements, tech trends, and professional networking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// State to handle modal open/close
const isModalOpen = ref(false);
</script>

<style scoped>
.about-section {
  width: 100%;
  min-height: 100vh;
  padding: 100px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.about-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
}

/* Glowing Circle Profile Image Wrapper */
.about-image-wrapper {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}

.glow-circle {
  width: 380px;
  height: 380px;
  border-radius: 50%;
  overflow: hidden;
  background: radial-gradient(circle, rgba(250, 71, 217, 0.85) 0%, rgba(250, 71, 217, 0.2) 65%, transparent 100%);
  border: 4px solid #fa47d9;
  box-shadow: 0 0 50px rgba(250, 71, 217, 0.65), inset 0 0 20px rgba(250, 71, 217, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.glow-circle:hover {
  transform: scale(1.03);
  box-shadow: 0 0 75px rgba(250, 71, 217, 0.9), inset 0 0 30px rgba(250, 71, 217, 0.6);
}

.profile-circle-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  border-radius: 50%;
}

/* Text Content Area */
.about-text-content {
  flex: 1;
  text-align: left;
  max-width: 580px;
}

.about-title {
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.highlight {
  color: #fa47d9;
  text-shadow: 0 0 15px rgba(250, 71, 217, 0.5);
}

.about-description {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.98rem;
  line-height: 1.65;
  margin-bottom: 30px;
}

/* Pill Read More Button */
.btn-read-more {
  padding: 12px 36px;
  border-radius: 30px;
  background: #fa47d9;
  border: 2px solid #fa47d9;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(250, 71, 217, 0.5);
}

.btn-read-more:hover {
  background: #d633b5;
  border-color: #d633b5;
  box-shadow: 0 0 30px rgba(250, 71, 217, 0.85);
  transform: translateY(-2px);
}

/* ===================================================
   POPUP MODAL STYLING
   =================================================== */

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 5, 15, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.modal-card {
  position: relative;
  background: rgba(45, 25, 42, 0.92);
  border: 1px solid rgba(250, 71, 217, 0.3);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border-radius: 24px;
  padding: 35px;
  width: 100%;
  max-width: 880px;
  max-height: 85vh;
  overflow-y: auto;
  text-align: left;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(250, 71, 217, 0.15);
  border: 1px solid rgba(250, 71, 217, 0.4);
  color: #ffffff;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #fa47d9;
  color: #ffffff;
  transform: rotate(90deg);
}

.modal-title {
  color: #ffffff;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 25px;
}

.modal-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.modal-subtitle {
  color: #fa47d9;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 18px;
  border-bottom: 1px solid rgba(250, 71, 217, 0.3);
  padding-bottom: 8px;
}

.info-item h4 {
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.info-item p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.88rem;
  line-height: 1.5;
  margin: 0;
}

.sub-title {
  color: #fa47d9;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 2px;
}

.modal-divider {
  height: 1px;
  background: rgba(250, 71, 217, 0.2);
  margin: 12px 0;
}

/* Modal Transition Animations */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Responsive Media Queries */
@media (max-width: 900px) {
  .about-container {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  .about-text-content {
    text-align: center;
  }

  .glow-circle {
    width: 280px;
    height: 280px;
  }

  .modal-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>