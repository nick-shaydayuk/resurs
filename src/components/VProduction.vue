<template>
  <div :class="$bem({})">
    <div :class="$bem({ e: 'container' })">
      <h3 :class="$bem({ e: 'heading' })">Продукция</h3>
      <ul :class="$bem({ e: 'list' })">
        <li>Жир животный топленый пищевой свиной в/с</li>
        <li>Жир животный топленый пищевой говяжий в/с</li>
        <li>Жир животный топленый пищевой сборный</li>
        <li>Жир животный топленый пищевой куриный</li>
        <li>Корм неполнорационый — Телячья (говяжья) смесь</li>
        <li>Корм неполнорационый — Части ягненка</li>
        <li>Корм неполнорационый — Части кролика</li>
        <li>Корм неполнорационый — Фарш кролика пром.</li>
        <li>Корм неполнорационый — Измельченный сычуг/рубец</li>
        <li>Корм неполнорационый — Части утки</li>
        <li>Корм неполнорационый — Каркасы индейки</li>
        <li>Легкое свиное в блоках</li>
        <li>Желудок свиной в блоках</li>
        <li>Печень свиная в блоках</li>
        <li>Почки говяжьи в блоках</li>
        <li>Селезенки говяжьи в блоках</li>
        <li>Почки свиные в блоках</li>
        <li>Селезенка свиная в блоках</li>
        <li>Трахея свиная в блоках</li>
        <li>Легкое говяжье в блоках</li>
        <li>Печень говяжья в блоках</li>
      </ul>
    </div>
    <div :class="$bem({ e: 'photo-grid' })">
      <img :src="images.photo5.path" :class="$bem({ e: 'photo5' })" />
      <img :src="images.photo6.path" :class="$bem({ e: 'photo6' })" />
      <img :src="images.photo7.path" :class="$bem({ e: 'photo7' })" />
      <img :src="images.photo8.path" :class="$bem({ e: 'photo8' })" />
    </div>
    <div :class="$bem({ e: 'mobile-photo-grid' })">
      <img :src="images.photo6.path" :class="$bem({ e: 'photo6' })" />
      <img :src="images.photo7.path" :class="$bem({ e: 'photo7' })" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "VProduction",
  components: {},
  setup() {
    const images = {
      photo5: {
        path: require("@/assets/photo5.jpg"),
        alt: "img",
      },
      photo6: { path: require("@/assets/photo6.jpg"), alt: "img" },
      photo7: { path: require("@/assets/photo7.jpg"), alt: "img" },
      photo8: { path: require("@/assets/photo8.jpg"), alt: "img" },
    };
    return {
      images,
    };
  },
});
</script>
<style lang="scss">
.v-production {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px 25px 30px;
  gap: 30px;
  background-color: #f5f5f5;
  @media (min-width: 768px) {
    padding: 50px 30px 30px 30px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 30px 30px 30px;
    /* gap: 150px; */
  }
  @media (min-width: 1440px) {
    padding: 80px 230px 30px 230px;
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
    padding-bottom: 32px;
  }
  &__container {
    display: flex;
    flex-direction: column;
  }
  &__list {
    padding-left: 20px;
    li {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 130%;
      color: #333333;
    }
  }
  &__photo-grid {
    display: none;
    @media (min-width: 1280px) {
      display: grid;
      grid-template-columns: repeat(7, 76px);
      grid-template-rows: repeat(7, 106px);
      gap: 30px 30px;
      transform: scale(0.9);
      img {
        border-radius: 40px 0;
        transform: scale(0.9);
      }
    }
    @media (min-width: 1440px) {
      display: grid;
      grid-template-columns: repeat(7, 88px);
      grid-template-rows: repeat(7, 122px);
      gap: 30px 30px;
      transform: scale(1);
      img {
        border-radius: 40px 0;
        transform: scale(1);
      }
    }
  }
  &__mobile-photo-grid {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    img {
      width: 100%;
      border-radius: 40px 0;
      @media (min-width: 768px) {
        width: 339px;
      }
      @media (min-width: 1024px) {
        width: 100%;
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 30px;
    }
    @media (min-width: 1024px) {
      flex-direction: column;
      justify-content: flex-start;
      max-width: 466px;
    }
    @media (min-width: 1280px) {
      display: none;
    }
  }
  &__photo5 {
    grid-column: 1/4;
    grid-row: 1/4;
    width: 322px;
    height: 424px;
  }
  &__photo6 {
    grid-column: 4/7;
    grid-row: 1/3;
    width: 440px;
    height: 280px;
  }
  &__photo7 {
    grid-column: 1/4;
    grid-row: 4/7;
    width: 440px;
    height: 280px;
  }
  &__photo8 {
    grid-column: 5/7;
    grid-row: 3/7;
    width: 322px;
    height: 424px;
  }
}
</style>
