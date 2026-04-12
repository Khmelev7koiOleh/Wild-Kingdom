<script setup>
import { onMounted, watch, onUnmounted, ref, computed } from "vue";
import { Icon } from "@iconify/vue";
// optional script
import { useScrollStore } from "../stores/scroll-store";
const scrollStore = useScrollStore();

const isOpen = ref(false);

const headerClass = computed(() => ({
  "header--active": scrollStore.someState,
}));

const logoClass = computed(() => ({
  "header__logo--active": scrollStore.someState,
}));
const isMobile = ref(false);

function handleResize() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  handleResize(); // set initial value (client only)
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

watch([isOpen, isMobile], ([open, mobile]) => {
  console.log(open, mobile);
  document.body.classList.toggle("no-scroll", open && mobile);
});
</script>

<template>
  <header class="header" :class="headerClass">
    <div class="header__container">
      <div
        id="mobileMenu"
        class="header__menu menu"
        :class="{ active: isOpen === true }"
      >
        <!-- <button class="button"></button> -->

        <nav class="menu__body">
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link" href="">Home</a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="">About</a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="">Products</a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="">Services</a>
            </li>
          </ul>
          <div class="header__action action-header action-header--mobile">
            <a href="" class="action-header__item">Login</a>
            <a href="" class="action-header__item">Sign up</a>

            <button class="action-header__button button button--border">
              Contact
            </button>
          </div>
        </nav>
      </div>
      <div :class="logoClass" class="header__logo">
        <img id="logo" class="header__logo" src="/img/logo2.svg" />
      </div>

      <div class="header__action action-header action-header--desktop">
        <a href="" class="action-header__item">Login</a>
        <a href="" class="action-header__item">Sign up</a>

        <button class="action-header__button button button--border">
          Contact
        </button>
      </div>

      <button
        id="burgerBtn"
        type="button"
        class="burger__icon icon"
        :class="{ 'burger__icon--active': isOpen }"
        @click="isOpen = !isOpen"
      >
        <Icon icon="radix-icons:hamburger-menu" />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
/* scoped styles */
.text-center {
  text-align: center;
}
</style>
