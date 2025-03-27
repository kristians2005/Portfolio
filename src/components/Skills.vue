<template>
  <div class="py-16">
    <h2 class="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
    <div class="grid gap-8">
      <div v-for="category in skillCategories" :key="category.name" 
           class="card bg-base-200 hover:shadow-lg transition-all duration-300">
        <div class="card-body">
          <h3 class="card-title text-2xl gap-3">
            <span class="text-primary">{{ category.icon }}</span>
            {{ category.name }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="skill in category.skills" :key="skill.name"
                 class="card bg-base-300 p-4">
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