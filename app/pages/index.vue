<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import HeroSection from "../components/HeroSecition.vue";
import { cardInfo } from "../components/card/data/products-info";
import { galleryInfo } from "../components/card/data/gallery-info";
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
  </div>
</template>
<style lang="scss" scoped></style>
