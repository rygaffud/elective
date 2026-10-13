<template>
  <footer class="site-footer">
    <div class="footer-container">
      <!-- Social Media Links -->
      <div class="footer-socials">
        <a href="https://github.com/rygaffud" target="_blank" class="footer-social-icon" title="GitHub">
          <i class='bx bxl-github'></i>
        </a>
        <a href="https://linkedin.com" target="_blank" class="footer-social-icon" title="LinkedIn">
          <i class='bx bxl-linkedin'></i>
        </a>
        <a href="mailto:yzagaffud03@gmail.com" class="footer-social-icon" title="Email">
          <i class='bx bx-envelope'></i>
        </a>
        <a href="https://www.facebook.com/ryzamae.gaffud" target="_blank" class="footer-social-icon" title="Facebook">
          <i class='bx bxl-facebook'></i>
        </a>
      </div>

      <!-- Copyright -->
      <p class="copyright-text">
        © Ryza Mae Gaffud | All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  width: 100%;
  margin-top: 220px; /* Malaking espasyo sa pagitan ng Contact at Footer gaya ng nasa larawan */
  padding: 50px 20px 40px;
  background: rgba(12, 6, 14, 0.95);
  border-top: 1px solid rgba(250, 71, 217, 0.2);
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  position: relative;
  z-index: 999;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
}

.footer-socials {
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
}

.footer-social-icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 2px solid #fa47d9;
  color: #fa47d9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  text-decoration: none;
  transition: all 0.35s ease;
  box-shadow: 0 0 12px rgba(250, 71, 217, 0.3);
}

.footer-social-icon:hover {
  background: #fa47d9;
  color: #ffffff;
  box-shadow: 0 0 25px rgba(250, 71, 217, 0.85);
  transform: translateY(-4px) scale(1.08);
}

.copyright-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.88rem;
  margin: 0;
  text-align: center;
}

@media (max-width: 768px) {
  .site-footer {
    margin-top: 120px;
    padding: 40px 15px 30px;
  }
}
</style>