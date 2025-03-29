<template>
  <div class="flex items-center justify-center w-full min-h-screen px-3 md:px-4">
    <div class="max-w-6xl w-full bg-base-100 p-4 md:p-12 rounded-2xl shadow-xl" data-aos="fade-up">
      <h2 class="text-3xl md:text-6xl font-bold mb-8" data-aos="fade-right" data-aos-delay="200">Skills & Technologies</h2>
      <div class="grid gap-8">
        <div v-for="(category, index) in skillCategories" :key="category.name" 
             class="card bg-base-200 hover:shadow-lg transition-all duration-300"
             :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
             :data-aos-delay="300 + (index * 100)">
          <div class="card-body p-4 md:p-8">
            <h3 class="card-title text-2xl gap-3">
              <span class="text-primary">{{ category.icon }}</span>
              {{ category.name }}
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div v-for="skill in category.skills" :key="skill.name"
                   class="card bg-base-300 p-4 hover:bg-base-200 transition-colors">
                <div class="flex items-center gap-3">
                  <img :src="skill.icon" :alt="skill.name" class="w-6 h-6">
                  <div class="w-full">
                    <h4 class="font-medium">{{ skill.name }}</h4>
                    <progress class="progress progress-primary w-full mt-2" 
                             :value="skill.level" max="100"></progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skillCategories = [
  {
    name: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'Vue.js', level: 90, icon: '/vue-icon.svg' },
      { name: 'React', level: 85, icon: '/react-icon.svg' },
      { name: 'TypeScript', level: 80, icon: '/ts-icon.svg' },
      { name: 'Tailwind CSS', level: 95, icon: '/tailwind-icon.svg' }
    ]
  },
  {
    name: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 75, icon: '/node-icon.svg' },
      { name: 'Python', level: 70, icon: '/python-icon.svg' },
      { name: 'MongoDB', level: 80, icon: '/mongo-icon.svg' },
      { name: 'SQL', level: 75, icon: '/sql-icon.svg' }
    ]
  },
  {
    name: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 85, icon: '/git-icon.svg' },
      { name: 'Docker', level: 70, icon: '/docker-icon.svg' },
      { name: 'Figma', level: 75, icon: '/figma-icon.svg' },
      { name: 'VS Code', level: 90, icon: '/vscode-icon.svg' }
    ]
  }
];
</script>