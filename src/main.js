import { createBem } from "@vuebits/bem";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/* import Carousel from "v3-carousel"; */

createApp(App)
  .use(
    createBem({
      hyphenate: true,
    })
  )
  /* .use(Carousel) */
  .use(router)
  .mount("#app");
