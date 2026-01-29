<script setup lang="ts">
import HeroSection from "../components/HeroSecition.vue";
</script>

<template>
  <div class="wrapper">
    <main class="page">
      <HeroSection />
    </main>
    <!-- <h1>Welcome to my index page!</h1> -->

    <div class="block-header">
      <h2 class="block-header__label">About us</h2>
      <div class="block-header__title">Treating pet like Royalty</div>
      <div class="block-header__text">
        <blockquote>“They’re not just pets, they’re family”</blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam
          mi id augue ultrices, in tempus elit tristique. Aliquam ultrices sem
          non.
        </p>
      </div>
      <input
        data-required="email"
        autocomplete="off"
        name="form[]"
        type="text"
        data-error="Error"
        class="subscribe__input"
        placeholder="Your email"
      />
      <button type="submit" class="button">Subscribe</button>
      <a href="#" class="block-header__button button">Explore</a>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
