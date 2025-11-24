// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: "2025-07-15",
//   devtools: { enabled: true },
//   modules: ["@nuxt/eslint", "@nuxt/fonts"],
//   css: ["~/assets/scss/main.scss"],
//   vite: {
//     css: {
//       preprocessorOptions: {
//         scss: {
//           additionalData: `
//           @use "sass:math";
//           @use "@/assets/scss/functions" as *;
//           @use "@/assets/scss/style" as *;
//         `,
//         },
//       },
//     },
//   },
// });

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts"],
  css: ["~/assets/scss/main.scss"],
});
