<template>
  <div class="flex items-center justify-center w-full min-h-screen px-3 md:px-4">
    <div class="max-w-6xl w-full bg-base-100 p-4 md:p-12 rounded-2xl shadow-xl" data-aos="fade-up">
      <h2 class="text-3xl md:text-6xl font-bold mb-8" data-aos="fade-right" data-aos-delay="200">{{ t('skills.title') }}</h2>
      
      <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="300">
        <li v-for="skill in skills" :key="skill" 
            class="flex items-center gap-3 p-4 bg-base-200 rounded-lg hover:bg-base-300 transition-colors">
          <span class="text-2xl">{{ getSkillIcon(skill) }}</span>
          <span class="font-medium">{{ skill }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { t } from '../locales/storeTranslations';

const skills = [
  'React',
  'Vue',
  'Laravel',
  'PHP',
  'TypeScript',
  'Tailwind',
  'Git',
  'Jira'
];

const getSkillIcon = (skill: string): string => {
  const icons: Record<string, string> = {
    'React': '⚛️',
    'Vue': '💚',
    'Laravel': '🔥',
    'PHP': '🐘',
    'TypeScript': '📘',
    'Tailwind': '🎨',
    'Git': '📦',
    'Jira': '📋'
  };
  return icons[skill] || '🔧';
};
</script>