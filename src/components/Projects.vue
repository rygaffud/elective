<template>
  <section id="projects">
    <h2>Projects</h2>

    <div class="projects">
      <div v-for="project in projects" :key="project.id" class="card">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>

        <!-- Idinagdag na Tech Stack Tags -->
        <div class="tech-stack" v-if="project.tech">
          <span v-for="(tech, index) in project.tech" :key="index" class="tech-tag">
            {{ tech }}
          </span>
        </div>

        <!-- Idinagdag na Action Links -->
        <div class="card-links" v-if="project.github || project.demo">
          <a :href="project.github" target="_blank" class="link-btn" v-if="project.github">
            Code
          </a>
          <a :href="project.demo" target="_blank" class="link-btn primary" v-if="project.demo">
            Demo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsSection",
  data() {
    return {
      title: "Projects",
      projects: [
        {
          id: 1,
          name: "Grow a Sanction",
          description:
            "A web-based student sanction management system that tracks disciplinary records and automatically sends email notifications to students and department heads.",
          tech: ["TypeScript", "Express", "Nodemailer"],
          github: "https://github.com",
          demo: "https://demo.com"
        },
        {
          id: 2,
          name: "DiLiGan",
          description:
            "An automated plant irrigation and environmental monitoring system using IoT sensors to maintain optimal soil moisture and temperature levels.",
          tech: ["Arduino / C++", "IoT Sensors", "Embedded Systems"],
          github: "https://github.com",
          demo: "https://demo.com"
        },
        {
          id: 3,
          name: "SMART-TMS",
          description:
            "A smart traffic management system that dynamically adjusts green light duration based on real-time vehicle density.",
          tech: ["Python", "Computer Vision", "Microcontrollers"],
          github: "https://github.com",
          demo: "https://demo.com"
        }
      ]
    };
  }
};
</script>

<style scoped>
#projects {
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

h3 {
  color: #fa47d9;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  border-bottom: 1px solid rgba(250, 71, 217, 0.25);
  padding-bottom: 8px;
}

/* Horizontal Grid Layout */
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  width: 100%;
  align-items: stretch;
}

/* Glass Card Styling matching About and Skills */
.card {
  background: #432b3f69;
  padding: 25px;
  border-radius: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(250, 71, 217, 0.15);
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.card:hover {
  border-color: #fa47d9;
  transform: translateY(-3px);
  background: #432b3f99;
}

.card p {
  color: #ffffff;
  margin: 0;
  line-height: 1.6;
  font-size: 0.95rem;
  text-align: left;
  flex-grow: 1; /* Para mapanatiling naka-push pababa ang tech stack at links */
}

/* Idinagdag na CSS para sa Tech Stack Badges */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
  margin-bottom: 15px;
}

.tech-tag {
  background: rgba(250, 71, 217, 0.15);
  color: #fa47d9;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  border: 1px solid rgba(250, 71, 217, 0.3);
}

/* Idinagdag na CSS para sa Links/Buttons */
.card-links {
  display: flex;
  gap: 10px;
  margin-top: auto;
}

.link-btn {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid rgba(250, 71, 217, 0.4);
  transition: all 0.3s ease;
}

.link-btn:hover {
  background: rgba(250, 71, 217, 0.2);
  border-color: #fa47d9;
}

.link-btn.primary {
  background: #fa47d9;
  border-color: #fa47d9;
}

.link-btn.primary:hover {
  background: #d633b5;
}

/* ===================================================
   RESPONSIVE MEDIA QUERIES (Mobile, Tablet, Desktop)
   =================================================== */

/* Tablets & Small Laptops (1024px pababa) */
@media screen and (max-width: 1024px) {
  .projects {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 18px;
  }
}

/* Mobile Devices (768px pababa) */
@media screen and (max-width: 768px) {
  #projects {
    padding: 30px 15px;
  }

  h2 {
    font-size: 1.85rem;
    margin-bottom: 20px;
  }

  .projects {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card {
    padding: 20px;
  }

  h3 {
    font-size: 1.15rem;
  }

  .card p {
    font-size: 0.9rem;
  }
}

/* Small Smartphones (380px pababa) */
@media screen and (max-width: 380px) {
  #projects {
    padding: 20px 10px;
  }

  .card {
    padding: 15px;
  }
}
</style>