<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      
      <!-- Section Title -->
      <h2 class="section-title">
        Contact <span class="highlight">Me</span>
      </h2>

      <!-- Main Two-Column Layout -->
      <div class="contact-grid">
        
        <!-- Left Column: Contact Form -->
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="input-group">
            <input 
              type="text" 
              v-model="form.name" 
              placeholder="Name" 
              required 
              class="pill-input"
            />
          </div>

          <div class="input-group">
            <input 
              type="email" 
              v-model="form.email" 
              placeholder="Email" 
              required 
              class="pill-input"
            />
          </div>

          <div class="input-group">
            <textarea 
              v-model="form.message" 
              placeholder="Message" 
              rows="5" 
              required 
              class="pill-textarea"
            ></textarea>
          </div>

          <button type="submit" class="send-btn" :disabled="isSubmitting">
            <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
            <i class='bx bx-right-arrow-alt arrow-icon'></i>
          </button>
        </form>

        <!-- Right Column: Info Cards -->
        <div class="contact-info-list">
          
          <a href="mailto:yzagaffud03@gmail.com" class="info-card">
            <div class="card-left">
              <div class="icon-badge">
                <i class='bx bx-envelope'></i>
              </div>
              <div class="info-text">
                <span class="info-label">Email</span>
                <span class="info-val">yzagaffud03@gmail.com</span>
              </div>
            </div>
            <div class="arrow-badge">
              <i class='bx bx-up-arrow-alt'></i>
            </div>
          </a>

          <a href="tel:+639167243870" class="info-card">
            <div class="card-left">
              <div class="icon-badge">
                <i class='bx bx-phone'></i>
              </div>
              <div class="info-text">
                <span class="info-label">Phone number</span>
                <span class="info-val">+63 916 724 3870</span>
              </div>
            </div>
            <div class="arrow-badge">
              <i class='bx bx-up-arrow-alt'></i>
            </div>
          </a>

          <div class="info-card">
            <div class="card-left">
              <div class="icon-badge">
                <i class='bx bx-map'></i>
              </div>
              <div class="info-text">
                <span class="info-label">Location</span>
                <span class="info-val">Tuguegarao City, Cagayan, Philippines</span>
              </div>
            </div>
            <div class="arrow-badge">
              <i class='bx bx-up-arrow-alt'></i>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isSubmitting = ref(false);

const form = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  isSubmitting.value = true;
  setTimeout(() => {
    alert('Thank you! Your message has been sent successfully.');
    form.value = { name: '', email: '', message: '' };
    isSubmitting.value = false;
  }, 1000);
};
</script>

<style scoped>
.contact-section {
  width: 100%;
  min-height: 100vh;
  padding: 100px 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.contact-container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  color: #ffffff;
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
  letter-spacing: -0.5px;
}

.section-title .highlight {
  color: #fa47d9;
  text-shadow: 0 0 15px rgba(250, 71, 217, 0.6);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: flex-start;
  width: 100%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
}

.pill-input {
  width: 100%;
  padding: 18px 24px;
  border-radius: 40px;
  background: rgba(45, 25, 42, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(250, 71, 217, 0.2);
  color: #ffffff;
  font-size: 0.98rem;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.pill-textarea {
  width: 100%;
  padding: 20px 24px;
  border-radius: 28px;
  background: rgba(45, 25, 42, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(250, 71, 217, 0.2);
  color: #ffffff;
  font-size: 0.98rem;
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;
  transition: all 0.3s ease;
}

.pill-input::placeholder,
.pill-textarea::placeholder {
  color: rgba(255, 255, 255, 0.45);
}

.pill-input:focus,
.pill-textarea:focus {
  border-color: #fa47d9;
  box-shadow: 0 0 20px rgba(250, 71, 217, 0.35);
  background: rgba(60, 30, 55, 0.75);
}

.send-btn {
  width: 100%;
  padding: 16px 30px;
  border-radius: 40px;
  background: #fa47d9;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 22px rgba(250, 71, 217, 0.5);
}

.send-btn:hover {
  background: #d633b5;
  box-shadow: 0 0 32px rgba(250, 71, 217, 0.85);
  transform: translateY(-2px);
}

.send-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.arrow-icon {
  font-size: 1.4rem;
}

.contact-info-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
}

.info-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-radius: 40px;
  background: rgba(45, 25, 42, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(250, 71, 217, 0.2);
  text-decoration: none;
  color: #ffffff;
  transition: all 0.35s ease;
  box-sizing: border-box;
}

.info-card:hover {
  border-color: #fa47d9;
  background: rgba(60, 30, 55, 0.8);
  box-shadow: 0 10px 30px rgba(250, 71, 217, 0.3);
  transform: translateY(-3px);
}

.card-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon-badge {
  color: #fa47d9;
  font-size: 1.35rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.info-label {
  color: #fa47d9;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.info-val {
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  word-break: break-word;
}

.arrow-badge {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(250, 71, 217, 0.15);
  border: 1px solid rgba(250, 71, 217, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.arrow-badge i {
  transform: rotate(45deg);
}

.info-card:hover .arrow-badge {
  background: #fa47d9;
  color: #ffffff;
  box-shadow: 0 0 12px rgba(250, 71, 217, 0.7);
}

@media (max-width: 880px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 80px 15px 40px;
  }

  .section-title {
    font-size: 2.2rem;
    margin-bottom: 35px;
  }

  .info-card {
    padding: 14px 18px;
    border-radius: 30px;
  }

  .info-val {
    font-size: 0.85rem;
  }
}
</style>