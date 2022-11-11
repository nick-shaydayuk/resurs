<template>
  <div :class="$bem({})">
    <div :class="$bem({ e: 'text-container' })">
      <div :class="$bem({ e: 'heading-container' })">
        <h1 :class="$bem({ e: 'heading' })">
          Производим
          <span :class="$bem({ e: 'heading-span' })"
            >продовольственное сырьё</span
          >
          с 2009 года
        </h1>
      </div>
      <p :class="$bem({ e: 'description' })">
        Производство пищевых топленых животных жиров (ГОСТ 25292–82) и блоков
        замороженных субпродуктов /мясных миксов для мясоперерабатывающих и
        косметических производств Российской Федерации
      </p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VMain",
  components: {},
  setup() {},
});
</script>
<style lang="scss">
.v-main {
  width: 100%;
  height: 100%;
  background-image: url(../assets/MainImage.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  &__text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 150px 15px 0;
    @media (min-width: 768px) {
      padding: 200px 30px 0;
    }
    @media (min-width: 1024px) {
      padding: 200px 30px 0;
      flex-direction: row;
      align-items: flex-end;
    }
  }
  &__heading-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
  &__heading {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    color: #ffffff;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
    display: inline-block;
    max-width: 300px;
    width: 100%;
    @media (min-width: 768px) {
      max-width: 500px;
      font-size: 46px;
    }
    @media (min-width: 1024px) {
      max-width: 675px;
      font-size: 52px;
    }
  }
  &__heading-span {
    color: #3399cc;
  }
  &__description {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    color: #ffffff;
    display: inline-block;
    max-width: 300px;
    width: 100%;
    text-align: start;
    @media (min-width: 768px) {
      padding-top: 70px;
      max-width: 595px;
    }
    @media (min-width: 1024px) {
      padding-top: 300px;
      max-width: 595px;
    }
  }
}
</style>
