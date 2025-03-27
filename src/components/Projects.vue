<template>
  <div class="py-16">
    <h2 class="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects" :key="project.title" 
           class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
        <figure class="relative h-48">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-primary bg-opacity-40
                      flex items-center justify-center gap-4">
            <a :href="project.demo" target="_blank" class="btn btn-sm">Live Demo</a>
            <a :href="project.github" target="_blank" class="btn btn-sm btn-primary">GitHub</a>
          </div>
        </figure>
        <div class="card-body">
          <h3 class="card-title">{{ project.title }}</h3>
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
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with cart functionality and payment integration.',
    image: '/project1.jpg',
    demo: '#',
    github: '#',
    technologies: ['Vue.js', 'Tailwind CSS', 'Node.js']
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: '/project2.jpg',
    demo: '#',
    github: '#',
    technologies: ['React', 'TypeScript', 'Firebase']
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing creative work and skills.',
    image: '/project3.jpg',
    demo: '#',
    github: '#',
    technologies: ['Vue.js', 'Tailwind CSS', 'Vite']
  }
];
</script>