<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  data: Object,
  index: Number,
});
</script>
<template>
  <article class="gallery-card">
    <div class="gallery-card__container">
      <div class="gallery-card__image">
        <img :src="data?.img" alt="Image" />
      </div>
      <div class="gallery-card__body">
        <div class="gallery-card__link">{{ data?.link }}</div>
        <div class="gallery__img">
          <img src="/img/gallery/arrow.svg" alt="" />
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
