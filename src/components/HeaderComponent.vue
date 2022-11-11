<template>
  <header
    :class="$bem({ m: { offTop: headerState || isMobileMenuOpen } })"
    role="banner"
  >
    <div
      :class="
        $bem({ e: 'content', m: { offTop: headerState || isMobileMenuOpen } })
      "
    >
      <div :class="$bem({ e: 'container' })">
        <router-link
          :to="{ path: '/', hash: '#main' }"
          :class="$bem({ e: 'logo' })"
          @click="setIsMobileMenuFalse()"
        >
          <img
            :src="logo.imgPath"
            :alt="logo.imgAlt"
            :class="$bem({ e: 'logo' })"
            v-if="!headerState && !isMobileMenuOpen"
          />
          <img
            :src="alterLogo.imgPath"
            :alt="alterLogo.imgAlt"
            :class="$bem({ e: 'logo' })"
            v-else-if="headerState || isMobileMenuOpen"
          />
        </router-link>
        <div :class="$bem({ e: 'links-container' })">
          <template v-for="link in links" v-bind:key="link">
            <router-link
              :to="{ path: `${link.to}`, hash: `${link.to}` }"
              :class="
                $bem({
                  e: 'link',
                  m: { offTop: headerState || isMobileMenuOpen },
                })
              "
              @click="setIsLinkActive"
            >
              {{ link.name }}
            </router-link>
          </template>
        </div>
        <div
          :class="$bem({ e: 'burger', m: { isOpen: isMobileMenuOpen } })"
          @click="handleMenuClick"
        >
          <svg
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            v-if="!isMobileMenuOpen"
          >
            <path
              :class="$bem({ e: 'svg-path', m: { offTop: headerState } })"
              d="M2 0.5C0.895431 0.5 0 1.39543 0 2.5C0 3.60457 0.895431 4.5 2 4.5V0.5ZM26 4.5C27.1046 4.5 28 3.60457 28 2.5C28 1.39543 27.1046 0.5 26 0.5V4.5ZM2 4.5H26V0.5H2V4.5Z"
            />

            <path
              :class="$bem({ e: 'svg-path', m: { offTop: headerState } })"
              d="M2 11.5C0.895431 11.5 0 12.3954 0 13.5C0 14.6046 0.895431 15.5 2 15.5V11.5ZM26 15.5C27.1046 15.5 28 14.6046 28 13.5C28 12.3954 27.1046 11.5 26 11.5V15.5ZM2 15.5H26V11.5H2V15.5Z"
            />

            <path
              :class="$bem({ e: 'svg-path', m: { offTop: headerState } })"
              d="M2 22.5C0.895431 22.5 0 23.3954 0 24.5C0 25.6046 0.895431 26.5 2 26.5V22.5ZM26 26.5C27.1046 26.5 28 25.6046 28 24.5C28 23.3954 27.1046 22.5 26 22.5V26.5ZM2 26.5H26V22.5H2V26.5Z"
            />
          </svg>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.35355 33.5314L19.3241 16.5608L2.35355 33.5314Z"
            />

            <path
              d="M0.93934 32.1172C0.158291 32.8982 0.158291 34.1646 0.93934 34.9456C1.72039 35.7267 2.98672 35.7267 3.76777 34.9456L0.93934 32.1172ZM20.7383 17.9751C21.5194 17.194 21.5194 15.9277 20.7383 15.1466C19.9573 14.3656 18.691 14.3656 17.9099 15.1466L20.7383 17.9751ZM3.76777 34.9456L20.7383 17.9751L17.9099 15.1466L0.93934 32.1172L3.76777 34.9456Z"
              fill="#30A3E6"
            />

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.64648 16.5312L19.617 33.5018L2.64648 16.5312Z"
            />

            <path
              d="M4.0607 15.117C3.27965 14.336 2.01332 14.336 1.23227 15.117C0.451222 15.8981 0.451222 17.1644 1.23227 17.9455L4.0607 15.117ZM18.2028 34.916C18.9839 35.6971 20.2502 35.6971 21.0313 34.916C21.8123 34.135 21.8123 32.8686 21.0313 32.0876L18.2028 34.916ZM1.23227 17.9455L18.2028 34.916L21.0313 32.0876L4.0607 15.117L1.23227 17.9455Z"
              fill="#30A3E6"
            />
          </svg>
        </div>
      </div>
    </div>
    <div :class="$bem({ e: 'overlay', m: { active: isMobileMenuOpen } })">
      <div :class="$bem({ e: 'overlay-wrapper' })" v-if="isMobileMenuOpen">
        <template v-for="link in links" v-bind:key="link">
          <router-link
            :to="{ path: `${link.to}`, hash: `${link.to}` }"
            :class="
              $bem({
                e: 'link',
                m: { offTop: headerState || isMobileMenuOpen },
              })
            "
            @click="setIsMobileMenuOpen()"
          >
            {{ link.name }}
          </router-link>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {},
  setup() {
    const isLinkActive = ref(false);

    const setIsLinkActive = () => {
      isLinkActive.value = true;
    };

    const headerState = ref(false);

    const setHeaderStateTrue = () => {
      headerState.value = true;
    };
    const setHeaderStateFalse = () => {
      headerState.value = false;
    };

    const isMobileMenuOpen = ref(false);

    const setIsMobileMenuOpen = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };
    const setIsMobileMenuFalse = () => {
      isMobileMenuOpen.value = false;
    };

    const handleMenuClick = () => {
      setIsMobileMenuOpen();
      if (headerState.value) {
        setHeaderStateFalse();
      } else {
        setHeaderStateTrue();
      }
    };

    onMounted(() => {
      const topOfPage = document.querySelector(".container");
      topOfPage.addEventListener("scroll", () => {
        if (topOfPage.scrollTop > 0) {
          setHeaderStateTrue();
        } else {
          setHeaderStateFalse();
        }
      });
    });

    const logo = {
      imgPath: require("@/assets/logo.svg"),
      imgAlt: "logo",
    };

    const alterLogo = {
      imgPath: require("@/assets/alterLogo.svg"),
      imgAlt: "logo",
    };

    const links = [
      {
        name: "О компании",
        to: "#about",
      },
      {
        name: "Продукция",
        to: "#production",
      },
      {
        name: "Качество",
        to: "#quality",
      },
      {
        name: "Контакты",
        to: "#contacts",
      },
    ];

    return {
      logo,
      links,
      setIsLinkActive,
      isLinkActive,
      headerState,
      alterLogo,
      isMobileMenuOpen,
      handleMenuClick,
      setIsMobileMenuOpen,
      setIsMobileMenuFalse,
    };
  },
});
</script>

