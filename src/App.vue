<template>
  <v-app id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div v-for="(page, i) in pages" :key="i" class="section">
        <template>
          <transition name="slide-fade-top" appear>
            <Nav style="width: 100%" :showName="page.component !== 'Home'" />
          </transition>
          <component :is="page.component" :inView="page.inView" />
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
  pages: any[] = [
    { component: "Home", inView: false },
    { component: "About", inView: false },
    { component: "Projects", inView: false },
    { component: "Contact", inView: false },
  ];
  options: any = {
    anchors: ["home", "about", "projects", "contact"],
    scrollingSpeed: 1000,
    onLeave: (origin: any, destination: any, direction: any) =>
      this.setCurrentPage(origin, destination),
  };

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
    const loadedPage = this.pages.find(
      (x) =>
        x.component.toUpperCase() ===
        window.location.hash.substr(1).toUpperCase()
    );
    this.pages.forEach((x) => (x.inView = false));
    if (loadedPage) loadedPage.inView = true;
    else this.pages[0].inView = true;
  }

  setCurrentPage(origin: any, destination: any): void {
    const destinationPage = this.pages.find(
      (x) => x.component.toUpperCase() === destination.anchor.toUpperCase()
    );
    destinationPage.inView = true;
    const originPage = this.pages.find(
      (x) => x.component.toUpperCase() === origin.anchor.toUpperCase()
    );
    originPage.inView = false;
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
  background: url("./assets/bg.png") !important;
  font-family: "Poppins", sans-serif;
}
</style>