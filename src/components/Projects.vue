<template>
  <div class="flex items-center justify-center w-full min-h-screen px-3 md:px-4">
    <div class="max-w-6xl w-full bg-base-100 p-4 md:p-12 rounded-2xl shadow-xl" data-aos="fade-up">
      <h2 class="text-3xl md:text-6xl font-bold mb-8" data-aos="fade-right" data-aos-delay="200">{{ t('projects.title') }}</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="project.title" 
             class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300"
             :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
             :data-aos-delay="300 + (index * 100)">
          <figure class="relative h-48">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 
                        bg-primary bg-opacity-40 flex items-center justify-center gap-4">
              <a :href="project.demo" target="_blank" class="btn btn-sm">Live Demo</a>
              <a :href="project.github" target="_blank" class="btn btn-sm btn-primary">GitHub</a>
            </div>
          </figure>
          <div class="card-body p-4 md:p-6">
            <h3 class="card-title text-xl md:text-2xl">{{ project.title }}</h3>
            <p class="opacity-70">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span v-for="tech in project.technologies" :key="tech"
                    class="badge badge-primary">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { t } from '../locales/storeTranslations';
import omori from '../assets/omori.png'

const projects = [
    {
    title: 'will add projects later',
    description: 'coming',
    image: omori,
    demo: '#',
    github: '#',
    technologies: ['Vue.js', 'Tailwind CSS', 'Vite']
  }
];
</script>