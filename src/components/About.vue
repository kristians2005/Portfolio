<template>
  <div class="flex items-center justify-center w-full min-h-screen px-3 md:px-4">
    <div class="max-w-6xl w-full bg-base-100 p-4 md:p-12 rounded-2xl shadow-xl" data-aos="fade-up">
      <div class="space-y-4 md:space-y-8">
        <h2 class="text-3xl md:text-6xl font-bold" data-aos="fade-right" data-aos-delay="200">{{ t('about.title') }}</h2>
        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          <div class="space-y-4">
            <p class="text-sm md:text-lg opacity-70 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              {{ t('about.description') }}
            </p>
            <div class="space-y-2" data-aos="fade-up" data-aos-delay="600">
              <p class="flex items-center gap-2 text-sm md:text-lg text-primary">
                <span>📚 {{ t('about.studying') }}</span>
              </p>
            </div>
          </div>
          <div class="card bg-base-200" data-aos="fade-left" data-aos-delay="800">
            <div class="card-body p-4 md:p-8">
              <h3 class="card-title text-xl md:text-3xl mb-2 md:mb-4">{{ t('about.quickFacts') }}</h3>
              <ul class="space-y-2 md:space-y-3">
                <li class="flex space-x-3 md:space-x-5 items-center gap-1 md:gap-2 text-sm md:text-lg">
                  <span class="w-20 md:w-24 opacity-70">{{ t('about.languages') }}</span>
                  <span>{{ t('about.languageList') }}</span>
                </li>
                <li class="flex space-x-3 md:space-x-5 items-center gap-1 md:gap-2 text-sm md:text-lg">
                  <span class="w-20 md:w-24 opacity-70">{{ t('about.hobbies') }}</span>
                  <span>{{ t('about.hobbiesList') }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { t } from '../locales/storeTranslations';
</script>