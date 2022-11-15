<template>
  <div :class="$bem({})">
    <div :class="$bem({ e: 'container' })">
      <div :class="$bem({ e: 'container-contacts' })">
        <h3 :class="$bem({ e: 'heading' })">Контакты</h3>
        <div :class="$bem({ e: 'text-container' })">
          <h3 :class="$bem({ e: 'subheading' })">Адрес:</h3>
          <p :class="$bem({ e: 'text' })">
            142438, Московская область, г. Ногинск, п. Затишье, тер. Технопарк
            Успенский, д. 15
          </p>
        </div>
        <div :class="$bem({ e: 'text-container' })">
          <h3 :class="$bem({ e: 'subheading' })">Телефоны:</h3>
          <a href="tel:+74955890379" :class="$bem({ e: 'text' })"
            >+7 (495) 589 03 79</a
          >
          <a href="tel:+74956461310" :class="$bem({ e: 'text' })"
            >+7 (495) 646 13 10</a
          >
          <a href="tel:+79268789779" :class="$bem({ e: 'text' })"
            >+7 (926) 878 97 79</a
          >
          <a
            href="mailto:Resurs9@mail.ru"
            :class="$bem({ e: 'text', m: 'last' })"
            >Resurs9@mail.ru</a
          >
        </div>
      </div>
      <div :class="$bem({ e: 'image-container' })">
        <img
          :src="contactsImage2.path"
          :alt="contactsImage2.path"
          :class="$bem({ e: 'contacts-img2' })"
        />
        <img
          :src="contactsImage1.path"
          :alt="contactsImage1.path"
          :class="$bem({ e: 'contacts-img1' })"
        />
      </div>
    </div>
    <div :class="$bem({ e: 'map' })">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ade800e65e05ac2fb0b0bc5363ec41cb6674f4b0f165ff2a230251fa3f466222f&amp;source=constructor&amp;scroll=false"
      ></iframe>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VContacts",
  components: {},
  setup() {
    const images = [
      {
        path: require("@/assets/photo1.png"),
        alt: "img",
      },
      { path: require("@/assets/photo2.png"), alt: "img" },
      { path: require("@/assets/photo3.png"), alt: "img" },
      { path: require("@/assets/photo4.png"), alt: "img" },
    ];
    const contactsImage1 = {
      path: require("@/assets/contacts1.jpg"),
      alt: "contacts1Img",
    };
    const contactsImage2 = {
      path: require("@/assets/contacts2.jpg"),
      alt: "contacts2Img",
    };
    return {
      images,
      contactsImage1,
      contactsImage2,
    };
  },
});
</script>
<style lang="scss">
.v-contacts {
  display: flex;
  flex-direction: column;
  max-width: 1380px;
  margin: 0 auto;
  padding: 35px 30px 0;
  @media (min-width: 1280px) {
    box-sizing: border-box;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    padding: 50px 30px 0;
  }

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__container-contacts {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (min-width: 1024px) {
      max-width: 434px;
    }
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
  &__text-container {
    max-width: 675px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  &__subheading {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: #333333;
    padding-bottom: 20px;
    margin: 0;
  }
  &__text {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    color: #333333;
    margin: 0;
    text-decoration: none;
    &--last {
      text-decoration: underline;
      padding-top: 15px;
      display: inline-block;
    }
  }
  &__image-container {
    display: none;
    @media (min-width: 1024px) {
      display: block;
      position: relative;
      width: 467px;
      height: 298px;
      margin-top: 10px;
    }
    @media (min-width: 1280px) {
      width: 700px;
      height: 345px;
    }
    @media (min-width: 1440px) {
      width: 800px;
      height: 345px;
    }
  }
  &__contacts-img2 {
    width: 100%;
    height: 100%;
    border-radius: 40px 0;
    position: absolute;
    top: 0;
    left: 0;
    @media (min-width: 1280px) {
      width: 387px;
      height: 247px;
      z-index: 2;
      top: 50px;
    }
    @media (min-width: 1440px) {
      width: 440px;
      height: 280px;
    }
    @media (min-width: 1600px) {
      top: 100px;
    }
  }
  &__contacts-img1 {
    display: none;
    @media (min-width: 1280px) {
      display: block;
      width: 387px;
      height: 247px;
      border-radius: 40px 0;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }
    @media (min-width: 1440px) {
      width: 440px;
      height: 280px;
    }
  }
  &__map {
    padding-top: 30px;
    width: 100%;
    height: 45vh;
    position: relative;
    bottom: 0;
    @media (min-width: 1280px) {
      position: absolute;
      top: 450vh;
      width: 100vw;
      padding-top: 0;
    }
    @media (min-width: 1440px) {
      top: 445vh;
    }

    left: 0;
    iframe {
      border: none;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
