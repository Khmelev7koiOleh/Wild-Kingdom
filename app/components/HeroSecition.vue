<script setup>
import dog from "../img/hero/dog3.svg";
import dog2 from "../img/hero/dog2.svg";
import cat from "../img/hero/cat.svg";
import cat2 from "../img/hero/cat2-full.svg";
import { ref, watch } from "vue";
// import bg from "../img/hero/bg.jpg";
import bones from "../img/hero/bones.png";
import arrow from "../img/hero/arrow.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  Controller,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const modules = [
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  Controller,
  Thumbs,
];
const slides = [
  { image: dog, title: "Dog" },
  { image: dog2, title: "Dog2" },
  { image: cat, title: "cat" },
  { image: cat2, title: "cat2" },

  // { image: dog, title: "Dog" },
  // { image: bones, title: "bones" },
  // // { image: bg, title: "BG" },
  // { image: arrow, title: "arrow" },
];

const activeIndex = ref(0);
const thumbsSwiper = ref(null);
const mainSwiper = ref(null);
const miniSwiper = ref(null);
// const miniSwiper2 = ref(null);
// const miniSwiper3 = ref(null);

// const onSwiper = (swiper) => {
//   mainSwiper.value = swiper;
// };
const bindSwipers = () => {
  if (mainSwiper.value && miniSwiper.value) {
    mainSwiper.value.controller.control = [miniSwiper.value];

    miniSwiper.value.controller.control = mainSwiper.value;
  }
};
const onMiniClick = (swiper) => {
  const index = swiper.clickedIndex;
  if (index != null) {
    mainSwiper.value.slideToLoop(index);
  }
};
const onMainSwiper = (swiper) => {
  mainSwiper.value = swiper;
  bindSwipers();
};

const onMiniSwiper = (swiper) => {
  miniSwiper.value = swiper;
  bindSwipers();
  swiper.on("slideChange", () => {
    activeIndex.value = swiper.activeIndex;
    console.log(activeIndex.value);
    console.log(swiper);
  });
};

// const onMiniSwiper2 = (swiper) => {
//   miniSwiper2.value = swiper;
//   bindSwipers();
// };

// const onMiniSwiper3 = (swiper) => {
//   miniSwiper3.value = swiper;
//   bindSwipers();
// };

const slidePrev = () => {
  mainSwiper.value?.slidePrev();
};

const slideNext = () => {
  mainSwiper.value?.slideNext();
};
</script>
<template>
  <div class="wrapper">
    <section class="hero">
      <div class="hero__container">
        <div class="hero__content">
          <h1 class="hero__title">A better world for pets</h1>
          <a href="#" class="hero__button button button--border"
            ><span>Explore</span></a
          >
        </div>

        <div class="hero__swiper-circle">
          <div class="hero__swiper-wrapper">
            <!-- <div class="hero__wrapper swiper-wrapper">
            <div class="hero__slide slide-hero swiper-slide">
              <div class="slide-hero__body">
                <img
                  class="slide-hero__image"
                  src="/img/hero/dog.svg"
                  alt="hero-image"
                />
              </div>
            </div>
          </div> -->
            <!-- navigation
              :pagination="{ clickable: true }" -->

            <!-- :autoplay="{ delay: 3000, disableOnInteraction: false }" -->
            <client-only>
              <swiper
                class="hero__swiper swiper"
                :modules="modules"
                :slides-per-view="1"
                :space-between="0"
                :loop="true"
                :centered-slides="false"
                :slide-to-clicked-slide="true"
                @swiper="onMainSwiper"
                @slideChange="onMainSwiper"
              >
                <swiper-slide
                  class="hero__swiper-slide"
                  v-for="(slide, i) in slides"
                  :key="i"
                >
                  <img
                    class="hero__swiper-image"
                    :src="slide.image"
                    :alt="slide.title"
                  />
                </swiper-slide>
              </swiper>
            </client-only>
          </div>
        </div>
        <div class="hero__controll">
          <button
            @click="slidePrev()"
            type="button"
            class="hero__arrow hero__arrow--left _icon-slider-arrow"
          >
            <img src="../img/hero/arrow-7.png" alt="" />
          </button>

          <button
            @click="slideNext()"
            type="button"
            class="hero__arrow hero__arrow--right _icon-slider-arrow"
          >
            <img src="../img/hero/arrow-6.png" alt="" />
          </button>
        </div>
        <div class="hero__miniswiper-wrapper">
          <client-only>
            <swiper
              class="hero__miniswiper swiper"
              :modules="modules"
              :slides-per-view="3"
              :free-mode="true"
              :watch-slides-progress="true"
              :loop="true"
              :space-between="0"
              :centered-slides="false"
              :slide-to-clicked-slide="true"
              :resistance="false"
              :resistance-ratio="0"
              :touch-release-on-edges="true"
              @swiper="onMiniSwiper"
              @click="onMiniClick"
            >
              <swiper-slide
                v-for="(slide, i) in slides"
                :key="i"
                class="hero__miniswiper-slide"
              >
                <img
                  class="hero__miniswiper-image"
                  :src="slide.image"
                  :alt="slide.title"
                />
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
      </div>
    </section>

    <img class="hero__bg" src="/img/hero/bg.jpg" alt="Hero-Background" />
  </div>
</template>

<style lang="scss" scoped></style>
