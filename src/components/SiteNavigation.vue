<template>
  <header class="sticky top-0 bg-Biru-Abu-abu-Gelap w-full z-10">
    <nav
      class="container flex flex-row justify-between items-center text-Turquoise-Muda py-6 w-full"
    >
      <RouterLink
        :to="{ name: 'home' }"
        class="flex gap-3 justify-start items-center px-6"
      >
        <img src="../assets/Logo.png" alt="" class="h-12 w-12" />
      </RouterLink>
      <button @click="isMenuOpen = !isMenuOpen" class="sm:hidden px-6">
        <!-- Menu Icon (Hamburger) -->
        <svg
          v-if="!isMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
        <!-- Cross Icon -->
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <ul
        class="hidden sm:flex gap-x-16 justify-end items-center px-16 text-Abu-abu-Putih"
      >
        <li><a href="#about" class="hover:text-Turquoise-Muda">About</a></li>
        <li>
          <a href="#experience" class="hover:text-Turquoise-Muda">Experience</a>
        </li>
        <li>
          <a href="#projects" class="hover:text-Turquoise-Muda">Projects</a>
        </li>
        <li>
          <a href="#contact" class="hover:text-Turquoise-Muda">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  <ul
    :class="[
      isMenuOpen ? 'flex flex-col' : 'hidden',
      'gap-y-4',
      'items-center',
      'px-6',
      'text-Abu-abu-Putih',
      'sm:hidden',
      'mt-[-1px]',
      'bg-Biru-Abu-abu-Gelap',
      'z-0',
    ]"
  >
    <li><a href="#about" class="hover:text-Turquoise-Muda">About</a></li>
    <li>
      <a href="#experience" class="hover:text-Turquoise-Muda">Experience</a>
    </li>
    <li>
      <a href="#projects" class="hover:text-Turquoise-Muda">Projects</a>
    </li>
    <li>
      <a href="#contact" class="hover:text-Turquoise-Muda">Contact</a>
    </li>
  </ul>
</template>

<script>
import { RouterLink } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const isMenuOpen = ref(false); // State to control menu visibility on small screens
    return { isMenuOpen };
  },
};
</script>
