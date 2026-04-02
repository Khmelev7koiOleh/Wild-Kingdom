<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import HeroSection from "../components/HeroSecition.vue";
import { cardInfo } from "../components/card/data/products-info";
import { galleryInfo } from "../components/card/data/gallery-info";
import { useScrollStore } from "../stores/scroll-store";

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
  {
    img: "../img/icons/paw.svg",
    text: "lorem ipsumeee lorem  lorem ipsumeee lorem  lorem ipsumeee lorem  lorem ipsumeee lorem lorem ipsumeee lorem  lorem ipsumeee lorem ipsumeee lorem ipsumeee lorem ipsumeeelorem ipsumeee lorem ipsumeee lorem ipsumeee lorem ipsumeee",

    author: "Klein Morreti",
  },
  {
    img: "../img/icons/paw.svg",
    text: "lorem ipsumeee lorem ipsumeee lorem ipsumeee lorem ipsumeeelorem ipsumeee lorem ipsumeee lorem ipsumeee lorem lorem ipsumeee lorem lorem ipsumeee lorem lorem ipsumeee lorem lorem ipsumeee lorem  lorem ipsumeee lorem ipsumeee",

    author: "Dunn Smith",
  },
  {
    img: "../img/icons/paw.svg",
    text: "lorem ipsumeee lorem ipsumeee lorem ipsumeee lorem ipsumeeelorem ipsumeee lorem ipsumeee lorem ipsumeee lorem lorem ipsumeee lorem lorem ipsumeee lorem lorem ipsumeee lorem lorem ipsumeee lorem lorem ipsumeee lorem lorem ipsumeee lorem  ipsumeee",

    author: "Daly Simone",
  },
  {
    img: "../img/icons/paw.svg",
    text: "lorem ipsumeee lorem ipsumeee lorem ipsumeee lorem ipsumeeelorem ipsumeee lorem ipsumeee  lorem ipsumeee lorem ipsumeee",

    author: "Leonard Mitchell",
  },
];
const scrollStore = useScrollStore();

const reviewSwiper = ref();

const onReviewClick = (swiper) => {
  const index = swiper.clickedIndex;
  if (index != null) {
    onReviewSwiper.value.slideToLoop(index);
  }
};
const onReviewSwiper = (swiper) => {
  reviewSwiper.value = swiper;
};
const slidePrev = () => {
  reviewSwiper.value?.slidePrev();
  console.log("prev");
};

const slideNext = () => {
  reviewSwiper.value?.slideNext();
  console.log("next");
};

// let wrapper = ref<HTMLElement | null>(null);

// onMounted(() => {
//   wrapper.value = document.getElementById("wrapper");

//   const handleScroll = () => {
//     scrollStore.someState = wrapper.value?.scrollTop || 0;
//   };

//   wrapper.value?.addEventListener("scroll", handleScroll);
// });

