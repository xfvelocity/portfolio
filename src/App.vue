<template>
  <v-app id="app">
    <div
      v-if="hideSensitiveData"
      class="text-center white--text grey darken-3 py-2"
      style="position: fixed; width: 100%; z-index: 10"
    >
      This site is in public viewing mode. Some functionality may be disabled.
    </div>
    <transition name="slide-fade-top" appear>
      <Nav style="width: 100%" />
    </transition>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" v-for="(page, i) in pages" :key="i">
        <template>
          <template v-if="page.component === 'Projects'">
            <component
              v-for="(project, i) in page.slides"
              :key="i"
              :project="project"
              class="slide"
              :is="page.component"
              :inView="page.inView"
            />
          </template>
          <component v-else :is="page.component" :inView="page.inView" />

          <!-- <NextPage
            :pages="pages"
            :index="i"
            @click="$refs.fullpage.api.moveSectionDown()"
          /> -->
        </template>
      </div>
    </full-page>
  </v-app>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  FullPageOptions,
  OnLeaveDestination,
  OnLeaveOrigin,
  Page,
} from "./types/app.types";
import { projectSlides } from "./pages/projects/projects.data";
import Home from "./pages/home/Home.vue";
import About from "./pages/about/About.vue";
import Projects from "./pages/projects/Projects.vue";
import Contact from "./pages/contact/Contact.vue";
import Nav from "@/components/nav/Nav.vue";
import NextPage from "@/components/next-page/NextPage.vue";

@Component({
  components: {
    Home,
    About,
    Projects,
    Contact,
    Nav,
    NextPage,
  },
})
export default class App extends Vue {
  pages: Page[] = [
    { component: "Home", inView: false },
    { component: "About", inView: false },
    { component: "Projects", inView: false, slides: projectSlides },
    { component: "Contact", inView: false },
  ];
  options: FullPageOptions = {
    licenseKey: process.env.VUE_APP_FULL_PAGE_LICENSE_KEY,
    scrollHorizontallyKey: process.env.VUE_APP_SCROLL_HORIZONTALLY_LICENSE_KEY,
    anchors: ["home", "about", "projects", "contact"],
    scrollingSpeed: 1000,
    lockAnchors: false,
    scrollHorizontally: false,
    controlArrows: false,
    onLeave: (origin, destination) => this.setCurrentPage(origin, destination),
  };
  hideSensitiveData: boolean =
    process.env.VUE_APP_HIDE_SENSITIVE_DATA === "true";

  created(): void {
    if (this.hideSensitiveData) document.title = "Alex | Portfolio";
    else document.title = "Alex Long | Portfolio";
  }

  mounted(): void {
    this.setLoadedPage();
    let width: number = 0;
    width = window.innerWidth;
    this.$store.commit("setScreenWidth", width);
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      this.$store.commit("setScreenWidth", width);
    });
  }

  setLoadedPage(): void {
    const loadedPage: Page | undefined = this.pages.find(
      (x) =>
        x.component.toUpperCase() ===
        window.location.hash.substr(1).toUpperCase()
    );
    this.pages.forEach((x) => (x.inView = false));
    if (loadedPage) loadedPage.inView = true;
    else this.pages[0].inView = true;
  }

  setCurrentPage(origin: OnLeaveOrigin, destination: OnLeaveDestination): void {
    const destinationPage: Page | undefined = this.pages.find(
      (x) => x.component.toUpperCase() === destination.anchor.toUpperCase()
    );
    const originPage: Page | undefined = this.pages.find(
      (x) => x.component.toUpperCase() === origin.anchor.toUpperCase()
    );
    if (destinationPage) destinationPage.inView = true;
    if (originPage) originPage.inView = false;
  }
}
</script>
<style lang="scss">
@import "./scss/main.scss";

body {
  margin: 0;
  padding: 0;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    color: white;
    letter-spacing: 0.1rem;
  }

  p,
  a {
    font-size: 14px;
  }
}

#app {
  font-family: "Poppins", sans-serif;
  background-image: url("./assets/bg.png");
  background-repeat: no-repeat;
}
</style>