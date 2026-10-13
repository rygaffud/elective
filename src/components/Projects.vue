<template>
  <section id="projects" class="projects-section">
    <div class="projects-container">
      
      <!-- Section Title na may fade-in -->
      <h2 class="section-title" v-reveal="0">
        View My <span class="highlight">Work</span>
      </h2>

      <!-- Slideshow Carousel Viewport -->
      <div class="carousel-wrapper" v-reveal="150">
        <div class="carousel-track">
          <div 
            v-for="(project, index) in visibleProjects" 
            :key="project.id" 
            class="project-card carousel-card"
            :class="{ 'active-card': index === 1 }"
            @click="selectCard(index)"
          >
            <!-- Top Project Preview Image -->
            <div class="image-wrapper">
              <img :src="project.image" :alt="project.name" class="project-img" />
            </div>

            <!-- Card Content Body (Description Only) -->
            <div class="card-content">
              <!-- Project Number (01, 02, 03, 04) -->
              <span class="project-number">{{ project.number }}</span>
              
              <!-- Project Title -->
              <h3 class="project-title">{{ project.name }}</h3>
              
              <!-- Project Description -->
              <p class="project-desc">{{ project.description }}</p>
            </div>
          </div>
        </div>

        <!-- Carousel Navigation Controls -->
        <div class="carousel-controls">
          <button @click="prevSlide" class="nav-btn" aria-label="Previous Project">
            <i class='bx bx-chevron-left'></i>
          </button>
          <button @click="nextSlide" class="nav-btn" aria-label="Next Project">
            <i class='bx bx-chevron-right'></i>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const activeIndex = ref(0);

const projects = ref([
  {
    id: 1,
    number: '01',
    name: 'Grow a Sanction',
    description: 'A web-based student sanction management system that tracks disciplinary records and automatically sends email notifications to students and department heads.',
    image: '/sanction.png'
  },
  {
    id: 2,
    number: '02',
    name: 'DiLiGan',
    description: 'An automated plant irrigation and environmental monitoring system using IoT sensors to maintain optimal soil moisture and temperature levels.',
    image: '/diligan.png'
  },
  {
    id: 3,
    number: '03',
    name: 'SMART-TMS',
    description: 'A smart traffic management system that dynamically adjusts green light duration based on real-time vehicle density.',
    image: '/tms.png'
  },
  {
    id: 4,
    number: '04',
    name: 'Pharmacy Management System',
    description: 'A comprehensive medicine inventory and sales management system that monitors drug stocks, expiration dates, and daily transactions.',
    image: '/pharma.png'
  }
]);

// Calculates the 3 visible slides (Left, Center Focus, Right)
const visibleProjects = computed(() => {
  const total = projects.value.length;
  const leftIdx = (activeIndex.value - 1 + total) % total;
  const centerIdx = activeIndex.value % total;
  const rightIdx = (activeIndex.value + 1) % total;

  return [
    projects.value[leftIdx],
    projects.value[centerIdx],
    projects.value[rightIdx]
  ];
});

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % projects.value.length;
};

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + projects.value.length) % projects.value.length;
};

const selectCard = (slotIndex: number) => {
  if (slotIndex === 0) prevSlide();
  if (slotIndex === 2) nextSlide();
};
</script>

<style scoped>
.projects-section {
  width: 100%;
  min-height: 100vh;
  padding: 100px 20px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.projects-container {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
}

/* Section Heading */
.section-title {
  color: #ffffff;
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 45px;
  letter-spacing: -0.5px;
}

.section-title .highlight {
  color: #fa47d9;
  text-shadow: 0 0 15px rgba(250, 71, 217, 0.6);
}

/* Carousel Track & Layout */
.carousel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.carousel-track {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 20px 0;
  perspective: 1000px; /* Dagdag depth para sa 3D feel */
}

/* Glassmorphism Card with GPU-accelerated Smooth Transitions */
.project-card {
  background: rgba(45, 25, 42, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(250, 71, 217, 0.18);
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  
  /* SMOOTH TRANSITION SETTINGS */
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), 
              opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.65s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.65s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.4s ease;
  will-change: transform, opacity, filter, box-shadow;
}

/* Carousel Slide Specific Transforms */
.carousel-card {
  width: 320px;
  opacity: 0.55;
  transform: scale(0.88) translateY(10px);
  filter: brightness(0.75) blur(1px);
  cursor: pointer;
}

.carousel-card.active-card {
  opacity: 1;
  transform: scale(1.08) translateY(0);
  filter: brightness(1) blur(0px);
  border-color: #fa47d9;
  box-shadow: 0 20px 50px rgba(250, 71, 217, 0.45);
  z-index: 2;
}

.project-card:hover {
  border-color: #fa47d9;
}

.carousel-card.active-card:hover {
  transform: scale(1.1) translateY(-6px);
  box-shadow: 0 25px 60px rgba(250, 71, 217, 0.55);
}

/* Rounded Top Image Container */
.image-wrapper {
  width: 100%;
  height: 200px;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 18px;
  background-color: rgba(20, 10, 20, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
}

.project-img {
  width: 150%;
  height: 110%;
  object-fit: cover;
  border-radius: 18px;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.project-card:hover .project-img {
  transform: scale(1.06);
}

/* Card Body Content */
.card-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
  padding: 0 4px 6px;
}

/* Project Numbering (01, 02, 03, 04) */
.project-number {
  color: #fa47d9;
  font-size: 1.8rem;
  font-weight: 800;
  display: block;
  margin-bottom: 6px;
  text-shadow: 0 0 10px rgba(250, 71, 217, 0.5);
}

.project-title {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.3;
}

.project-desc {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.92rem;
  line-height: 1.6;
  margin-bottom: 0;
  flex-grow: 1;
}

/* Carousel Navigation Buttons */
.carousel-controls {
  display: flex;
  gap: 16px;
  margin-top: 25px;
}

.nav-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(45, 25, 42, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(250, 71, 217, 0.4);
  color: #fa47d9;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-btn:hover {
  background: #fa47d9;
  color: #ffffff;
  box-shadow: 0 0 22px rgba(250, 71, 217, 0.8);
  transform: scale(1.12);
}

.nav-btn:active {
  transform: scale(0.95);
}

/* Responsive Media Queries */
@media (max-width: 1024px) {
  .carousel-track {
    gap: 16px;
  }

  .carousel-card {
    width: 280px;
  }
}

@media (max-width: 680px) {
  .projects-section {
    padding: 80px 15px 40px;
  }

  .section-title {
    font-size: 2.1rem;
    margin-bottom: 30px;
  }

  .carousel-track {
    flex-direction: column;
  }

  .carousel-card {
    width: 100%;
    opacity: 1;
    transform: scale(1);
    filter: brightness(1);
  }

  .carousel-card:nth-child(1),
  .carousel-card:nth-child(3) {
    display: none;
  }

  .image-wrapper {
    height: 180px;
  }
}
</style>