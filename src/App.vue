<template>
  <ScrollComponent />
</template>

<script>
import { defineComponent } from "vue";
import ScrollComponent from "./components/ScrollComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    ScrollComponent,
  },
  setup() {
    return;
  },
});
</script>

<style>
#app,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
