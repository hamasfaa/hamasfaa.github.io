<template>
  <header class="sticky top-0 bg-Biru-Abu-abu-Gelap shadow-lg w-full">
    <nav
      class="container flex flex-row justify-between items-center text-Turquoise-Muda py-6 w-full"
    >
      <RouterLink
        :to="{ name: 'home' }"
        class="flex gap-3 justify-start items-center px-6"
      >
        <img src="../assets/Logo.png" alt="" class="h-12 w-12" />
      </RouterLink>
      <ul
        class="flex gap-x-16 justify-end items-center px-16 text-Abu-abu-Putih"
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
</template>

<script>
import { RouterLink } from "vue-router";
import { ref } from "vue";
</script>
