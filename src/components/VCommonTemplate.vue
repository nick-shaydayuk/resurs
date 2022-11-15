<template>
  <div :class="$bem({})">
    <h2 :class="$bem({ e: 'heading' })">
      <slot name="heading"></slot>
    </h2>
    <div :class="$bem({ e: 'column-container' })">
      <div :class="$bem({ e: 'text-container' })">
        <p :class="$bem({ e: 'text' })"><slot name="text1"></slot></p>
        <p :class="$bem({ e: 'text' })"><slot name="text2"></slot></p>
        <p :class="$bem({ e: 'text' })"><slot name="text3"></slot></p>
      </div>
      <div :class="$bem({ e: 'text-container' })">
        <p :class="$bem({ e: 'text' })"><slot name="text4"></slot></p>
        <p :class="$bem({ e: 'text' })"><slot name="text5"></slot></p>
      </div>
    </div>
    <carousel :settings="carouselSettings">
      <slide v-for="image in images" v-bind:key="image">
        <img
          :src="image.path"
          :alt="image.path"
          :class="$bem({ e: 'photo' })"
        />
      </slide>
    </carousel>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default defineComponent({
  name: "VCommonTemplate",
  props: {
    images: {
      path: String,
      alt: String,
    },
  },
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const carouselSettings = {
      itemsToShow: 1.1,
      breakpoints: {
        400: {
          itemsToShow: 1.2,
        },
        768: {
          itemsToShow: 2.2,
        },
        1024: {
          itemsToShow: 2.3,
        },
        1280: {
          itemsToShow: 3.7,
        },
        1440: {
          itemsToShow: 4,
        },
      },
    };
    return {
      carouselSettings,
    };
  },
});
</script>
<style lang="scss">
.v-common-template {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 35px 15px 50px;
  max-width: 1380px;
  margin: 0 auto;
  @media (min-width: 1440px) {
    /* padding: 80px 230px 30px 230px; */
    padding: 80px 30px 0;
    max-width: 1440px;
    margin: 0 auto;
    height: 100vh;
    box-sizing: border-box;
  }
  &__heading {
    font-family: "Oswald", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: #333333;
    margin: 0;
    display: inline-block;
  }
  &__column-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    width: 100%;
    padding-bottom: 36px;
    @media (min-width: 1024px) {
      flex-direction: row;
      padding-bottom: 80px;
      justify-content: flex-start;
    }
    @media (min-width: 1280px) {
      padding-bottom: 36px;
    }
    /* @media (min-width: 1440px) {
      justify-content: space-between;
    } */
  }
  &__text-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
  }
  &__text {
    display: inline-block;
    max-width: 345px;
    width: 100%;
    text-align: left;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    color: #333333;
    margin: 0;
    @media (min-width: 768px) {
      max-width: 675px;
    }
    @media (min-width: 1024px) {
      max-width: 480px;
    }
    @media (min-width: 1280px) {
      max-width: 600px;
    }
    @media (min-width: 1440px) {
      max-width: 675px;
    }
  }
  &__photo-container {
    display: none;
    @media (min-width: 1440px) {
      flex-direction: row;
      width: 100%;
      gap: 30px;
      display: flex;
    }
  }
  &__photo {
    width: 323px;
    border-radius: 40px 0;
    img {
      border-radius: 40px 0;
    }
  }
}
</style>
