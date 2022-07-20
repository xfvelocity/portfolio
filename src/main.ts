import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
//@ts-ignore
import VueFullPage from "vue-fullpage.js";

const vuetify = createVuetify();

createApp(App).use(vuetify).use(VueFullPage).mount("#app");
