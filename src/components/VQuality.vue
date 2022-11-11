<template>
  <div :class="$bem({})">
    <div :class="$bem({ e: 'container' })">
      <h3 :class="$bem({ e: 'heading' })">Качество</h3>
      <p :class="$bem({ e: 'text' })">
        На предприятии большое внимание уделяется вопросам качества выпускаемой
        продукции посредством сотрудничества технологов предприятия и
        специалистов по качеству со стороны покупателей с аудиторами,
        специалистами НИИ и сертификационных органов.
      </p>
      <div :class="$bem({ e: 'absolute-container' })">
        <div :class="$bem({ e: 'photo-container' })">
          <template v-for="image in images" v-bind:key="image">
            <div :class="$bem({ e: 'photo' })">
              <img :src="image.path" :alt="image.path" />
            </div>
          </template>
        </div>
      </div>
    </div>
    <div :class="$bem({ e: 'quality-image-container' })">
      <img
        :src="qualityImage.path"
        :alt="qualityImage.path"
        :class="$bem({ e: 'quality-img' })"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VQuality",
  components: {},
  setup() {
    const images = [
      {
        path: require("@/assets/photo9.jpg"),
        alt: "img",
      },
      { path: require("@/assets/photo10.jpg"), alt: "img" },
    ];
    const qualityImage = {
      path: require("@/assets/quality.jpg"),
      alt: "qualityImg",
    };
    return {
      images,
      qualityImage,
    };
  },
});
</script>
<style lang="scss">
.v-quality {
  background: #eaeaea;
  padding: 35px 15px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1024px) {
    flex-direction: row;
    padding-bottom: 20vh;
  }
  @media (min-width: 1280px) {
    padding-top: 50px;
  }
  @media (min-width: 1440px) {
    padding: 35px 230px 25vh 230px;
  }
  &__container {
    display: flex;
    flex-direction: column;
  }
  &__heading {
    font-family: "Oswald", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: #333333;
    margin: 0;
  }
  &__absolute-container {
    display: block;
    @media (min-width: 1280px) {
      position: relative;
    }
  }
  &__photo-container {
    display: flex;
    flex-direction: row;
    gap: 30px;
    @media (min-width: 1280px) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
    }
  }
  &__photo {
    img {
      width: 158px;
      @media (min-width: 768px) {
        width: 216px;
      }
      @media (min-width: 1280px) {
        width: 283px;
      }
      @media (min-width: 1440px) {
        width: 322px;
      }
    }
  }
  &__text {
    display: inline-block;
    width: 100%;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    color: #333333;
    padding: 20px 0 30px;
    margin: 0;
    @media (min-width: 1024px) {
      max-width: 467px;
    }
  }
  &__quality-image-container {
    display: none;
    @media (min-width: 1024px) {
      display: block;
      width: 467px;
      height: 394px;
      position: relative;
      margin-top: 10px;
    }
    @media (min-width: 1280px) {
      width: 699px;
      height: 590px;
    }
    @media (min-width: 1280px) {
      width: 792px;
      height: 590px;
    }
  }
  &__quality-img {
    width: 100%;
    height: 100%;
    border-radius: 40px 0;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
