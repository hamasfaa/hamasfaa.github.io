<template>
  <div
    class="bg-Black text-Electric-Blue m-16 p-20 border-Electric-Blue border-2 shadow-border-shadow flex items-center"
  >
    <div class="w-1/2">
      <img src="../assets/foto.png" alt="" class="" />
    </div>
    <div class="text-content">
      <h1>About Me</h1>
      <p>
        Hello! I'm a creative developer fascinated by the intersection of
        technology and art, especially within the realms of cyberpunk
        aesthetics. My journey in tech has been driven by a passion for creating
        immersive, futuristic experiences that captivate and inspire. With a
        knack for both code and design, I strive to bring visionary ideas to
        life through my work.
      </p>
    </div>
  </div>
</template>

<script setup>
// Script setup area is intentionally left blank for this example
</script>

<style scoped>
@media (max-width: 768px) {
  .flex {
    flex-direction: column;
  }
  .text-content {
    max-width: 100%;
  }
}
</style>
