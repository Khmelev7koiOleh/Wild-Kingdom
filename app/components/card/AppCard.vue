<script setup lang="ts">
import { ref, computed, toRefs } from "vue";

const props = defineProps(["data"]);
const { data } = toRefs(props);
// const showAddToCart = ref(false);
// const computedStars = computed((rating: number) => {
//   return Math.round(rating);
// });
</script>
<template>
  <article v-for="item in data" :key="item.id" class="product-card">
    <a href="#" class="product-card__link">
      <div class="product-card__header">
        <div class="product-card__image">
          <img :src="item.img" alt="Image" />
        </div>
        <button class="product-card__add-to-card button">
          <span>Add to cart</span>
        </button>
      </div>
    </a>
    <div class="product-card__body">
      <h4 class="product-card__title">{{ item.title }}</h4>
      <div class="product-card__price">${{ item.price }}</div>

      <div class="product-card__rating">
        <img
          v-for="star in 5"
          :key="star"
          class="star"
          :src="
            star <= item.rating ? '../img/star-fill.svg' : '../img/star.svg'
          "
          alt="Star"
        />
      </div>
    </div>
  </article>
</template>

<style scoped></style>
