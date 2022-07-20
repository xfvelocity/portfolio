import { createApp } from "vue";
import App from "./App.vue";

import { createVuetify } from "vuetify";
import * as components from "vuetify/lib/components/index";
import * as directives from "vuetify/lib/directives/index";

//@ts-ignore
import VueFullPage from "vue-fullpage.js";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        transparent: "transparent",
      },
      dark: {
        transparent: "transparent",
      },
    },
  },
  breakpoint: {
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1264,
      lg: 1904,
    },
  },
});

createApp(App).use(VueFullPage).use(vuetify).mount("#app");