const handleScroll = () => {
  scrollStore.someState = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div id="wrapper" class="wrapper">
    <main class="page">
      <HeroSection />
    </main>
    <!-- <h1>Welcome to my index page!</h1> -->
    <section class="about-us">
      <div class="about-us__container">
        <div class="about-us__body">
          <div class="about-us__image">
            <img src="@/img/tplr/image.jpg" alt="Image" />
          </div>

          <div class="block-header">
            <h2 class="block-header__label">About us</h2>
            <div class="block-header__title">Treating pet like Royalty</div>
            <div class="block-header__text">
              <blockquote>“They’re not just pets, they’re family”</blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                aliquam mi id augue ultrices, in tempus elit tristique. Aliquam
                ultrices sem non.
              </p>
            </div>

            <a href="#" class="block-header__button button"
              ><span>Explore</span></a
            >
          </div>
        </div>
        <div class="about-us__services services-about-us">
          <div class="services-about-us__item">
            <div class="services-about-us__icon">
              <img src="@/img/icons/icon1.svg" alt="" />
            </div>
            <div class="services-about-us__label">Pet food</div>
          </div>
          <div class="services-about-us__item">
            <div class="services-about-us__icon">
              <img src="@/img/icons/icon2.svg" alt="" />
            </div>
            <div class="services-about-us__label">Pet care</div>
          </div>
          <div class="services-about-us__item">
            <div class="services-about-us__icon">
              <img src="@/img/icons/icon3.svg" alt="" />
            </div>
            <div class="services-about-us__label">Pet accessories</div>
          </div>
        </div>
      </div>
    </section>
    <section class="products">
      <div class="products__container">
        <div class="products-block-header block-header block-header--center">
          <h2 class="block-header__label">Our Products</h2>
          <div class="block-header__title">For all your pet needs</div>
          <div class="block-header__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              aliquam mi id augue ultrices, in tempus elit.
            </p>
          </div>
        </div>
        <div class="products__items">
          <CardAppProductsCard :data="cardInfo" class="products__item" />
        </div>

        <a href="#" class="products__button button"><span>Explore</span></a>
      </div>
    </section>

    <section class="services">
      <!-- <img
        src="../img/services/decor.svg"
        alt=""
        class="services__decor--right"
      /> -->
      <img
        src="/img/services/decor.svg"
        alt=""
        class="services__decor--right"
      />
      <div class="services__container">
        <div class="services__body">
          <div class="services__image">
            <img src="/img/services/cat.jpg" alt="Image" class="" />
          </div>

          <div class="services__block-header block-header block-header--white">
            <h2 class="block-header__label">our services</h2>
            <div class="block-header__title">
              Quality Things for Loving Pets
            </div>
            <div class="block-header__text">
              <blockquote>“More than a Pet Store…”</blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                aliquam mi id augue ultrices, in tempus elit tristique. Aliquam
                ultrices sem non.
              </p>
            </div>

            <a href="#" class="services__button button button--border"
              ><span>Explore </span></a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="gallery__container">
        <CardAppGalleryCard
          v-for="(item, i) in galleryInfo"
          :key="i"
          :data="item"
        />
      </div>
    </section>
    <section class="contacts">
      <div class="contacts__container">
        <div class="contacts__media media-contacts">
          <div class="media-contacts__images">
            <div class="media-contacts__block-image">
              <img
                src="../img/contacts/img1.jpg"
                alt="Image"
                class="media-contacts__img"
              />
            </div>
            <div class="media-contacts__block-image">
              <a href="#" class="media-contacts__play">
                <span>
                  <img src="../img/contacts/play.svg" alt="play video" />
                </span>
              </a>
              <img
                src="../img/contacts/img2.jpg"
                alt="Image"
                class="media-contacts__img"
              />
            </div>
          </div>

          <!-- <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="media-contacts__play _icon-play"
            >...</a
          > -->
        </div>

        <div class="contacts__block-header block-header">
          <h2 class="block-header__label">Contact us</h2>
          <div class="block-header__title">
            Come for the care, leave with a smile
          </div>
          <!-- <div class="block-header__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              aliquam mi id augue ultrices, in tempus elit.
            </p>
          </div> -->

          <address class="block-header__contacts contacts-items">
            <ul class="contacts-items__item -icon-clock">
              <li>Mon - Fri: 9:00 - 23:00</li>
              <li>Sat - Sun: 9:00 - 21:00</li>
            </ul>

            <ul class="contacts-items__item -icon-location">
              <li><a href="tel:+012-345-6789">+012-345-6789</a></li>
              <li>
                <a href="mailto:TheWildKingdom@contact.com"
                  >TheWildKingdom@contact.com</a
                >
              </li>
              <li>9889 Lorem Ipsum street, Pellentesque, CA, USA</li>
            </ul>
          </address>
          <a href="#" class="block-header__button button"
            ><span>Explore </span></a
          >
        </div>
      </div>
    </section>

    <section class="reviews">
      <div class="reviews__container">
        <div class="reviews__controll">
          <button
            @click="slidePrev()"
            type="button"
            class="reviews__arrow reviews__arrow--left _icon-slider-arrow"
          >
            <img src="../img/hero/arrow-7.png" alt="" />
          </button>

          <button
            @click="slideNext()"
            type="button"
            class="reviews__arrow reviews__arrow--right _icon-slider-arrow"
          >
            <img src="../img/hero/arrow-6.png" alt="" />
          </button>
        </div>

        <client-only>
          <swiper
            class="reviews__swiper swiper"
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            :centered-slides="false"
            :slide-to-clicked-slide="true"
            @swiper="onReviewSwiper"
            @slideChange="onReviewClick"
          >
            <swiper-slide
              class="reviews__swiper-slide"
              v-for="(slide, i) in slides"
              :key="i"
            >
              <div class="reviews__icon">
                <img :src="slide.img" alt="icon" />
              </div>

              <blockquote class="reviews__item">
                <div class="text">
                  <p>{{ slide.text }}</p>
                </div>

                <cite class="reviews__author">{{ slide.author }}</cite>
              </blockquote>
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped></style>
