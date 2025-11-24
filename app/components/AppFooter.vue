<template>
  <!-- app/components/AppFooter.vue -->
  <footer class="footer">
    <div class="footer__decor--left">
      <img src="/img/footer-decor.svg" alt="" />
    </div>
    <div class="footer__container">
      <div class="footer__body">
        <div class="footer__content">
          <details class="footer__menu menu-footer--mobile">
            <summary class="menu-footer__title">Sitemap</summary>
            <ul class="menu-footer__list">
              <li class="menu-footer__item">
                <a href="#" class="menu-footer__link">Home</a>
              </li>
              <li class="menu-footer__item">
                <a href="#" class="menu-footer__link">About</a>
              </li>
              <li class="menu-footer__item">
                <a href="#" class="menu-footer__link">Products</a>
              </li>
              <li class="menu-footer__item">
                <a href="#" class="menu-footer__link">Services</a>
              </li>
            </ul>
          </details>
          <div class="footer__menu menu-footer--desktop">
            <h5 class="menu-footer__title">Sitemap</h5>
            <ul class="menu-footer__list">
              <li class="menu-footer__item">
                <a href="#" class="menu-footer__link">Home</a>
              </li>
              <li class="menu-footer__item">
                <a href="#" class="menu-footer__link">About</a>
              </li>
              <li class="menu-footer__item">
                <a href="#" class="menu-footer__link">Products</a>
              </li>
              <li class="menu-footer__item">
                <a href="#" class="menu-footer__link">Services</a>
              </li>
            </ul>
          </div>
          <div class="footer__social social">
            <!-- <a target="_blank" href="#" class="social__item" ></a> -->
            <img src="/img/twitter.svg" alt="icon" class="social__item" />
            <img src="/img/instagram.svg" alt="icon" class="social__item" />
            <img src="/img/tiktok.svg" alt="icon" class="social__item" />
            <img src="/img/medium.png" alt="icon" class="social__item" />
          </div>
        </div>

        <div class="footer__logo"><img src="/img/logo.svg" alt="Logo" /></div>

        <div class="footer__subscribe subscribe">
          <h5 class="subscribe__title">
            Treating all the pets present here like royalty.
          </h5>
          <div class="subscribe__body">
            <form
              @click="isError = !isError"
              action="#"
              class="subscribe__form"
            >
              <input
                data-required="email"
                autocomplete="off"
                name="form[]"
                type="text"
                data-error="Error"
                class="subscribe__input"
                placeholder="Your email"
              />
              <button type="submit" class="subscribe__button button">
                Subscribe
              </button>
              <p v-if="isError" class="subscribe__error">Error</p>
            </form>
          </div>
        </div>
      </div>
      <div class="footer__border">
        <img src="/img/copy-border.svg" alt="" />
      </div>
      <div class="footer__copy">Copyright Dotcreativemarket</div>
    </div>
    <div class="footer__decor--right">
      <img src="/img/footer-decor.svg" alt="" />
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
const isError = ref(false);
</script>

<style lang="scss" scoped>
/* scoped styles */
</style>
