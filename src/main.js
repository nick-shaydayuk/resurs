import { createBem } from "@vuebits/bem";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(
    createBem({
      hyphenate: true,
    }),
    router
  )
  .mount("#app");
