<template>
  <section class="bg-Black">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl blinking-text"
        >
          Computer Science Student
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-Electric-Blue lg:mb-8 md:text-lg lg:text-xl"
        >
          As a Computer Science student at Institut Teknologi Sepuluh Nopember
          and a programmer with the IRIS ITS research team, I am deeply involved
          in innovative projects and research in robotics. My academic journey
          is complemented by hands-on experience in software development, where
          I am actively exploring various aspects of the field. Driven by a
          passion for technology, I continuously seek opportunities to learn and
          grow. In my spare time, I engage in Capture The Flag (CTF) challenges
          and delve into tech articles, fueling my curiosity and enhancing my
          skills.
        </p>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-White rounded-lg bg-Electric-Blue hover:bg-Neon-Pink focus:ring-4 focus:ring-Electric-Blue"
        >
          Contact Me
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <!-- <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="../assets/foto.png" alt="mockup" class="w-1/2" />
      </div> -->
    </div>
  </section>
</template>

<script></script>

<style scoped>
@keyframes blink {
  0% {
    color: #00ffff; /* Electric-Blue */
  }
  50% {
    color: #ff007f; /* Neon-Pink */
  }
  100% {
    color: #00ffff; /* Electric-Blue */
  }
}

.blinking-text {
  animation: blink 1s infinite;
}
</style>
