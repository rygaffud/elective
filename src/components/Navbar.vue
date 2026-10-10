<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">Portfolio.</div>
      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">More</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(67, 43, 63, 0.75); /* Glassmorphism background matched sa cards */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 100;
  border-bottom: 1px solid rgba(250, 71, 217, 0.35);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(250, 71, 217, 0.25);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
}

/* Neon Text Glow Effect sa Logo */
.logo {
  font-size: 1.6rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0 0 8px #fa47d9, 0 0 18px rgba(250, 71, 217, 0.8);
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  gap: 25px;
}

/* Neon Text Glow Effect sa Navigation Links */
.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  text-shadow: 0 0 6px rgba(250, 71, 217, 0.5);
}

/* Hover Effect: Malakas na Neon Pink Glow */
.nav-links a:hover {
  color: #fa47d9;
  text-shadow: 0 0 10px #fa47d9, 0 0 20px #fa47d9;
}

/* Underline Glow Line on Hover */
.nav-links a::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #fa47d9;
  box-shadow: 0 0 8px #fa47d9;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

/* Mobile Responsiveness */
@media (max-width: 650px) {
  .nav-container {
    padding: 12px 16px;
    flex-direction: column;
    gap: 10px;
  }
  
  .logo {
    font-size: 1.35rem;
  }

  .nav-links {
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-links a {
    font-size: 0.85rem;
  }
}
</style>