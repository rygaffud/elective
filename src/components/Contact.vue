<script setup lang="ts">
import { ref } from 'vue';

const isSubmitted = ref(false);

const handleSubmit = () => {
  isSubmitted.value = true;
  setTimeout(() => {
    isSubmitted.value = false;
  }, 4000);
};
</script>

<template>
  <section id="contact">
    <h2>Get In Touch</h2>

    <div class="contact-grid">
      <!-- 1. Left Card: Direct Details & Status -->
      <div class="info-card">
        <h3>Let's Work Together</h3>
        <p class="intro-text">
          I am currently open to freelance opportunities, technical collaborations, or full-time roles in software and hardware engineering.
        </p>

        <div class="info-items">
          <div class="info-item">
            <span class="info-icon">📍</span>
            <div>
              <span class="label">Location</span>
              <p class="value">Cagayan Valley, Philippines</p>
            </div>
          </div>

          <div class="info-item">
            <span class="info-icon">✉️</span>
            <div>
              <span class="label">Email</span>
              <p class="value">yzagaffud03@gmail.com</p>
            </div>
          </div>

          <div class="info-item">
            <span class="info-icon">💼</span>
            <div>
              <span class="label">Status</span>
              <p class="value badge">Available for Projects</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Right Card: Message Form -->
      <div class="form-card">
        <h3>Send a Direct Message</h3>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div class="form-group">
            <input type="email" placeholder="Your Email Address" required />
          </div>

          <div class="form-group">
            <textarea placeholder="Your Message or Project Idea..." rows="4" required></textarea>
          </div>

          <button type="submit" class="btn-send">
            {{ isSubmitted ? 'Message Sent! ✨' : 'Send Message 🚀' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
#contact {
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

/* Side-by-Side Responsive Grid Layout */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  align-items: stretch;
}

/* Card Boxes with Glassmorphism Theme */
.info-card,
.form-card {
  background: #432b3f69;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid rgba(250, 71, 217, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

h3 {
  color: #fa47d9;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 12px;
  text-align: left;
  border-bottom: 1px solid rgba(250, 71, 217, 0.25);
  padding-bottom: 10px;
}

.intro-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 25px;
}

/* Info Items Styling */
.info-items {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.04);
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid rgba(250, 71, 217, 0.1);
}

.info-icon {
  font-size: 1.4rem;
}

.label {
  color: #fa47d9;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
}

.value {
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 2px 0 0 0;
}

.value.badge {
  color: #4ade80; /* Green badge status */
}

/* Form Controls */
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
}

input,
textarea {
  width: 100%;
  padding: 14px;
  border: 1px solid rgba(250, 71, 217, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 0.95rem;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

input:focus,
textarea:focus {
  border-color: #fa47d9;
  background: rgba(250, 71, 217, 0.1);
}

.btn-send {
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #fa47d9;
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 5px;
}

.btn-send:hover {
  background: #d633b5;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(250, 71, 217, 0.3);
}

/* ===================================================
   RESPONSIVE MEDIA QUERIES (Mobile, Tablet, Desktop)
   =================================================== */

/* Tablets & Small Laptops (1024px pababa) */
@media screen and (max-width: 1024px) {
  .contact-grid {
    gap: 20px;
  }

  .info-card,
  .form-card {
    padding: 25px;
  }
}

/* Mobile Devices (768px pababa) */
@media screen and (max-width: 768px) {
  #contact {
    padding: 30px 15px;
  }

  h2 {
    font-size: 1.85rem;
    margin-bottom: 20px;
  }

  .contact-grid {
    grid-template-columns: 1fr; /* Single column view para sa mobile */
    gap: 16px;
  }

  .info-card,
  .form-card {
    padding: 20px;
  }

  h3 {
    font-size: 1.15rem;
  }

  .intro-text {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  input,
  textarea {
    padding: 12px;
    font-size: 0.9rem;
  }

  .btn-send {
    padding: 12px;
    font-size: 0.95rem;
  }
}

/* Small Smartphones (380px pababa) */
@media screen and (max-width: 380px) {
  #contact {
    padding: 20px 10px;
  }

  .info-card,
  .form-card {
    padding: 15px;
  }

  .info-item {
    padding: 10px 12px;
  }

  .info-icon {
    font-size: 1.2rem;
  }
}
</style>