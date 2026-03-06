import { createApp } from "vue";
import App from "./App.vue";
import { useMediaQuery } from "@/composables/mediaQueries";

useMediaQuery();
createApp(App).mount("#app");
