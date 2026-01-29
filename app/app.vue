<template>
  <div class="wrapper">
    <div><AppHeader /></div>

    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>

    <div><AppFooter /></div>
  </div>
</template>

<script setup>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<style scoped></style>
