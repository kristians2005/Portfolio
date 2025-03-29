<template>
  <div class="flex items-center justify-center w-full min-h-screen px-3 md:px-4">
    <div class="max-w-6xl w-full bg-base-100 p-4 md:p-12 rounded-2xl flex flex-col items-center shadow-xl" data-aos="fade-up">
      <h2 class="text-3xl md:text-6xl font-bold mb-8" data-aos="fade-right" data-aos-delay="200">{{ t('contact.title') }}</h2>
      
      <div class="grid md:grid-cols-3 gap-6 w-full max-w-3xl mb-8" data-aos="fade-up" data-aos-delay="300">
        <div v-for="info in contactInfo" :key="info.type" 
             class="card bg-base-200 p-4 text-center">
          <div class="text-2xl mb-2">{{ info.icon }}</div>
          <div class="font-medium">{{ info.type }}</div>
          <div class="text-sm opacity-70">{{ info.value }}</div>
        </div>
      </div>
        
        <form @submit.prevent="handleSubmit" 
              class="card bg-base-200 w-full max-w-xl p-8 space-y-6 transition-all duration-300 hover:shadow-lg"
              data-aos="fade-left" 
              data-aos-delay="400">
          <div class="form-control space-y-2">
            <label class="text-base font-medium">{{ t('contact.name') }}</label>
            <input type="text" 
                   v-model="form.name" 
                   class="input input-bordered w-full transition-all duration-300 focus:input-primary" 
                   :placeholder="t('contact.namePlaceholder')" />
          </div>
          <div class="form-control space-y-2">
            <label class="text-base font-medium">{{ t('contact.email') }}</label>
            <input type="email" 
                   v-model="form.email" 
                   class="input input-bordered w-full transition-all duration-300 focus:input-primary" 
                   :placeholder="t('contact.emailPlaceholder')" />
          </div>
          <div class="form-control space-y-2">
            <label class="text-base font-medium">{{ t('contact.message') }}</label>
            <textarea v-model="form.message" 
                      class="textarea textarea-bordered w-full transition-all duration-300 focus:textarea-primary" 
                      rows="5"
                      :placeholder="t('contact.messagePlaceholder')"></textarea>
          </div>
          <button type="submit" 
                  class="btn btn-primary w-full transition-all duration-300 hover:scale-[1.02]">
            {{ t('contact.send') }}
          </button>
        </form>
      </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '../locales/storeTranslations';
import { ref } from 'vue';

const contactInfo = [
  { type: t('contact.info.email'), value: 'mikelsons3333@gmail.com', icon: '📧' },
  { type: t('contact.info.location'), value: 'Latvia', icon: '📍' },
  { type: t('contact.info.phone'), value: null, icon: '📱' }
];

const form = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  // Implement form submission logic here
  console.log('Form submitted:', form.value);
};
</script>