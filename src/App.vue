<template>
  <v-app id="app">
    <div
      v-if="hideSensitiveData"
      class="text-center white--text grey darken-3 py-2"
      style="position: fixed; width: 100%; z-index: 10; font-size: 14px"
    >
      This site is in public viewing mode. Some functionality may be disabled.
    </div>
    <transition name="slide-fade-top" appear>
      <Nav />
    </transition>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <component
        class="section fp-autoheight"
        :id="page.id"
        v-for="(page, i) in pages"
        :is="page.component"
        :info="page.info"
        :inView="page.inView"
        :key="i"
      />
    </full-page>
  </v-app>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  FullPageOptions,
  OnLeaveDestination,
  Page,
} from "./shared/types/app.types";
import { pages } from "./shared/data/app.data";
import Home from "./pages/home/Home.vue";
import About from "./pages/about/About.vue";
import Projects from "./pages/projects/Projects.vue";
import Contact from "./pages/contact/Contact.vue";
import Nav from "@/components/nav/Nav.vue";

@Component({
  components: {
    Home,
    About,
    Projects,
    Contact,
    Nav,
  },
})
export default class App extends Vue {
  options: FullPageOptions = {
    licenseKey: process.env.VUE_APP_FULL_PAGE_LICENSE_KEY,
    scrollingSpeed: 1000,
    onLeave: (origin, destination) => this.setInView(destination),
  };
  hideSensitiveData: boolean =
    process.env.VUE_APP_HIDE_SENSITIVE_DATA === "true";
  pages: Page[] = pages;

  created(): void {
    if (this.hideSensitiveData) document.title = "Alex | Portfolio";
    else document.title = "Alex Long | Portfolio";
  }

  mounted(): void {
    this.pages[0].inView = true;
    let width: number = 0;
    width = window.innerWidth;
    this.$store.commit("setScreenWidth", width);
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      this.$store.commit("setScreenWidth", width);
    });
  }

  setInView(destination: OnLeaveDestination): void {
    const activeSlideID: string = destination.item.id;
    const matchingSlide: Page | undefined = this.pages.find(
      (x) => x.id === activeSlideID
    );

    if (matchingSlide) {
      this.pages.forEach((x) => (x.inView = false));
      matchingSlide.inView = true;
    }
  }
}
</script>
<style lang="scss">
@import "./scss/main.scss";
</style>