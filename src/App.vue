<template>
  <!-- <transition name="slide-fade-top" appear>
    <nav class="nav xf-flex xf-p-4">
      <a
        class="xf-hover xf-ml-auto"
        href="https://github.com/xfvelocity"
        target="_blank"
      >
        <xf-icon src="icons/github.svg" :size="24" fill="grey" />
      </a>
    </nav>
  </transition>

  <main>
    <Header />
    <About />
    <Projects v-for="(project, i) in projects" :key="i" :info="project" />
    <Contact />
  </main> -->

  <div class="container">
    <Header />
    <About />
    <Projects v-for="(project, i) in projects" :key="i" :info="project" />
    <Contact />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useMediaQuery } from "@/composables/mediaQueries";
import projects from "@/content/projects.json";

import { XfIcon } from "xf-cmpt-lib";
import Header from "@/sections/header/Header.vue";
import About from "@/sections/about/About.vue";
import Projects from "@/sections/projects/Projects.vue";
import Contact from "@/sections/contact/Contact.vue";

// ** Lifecycle **
onMounted(() => {
  useMediaQuery();

  // const sections = document.querySelectorAll(".section");
  // let currentSectionIndex = 0;
  // let isScrolling = false;

  // const scrollToSection = (index: number): void => {
  //   isScrolling = true;

  //   sections[currentSectionIndex].classList.remove("active");
  //   sections[index].classList.add("active");

  //   window.scrollTo({
  //     top: sections[index].offsetTop,
  //     behavior: "smooth",
  //   });

  //   setTimeout(() => {
  //     isScrolling = false;
  //     currentSectionIndex = index;
  //   }, 1000);
  // };

  // const handleScroll = (event: MouseEvent): void => {
  //   if (isScrolling) return;

  //   const direction = event.wheelDelta > 0 ? "up" : "down";

  //   if (direction === "up" && currentSectionIndex > 0) {
  //     scrollToSection(currentSectionIndex - 1);
  //   } else if (
  //     direction === "down" &&
  //     currentSectionIndex < sections.length - 1
  //   ) {
  //     scrollToSection(currentSectionIndex + 1);
  //   }
  // };

  // document.addEventListener("mousewheel", handleScroll);
});
</script>

<style lang="scss">
@import "xf-cmpt-lib/dist/cmpt-lib-ts.css";
@import "./assets/styles/index.scss";

.nav {
  position: absolute;
  width: 100%;
  z-index: 99;
}

html,
body {
  margin: 0 !important;
  padding: 0 !important;
  height: 100% !important;
  overflow: hidden !important;
  scroll-behavior: smooth;
}

.container {
  height: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}
</style>