<style lang="scss">
.header-component {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  height: 77px;
  transition: background-color 0.2s linear;
  @media (min-width: 768px) {
    height: 120px;
  }

  &--offTop {
    border-radius: 0 0 8px 8px;
    background-color: #fff;
    transition: background-color 0.2s linear;
    box-shadow: 0px 2px 4px rgba(102, 102, 102, 0.2);
  }
  &__content {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 25px;
    align-items: center;
  }

  &__logo {
    display: flex;
    align-items: center;
    width: 67px;
    @media (min-width: 768px) {
      width: 100px;
    }
  }
  &__links-container {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 37px;
      margin-right: 55px;
    }
  }
  &__link {
    text-decoration: none;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 130%;
    align-items: center;
    transition: all 0.2s linear;
    border-bottom: 2px solid transparent;
    box-sizing: border-box;
    &:hover {
      border-bottom: 2px solid #fff;
    }

    &--offTop {
      color: #30a3e6;
      transition: all 0.2s linear;
      &:hover {
        border-bottom: 2px solid #30a3e6;
      }
    }
  }
  &__burger {
    width: 28px;
    height: 28px;
    margin-right: 55px;
    &--isOpen {
      width: 24px;
      height: 50px;
    }
    svg {
      fill: #fff;
      width: 100%;
      height: 100%;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
  &__svg-path {
    fill: white;
    &--offTop {
      fill: #30a3e6;
    }
  }
  &__overlay {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 62px;
    left: 0;
    width: 100%;
    height: 0;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    transition: all 0.2s linear;
    &--active {
      visibility: visible;
      opacity: 1;
      transition: all 0.2s linear;
      display: flex;
      height: 100vh;
      background-color: #fff;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
  &__overlay-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 20px;
    padding-top: 30px;
    @media (min-width: 768px) {
      display: none;
    }
  }
}
</style>
