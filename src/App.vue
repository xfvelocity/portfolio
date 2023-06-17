<template>
  <transition name="slide-fade-top" appear>
    <nav class="nav xf-flex xf-p-4">
      <a
        class="xf-hover xf-ml-auto"
        href="https://github.com/xfvelocity"
        target="_blank"
      >
        <xf-icon src="icons/github.svg" :size="28" fill="grey" />
      </a>
    </nav>
  </transition>

  <main class="container">
    <Header />
    <About />
    <Projects v-for="(project, i) in projects" :key="i" :info="project" />
    <Contact />
  </main>
</template>

<script lang="ts" setup>
import { useMediaQuery } from "@/composables/mediaQueries";
import projects from "@/content/projects.json";

import { XfIcon } from "xf-cmpt-lib";
import Header from "@/sections/header/Header.vue";
import About from "@/sections/about/About.vue";
import Projects from "@/sections/projects/Projects.vue";
import Contact from "@/sections/contact/Contact.vue";

// ** Lifecycle **
useMediaQuery();
</script>

<style lang="scss">
@import "xf-cmpt-lib/dist/cmpt-lib-ts.css";
@import "./assets/styles/index.scss";

.nav {
  position: absolute;
  width: 100%;
  z-index: 99;
}

.container {
  height: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}
</style>
