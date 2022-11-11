<template>
  <HeaderComponent />
  <div class="container">
    <section class="section color" id="main">
      <VMain />
    </section>
    <section class="section color1" id="about">
      <VAbout />
    </section>
    <section class="section color2" id="production">
      <VProduction />
    </section>
    <section class="section color3" id="quality">
      <VQuality />
    </section>
    <section class="section color4" id="contacts">
      <VContacts />
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import VMain from "./components/VMain.vue";
import VAbout from "./components/VAbout.vue";
import VProduction from "./components/VProduction.vue";
import VContacts from "./components/VContacts.vue";
import VQuality from "./components/VQuality.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderComponent,
    VMain,
    VAbout,
    VProduction,
    VContacts,
    VQuality,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import "src/assets/fonts/fonts";
html {
  overflow: initial;
}
#app,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
  z-index: 0;
}
.container {
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: -3;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(199, 199, 199);
    border-radius: 8px;
  }
  scrollbar-width: 14px;
  @media (min-width: 1280px) {
    scroll-snap-type: y mandatory;
  }
}
.section {
  width: 100%;
  scroll-margin-top: 50px;
  @media (min-width: 768px) {
    scroll-margin-top: 90px;
  }
  @media (min-width: 1280px) {
    height: 100vh;
    scroll-snap-align: start;
  }
  &:first-of-type {
    height: 100vh;
  }
}
</style>
