<template>
  <nav class="bg-Black">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <RouterLink
        :to="{ name: 'home' }"
        class="flex items-center space-x-3 text-Electric-Blue"
      >
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Hamasah Fatiy Dakhilullah</span
        >
      </RouterLink>
      <button
        @click="isMenuOpen = !isMenuOpen"
        type="button"
        class="inline-flex items-center justify-center p-2 w-10 text-sm text-Electric-Blue md:hidden hover:text-Neon-Pink"
      >
        <svg
          v-if="!isMenuOpen"
          class="menu-icon w-6 h-6"
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
        <svg
          v-else
          class="cross-icon w-6 h-6"
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
      <div
        :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
        class="w-full md:block md:w-auto"
      >
        <ul
          class="flex flex-col font-medium mt-4 rounded-lg bg-Black md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent"
        >
          <li>
            <a
              href="#about"
              class="block py-2 px-3 md:p-0 text-Electric-Blue rounded hover:bg-Electric-Blue hover:text-Black md:hover:bg-transparent md:border-0 md:hover:text-Neon-Pink"
              >About</a
            >
          </li>
          <li>
            <a
              href="#experience"
              class="block py-2 px-3 md:p-0 text-Electric-Blue rounded hover:bg-Electric-Blue hover:text-Black md:hover:bg-transparent md:border-0 md:hover:text-Neon-Pink"
              >Experience</a
            >
          </li>
          <li>
            <a
              href="#projects"
              class="block py-2 px-3 md:p-0 text-Electric-Blue rounded hover:bg-Electric-Blue hover:text-Black md:hover:bg-transparent md:border-0 md:hover:text-Neon-Pink"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="block py-2 px-3 md:p-0 text-Electric-Blue rounded hover:bg-Electric-Blue hover:text-Black md:hover:bg-transparent md:border-0 md:hover:text-Neon-Pink"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const isMenuOpen = ref(false);
    return { isMenuOpen };
  },
};
</script>

<style lang="scss" scoped>
.menu-icon:hover {
  transform: scale(1.1) rotate(-45deg);
  transition: transform 0.3s ease;
  filter: drop-shadow(0 0 8px #ff007f) drop-shadow(0 0 12px #00ffff);
}

.cross-icon:hover {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
  filter: drop-shadow(0 0 8px #ff007f) drop-shadow(0 0 12px #00ffff);
}
</style>
