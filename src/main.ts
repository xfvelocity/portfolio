//@ts-ignore
import VueFullPage from "vue-fullpage.js";

import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
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
