<template>
  <transition name="slide-down" appear>
    <nav class="nav xf-flex xf-p-6">
      <a
        class="xf-hover xf-ml-auto"
        href="https://github.com/xfvelocity"
        target="_blank"
      >
        <xf-icon src="icons/github.svg" :size="28" fill="grey" />
      </a>
    </nav>
  </transition>

  <main class="xf-h-100">
    <Header id="header" :in-view="sectionsInView.header" />
    <About id="about" :in-view="sectionsInView.about" />
    <Projects
      v-for="(project, i) in projects"
      :key="i"
      :info="project"
      :id="`project${i}`"
      :in-view="sectionsInView[`project${i}` as keyof SectionsInView]"
    />
    <Contact id="contact" :in-view="sectionsInView.contact" />
  </main>

  <background />
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useMediaQuery } from "./composables/mediaQueries";
import { throttle } from "./composables/utils";
import projects from "./content/projects.json";

import { XfIcon } from "xf-cmpt-lib";
import Header from "@/sections/header/Header.vue";
import About from "@/sections/about/About.vue";
import Projects from "@/sections/projects/Projects.vue";
import Contact from "@/sections/contact/Contact.vue";
import Background from "@/components/background/Background.vue";

interface SectionsInView {
  header: boolean;
  about: boolean;
  project0: boolean;
  project1: boolean;
  project2: boolean;
  contact: boolean;
}

// ** Data **
const sectionsInView = ref<SectionsInView>({
  header: true,
  about: false,
  project0: false,
  project1: false,
  project2: false,
  contact: false,
});

useMediaQuery();

// ** Lifecycle **
onMounted(() => {
  const intersectionObserver: IntersectionObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        setTimeout(() => {
          sectionsInView.value[entry.target.id as keyof SectionsInView] =
            entry.isIntersecting;
        }, 100);
      }),
    { rootMargin: "-50px" }
  );

  Object.keys(sectionsInView.value).forEach((x) => {
    const target: Element | null = document.querySelector(`#${x}`);

    if (target) {
      intersectionObserver.observe(target);
    }
  });

  document.addEventListener(
    "mousewheel",
    throttle((e: WheelEvent) => {
      window.scrollBy({
        top: e.deltaY < 0 ? -window.innerHeight : window.innerHeight,
        behavior: "smooth",
      });
    }, 800)
  );
});
</script>

<style lang="scss">
@import "./assets/styles/index.scss";

.nav {
  position: absolute;
  width: 100%;
  z-index: 99;
}
</style>
