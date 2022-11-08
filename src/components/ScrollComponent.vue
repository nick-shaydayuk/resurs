<template>
  <div :class="$bem({})">
    <div :class="$bem({ e: 'section' })"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ScrollComponent",
  setup() {},
});
</script>

<style scoped lang="scss">
.scroll-component {
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  &__section {
    height: 100px;
    width: 200px;
    background-color: red;
  }
}
</style>
