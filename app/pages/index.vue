<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import HeroSection from "../components/HeroSecition.vue";
import { cardInfo } from "../components/card/data/info";
import { useScrollStore } from "../stores/scroll-store";
const scrollStore = useScrollStore();

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
            <img src="@/img/tplr/image.jpg" alt="Image" class="" />
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
            <!-- <input
              data-required="email"
              autocomplete="off"
              name="form[]"
              type="text"
              data-error="Error"
              class="subscribe__input"
              placeholder="Your email"
            /> -->
            <!-- <button type="submit" class="button">Subscribe</button> -->
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
          <CardAppCard :data="cardInfo" class="products__item" />
        </div>

        <a href="#" class="products__button button"><span>Explore</span></a>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped></style>
