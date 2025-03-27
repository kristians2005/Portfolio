<template>
  <div class="py-16">
    <h2 class="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
    <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <div class="space-y-8">
        <h3 class="text-2xl font-semibold">Let's Talk</h3>
        <p class="opacity-70">
          I'm always open for new opportunities and interesting projects.
          Feel free to reach out if you want to work together!
        </p>
        <div class="space-y-4">
          <div v-for="contact in contactInfo" :key="contact.type"
               class="card bg-base-200 hover:bg-base-300 transition-colors cursor-pointer">
            <div class="card-body flex-row items-center gap-4 p-4">
              <span class="text-2xl text-primary">{{ contact.icon }}</span>
              <div>
                <h4 class="font-medium">{{ contact.type }}</h4>
                <p class="opacity-70">{{ contact.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" v-model="form.name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" v-model="form.email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <textarea v-model="form.message" class="textarea textarea-bordered" rows="5"></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-full">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const contactInfo = [
  { type: 'Email', value: 'your@email.com', icon: '📧' },
  { type: 'Location', value: 'Your City, Country', icon: '📍' },
  { type: 'Phone', value: '+1 234 567 890', icon: '📱' }
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