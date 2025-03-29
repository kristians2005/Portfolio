<script setup lang="ts">
import BackGround from './components/BackGround.vue';
import Introduction from './components/Introduction.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="min-h-screen " >
    <BackGround />
    <Navbar />
    <main class="">
      <div class="flex flex-col gap-32">
        <section id="home" class="min-h-[90vh] flex items-center">
          <Introduction />
        </section>
        
        <section id="about" class="min-h-[80vh] flex items-center">
          <About />
        </section>

        <section id="projects" class="min-h-[90vh]">
          <Projects />
        </section>

        <section id="skills" class="min-h-[80vh]">
          <Skills />
        </section>

        <section id="contact" class="min-h-[80vh]">
          <Contact />
        </section>
      </div>
    </main>
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>© 2024 - All rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
}

body {
  font-family: 'Poppins', sans-serif;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--b2));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--p));
  border-radius: 5px;
}
</style>