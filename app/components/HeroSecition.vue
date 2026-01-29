<script setup>
import dog from "../img/hero/dog.svg";
// import bg from "../img/hero/bg.jpg";
import bones from "../img/hero/bones.png";
import arrow from "../img/hero/arrow.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const modules = [Navigation, Pagination, Autoplay, Scrollbar];
const slides = [
  { image: dog, title: "Dog" },

  { image: bones, title: "bones" },
  // { image: bg, title: "BG" },
  { image: arrow, title: "arrow" },
  { image: bones, title: "bones" },
  { image: dog, title: "Dog" },

  // { image: bg, title: "BG" },
  { image: arrow, title: "arrow" },
];
const swiperRef = ref(null);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
const slidePrev = () => {
  swiperRef.value?.slidePrev();
};

const slideNext = () => {
  swiperRef.value?.slideNext();
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
            <client-only>
              <swiper
                class="hero__swiper swiper"
                :modules="modules"
                :slides-per-view="1"
                :space-between="50"
                :autoplay="{ delay: 2000, disableOnInteraction: false }"
                :centered-slides="true"
                :scrollbar="{ draggable: true }"
                :loop="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
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
              :slides-per-view="1"
              :space-between="50"
              :autoplay="{ delay: 2000, disableOnInteraction: false }"
              :centered-slides="true"
              :scrollbar="{ draggable: true }"
              :loop="true"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide
                class="hero__miniswiper-slide"
                v-for="(slide, i) in slides"
                :key="i"
              >
                <img
                  class="hero__miniswiper-image"
                  :src="slide.image"
                  :alt="slide.title"
                />
              </swiper-slide>
              <swiper-slide
                class="hero__miniswiper-slide"
                v-for="(slide, i) in slides"
                :key="i"
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

<style lang="scss" scoped>
:deep(.hero__swiper) {
  width: 100%;
  height: 100%;
}

:deep(.hero__swiper-slide) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  // background: #1aab56;
}
:deep(.hero__swiper-image) {
  // background: #1aab56;
}

// .swiper {
//   display: flex;

//   width: 100%;
//   height: 100%;
//   background: #901616;
//   border-radius: 100%;
// }
</style>
