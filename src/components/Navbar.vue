<template>
  <div data-aos="fade-right" class="fixed top-0 m-0 z-50">
    <div class="container flex justify-between items-center">
      <!-- Mobile menu -->
      <div class="flex-none md:hidden">
        <button class="btn btn-square btn-ghost" @click="isMenuOpen = !isMenuOpen">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      <!-- Desktop menu -->
      <div class="flex-none hidden md:block">
        <ul class="menu menu-horizontal px-5 gap-2 rounded-br-2xl bg-base-300">  
          <li v-for="item in navItems" :key="item.href">
            <a :href="item.href" 
               class="hover:text-primary transition-colors btn btn-lg btn-base-200"
               :class="{ 'active text-primary': activeSection === item.href.slice(1) }">
              {{ t(`nav.${item.href.slice(1)}`) }}
            </a>
          </li>
          <!-- Language toggle button -->
          <li>
            <button 
              @click="toggleLanguage"
              class="hover:text-primary transition-colors btn btn-lg btn-base-200"
            >
              LV / EN
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mobile menu dropdown -->
    <div v-if="isMenuOpen" class="absolute top-full left-0 w-full bg-base-300 md:hidden py-4">
      <ul class="menu px-4">
        <li v-for="item in navItems" :key="item.href">
          <a :href="item.href" 
             @click="isMenuOpen = false"
             :class="{ 'active text-primary': activeSection === item.href.slice(1) }">
            {{ t(`nav.${item.href.slice(1)}`) }}
          </a>
        </li>
        <!-- Mobile language toggle -->
        <li>
          <button 
            @click="toggleLanguage"
            :class="{ 'active text-primary': false }"
          >
            {{ getCurrentLanguage().toUpperCase() }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { t, changeLanguage, getCurrentLanguage } from '../locales/storeTranslations';

const isMenuOpen = ref(false);
const activeSection = ref('home');

// Add language toggle function
const toggleLanguage = () => {
  const currentLang = getCurrentLanguage();
  changeLanguage(currentLang === 'en' ? 'lv' : 'en');
};

const navItems = [
  { href: '#home' },
  { href: '#about' },
  { href: '#projects'},
  { href: '#skills'},
  { href: '#contact' },
];

const updateActiveSection = () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition && 
        section.offsetTop + section.offsetHeight > scrollPosition) {
      activeSection.value = section.getAttribute('id') || 'home';
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
});
</script>