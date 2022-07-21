<template>
  <v-app>
    <div
      v-if="hideSensitiveData"
      class="notice text-center white--text grey darken-3 py-2"
    >
      This site is in public viewing mode. Some functionality may be disabled.
    </div>

    <transition name="slide-fade-top" appear>
      <Nav :windowWidth="windowWidth" />
    </transition>

    <v-main>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <component
          class="section fp-autoheight"
          :id="page.id"
          v-for="page in pages"
          :is="page.component"
          :info="page.info"
          :in-view="page.inView"
          :windowWidth="windowWidth"
          :key="page.id"
        />
      </full-page>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {
  FullPageOptions,
  OnLeaveDestination,
  Page,
} from "./shared/types/app.types";
import { pageData } from "./shared/data/app.data";

import Home from "./pages/home/Home.vue";
import About from "./pages/about/About.vue";
import Projects from "./pages/projects/Projects.vue";
import Contact from "./pages/contact/Contact.vue";
import Nav from "./components/nav/Nav.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
    About,
    Projects,
    Contact,
    Nav,
  },
  setup() {
    const options: FullPageOptions = {
      licenseKey: import.meta.env.VITE_FULL_PAGE_LICENSE_KEY,
      scrollingSpeed: 1000,
      onLeave: (origin, destination) => setInView(origin, destination),
    };
    const hideSensitiveData: boolean =
      import.meta.env.VITE_HIDE_SENSITIVE_DATA === "true";
    const pages = ref<Page[]>([...pageData]);

    const windowWidth = ref<number>(0);

    onMounted(() => {
      if (hideSensitiveData) document.title = "Alex | Portfolio";
      else document.title = "Alex Long | Portfolio";

      pages.value[0].inView = true;

      windowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
      });
    });

    const setInView = (origin: any, destination: OnLeaveDestination): void => {
      const activeSlideID: string = destination.item.id;
      const matchingSlide: Page | undefined = pages.value.find(
        (page) => page.id === activeSlideID
      );

      if (matchingSlide) {
        pages.value.forEach((page) => (page.inView = false));
        matchingSlide.inView = true;
      }

      console.log(destination, pages.value);
    };

    return {
      options,
      windowWidth,
      hideSensitiveData,
      pages,
    };
  },
});
</script>

<style lang="scss">
@import "./scss/main.scss";

.notice {
  position: fixed;
  width: 100%;
  z-index: 10;
  font-size: 14px;
}
</style>
