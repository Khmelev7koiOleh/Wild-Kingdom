<script setup>
import dog from "../img/hero/dog3.svg";
import dog2 from "../img/hero/dog2.svg";
import cat from "../img/hero/cat.svg";
import cat2 from "../img/hero/cat2-full.svg";
import { ref, watch } from "vue";


const images = ref([
  { image: dog, title: "Dog" },
  { image: dog2, title: "Dog2" },
  { image: cat, title: "Cat" },
  { image: cat2, title: "Cat2" },
]);

function next() {
  images.value.push(images.value.shift());
}
function prev() {
  images.value.unshift(images.value.pop());
}

function rotateTo(index) {
  const arr = [...images.value];

  // move clicked item to front
  const newArr = [...arr.slice(index), ...arr.slice(0, index)];

  images.value = newArr;
}
</script>
<template>
  <div class="wrapper">
    <section class="hero">
      <div class="hero__container">
        <div class="hero__content">
          <h1 class="hero__title">A better world <br> for pets</h1>
          <a href="#" class="hero__button button button--border"
            ><span>Explore</span></a
          >
        </div>
      

        <!-- /////////// -->

        <div class="gallery">
          <!-- MAIN -->
          <div class="gallery__main">
            <img
              :src="images[0].image"
              :alt="images[0].title"
            />
          </div>

          <!-- THUMBS -->
          <div class="gallery__thumbs">
            <div
              v-for="(item, i) in images"
              :key="i"
              class="gallery__thumb"
              :class=" { active:  i === 0 }" "

              @click="rotateTo(i)"
            >
              <img :src="item.image" :alt="item.title" />
            </div>
          </div>
        </div>
       
      </div>
      <div class="gallery__controll">
        <button
          @click="prev()"
          type="button"
          class="gallery__arrow gallery__arrow--left _icon-slider-arrow"
        >
          <img src="../img/hero/arrow-7.png" alt="" />
        </button>

        <button
          @click="next()"
          type="button"
          class="gallery__arrow gallery__arrow--right _icon-slider-arrow"
        >
          <img src="../img/hero/arrow-6.png" alt="" />
        </button>
      </div>
    </section>

    <img class="hero__bg" src="/img/hero/bg.jpg" alt="Hero-Background" />
  </div>
</template>

<style lang="scss" scoped></style>
