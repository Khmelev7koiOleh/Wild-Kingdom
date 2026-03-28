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
  // { image: dog2, title: "Dog2" },
  // { image: cat, title: "cat" },
  // { image: cat2, title: "cat2" },

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
  miniSwiper.value?.slidePrev();
  console.log("prev");
};

const slideNext = () => {
  miniSwiper.value?.slideNext();
  console.log("next");
};

const computedIsActive = computed(() => isActive);
const activeSlide = ref(null);

const onSlideChange = (swiper) => {
  console.log("Активний індекс:", swiper.activeIndex);
  activeSlide.value = swiper.realIndex;
  // Якщо використовуєте loop: true, краще брати swiper.realIndex
};

// const activeIndex = ref(0)
const getStyle = (i) => {
  const position = (i - activeIndex.value + slides.length) % slides.length;

  if (position === 0) {
    return { transform: "translateX(0) scale(1)", zIndex: 3 };
  }
  if (position === 1) {
    return { transform: "translateX(200px) scale(0.6)", zIndex: 2 };
  }
  if (position === 2) {
    return { transform: "translateX(350px) scale(0.5)", zIndex: 1 };
  }
  if (position === 3) {
    return { transform: "translateX(500px) scale(0.4)", zIndex: 0 };
  }

  return { opacity: 0 };
};
const active = ref(0);
const getPosition = (index) => {
  const total = slides.length; // 4
  let diff = index - active.value;

  // Loop-Korrektur (Kürzester Weg im Kreis)
  if (diff < -total / 2) diff += total;
  if (diff > total / 2) diff -= total;

  if (diff === 0) return "active"; // Slide 1 (550px)
  if (diff === 1) return "next1"; // Slide 2 (123px)
  if (diff === 2) return "next2"; // Slide 3 (123px)

  // 🔴 Der "verlorene" 4. Slide:
  if (diff === 3 || diff === -1) return "next3";

  return "next3"; // Fallback, damit er nie ganz verschwindet
};
const next = () => {
  active.value = (active.value + 1) % slides.length;
};

const prev = () => {
  active.value = (active.value - 1 + slides.length) % slides.length;
};

const translateX = computed(() => {
  return `translateX(-${active.value * 150}px)`;
});
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

        <!-- <div class="hero__swiper-circle">
          <div class="hero__swiper-wrapper">
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
        </div> -->
        <!-- <div class="hero__controll">
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
        </div> -->

        <!-- ////////// -->
        <div class="carousel">
          <div class="carousel__track" :style="{ transform: translateX }">
            <div
              v-for="(slide, i) in slides"
              :key="i"
              class="carousel__item"
              :class="getPosition(i)"
            >
              <img :src="slide.image" />
            </div>
          </div>
          <!-- <div class="controls">
            <button @click="prev">Prev</button>
            <button @click="next">Next</button>
          </div>
        </div> -->
        </div>

        <!-- <div>{{ activeSlide }}</div> -->
        <!-- <div class="hero__miniswiper-wrapper">
          <client-only>
            <swiper
              class="hero__miniswiper swiper"
              :modules="modules"
              :slides-per-view="'4'"
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
              @slideChange="onSlideChange"
            >
              <swiper-slide
                v-for="(slide, i) in slides"
                :key="i"
                class="hero__miniswiper-slide"
                :class="activeSlide === i ? 'active' : ''"
              >
                <img
                  class="hero__miniswiper-image"
                  :src="slide.image"
                  :alt="slide.title"
                />
              </swiper-slide>
            </swiper>
          </client-only>
        </div> -->
      </div>
      <div class="carousel__controll">
        <button
          @click="prev()"
          type="button"
          class="carousel__arrow carousel__arrow--left _icon-slider-arrow"
        >
          <img src="../img/hero/arrow-7.png" alt="" />
        </button>

        <button
          @click="next()"
          type="button"
          class="carousel__arrow carousel__arrow--right _icon-slider-arrow"
        >
          <img src="../img/hero/arrow-6.png" alt="" />
        </button>
      </div>
    </section>

    <img class="hero__bg" src="/img/hero/bg.jpg" alt="Hero-Background" />
  </div>
</template>

<style lang="scss" scoped></style>
