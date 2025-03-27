<template>
  <div class="flex items-center justify-center w-full min-h-screen px-4">
    <div class="max-w-6xl w-full bg-base-100 p-6 md:p-12 rounded-2xl shadow-xl" data-aos="fade-up">
      <div class="space-y-6 md:space-y-8 text-center md:text-left">
        <div class="space-y-3 md:space-y-4">
          <p class="text-primary text-sm md:text-base font-medium tracking-wide uppercase" data-aos="fade-right" data-aos-delay="200">
            Welcome to my portfolio
          </p>
          <h1 class="text-4xl md:text-7xl font-bold" data-aos="fade-right" data-aos-delay="400">
            Hi, I'm <span class="text-primary">Kristians Mikelsons</span>
          </h1>
          <h2 class="text-xl md:text-4xl opacity-80 font-light" data-aos="fade-right" data-aos-delay="600">
            Full-Stack Web Developer
          </h2>
        </div>

        <p class="text-base md:text-lg opacity-70 leading-relaxed max-w-2xl mx-auto md:mx-0" 
           data-aos="fade-up" 
           data-aos-delay="800">
          Passionate about creating modern, high-performance web applications with seamless user experiences.  
          Specializing in front-end and back-end development, I build scalable, responsive, and intuitive digital solutions.
        </p>

        <div class="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start" 
             data-aos="fade-up" 
             data-aos-delay="1000">
          <a href="#contact" 
             class="btn btn-primary btn-md md:btn-lg group hover:scale-105 transition-transform text-sm md:text-base">
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" 
                 class="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" 
                 viewBox="0 0 20 20" 
                 fill="currentColor">
              <path fill-rule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#projects" 
             class="btn btn-outline btn-primary btn-md md:btn-lg hover:scale-105 transition-transform text-sm md:text-base">
            View My Work
          </a>
        </div>
      </div>
    </div>  
  </div>
</template>
