<template>
  <transition name="slide-down" appear>
    <nav class="nav xf-flex xf-p-6">
      <a
        class="xf-hover xf-ml-auto"
        href="https://github.com/xfvelocity"
        aria-label="github"
        target="_blank"
      >
        <xf-icon :src="getImageUrl('icons/github.svg')" :size="38" />
      </a>
    </nav>
  </transition>

  <main>
    <FullScreenScroll :sections="sections">
      <template #home="{ active }">
        <Header :in-view="active" />
      </template>

      <template #about="{ active }">
        <About :in-view="active" />
      </template>

      <template
        v-for="(project, i) in projects"
        :key="i"
        v-slot:[project.id]="{ active }"
      >
        <Projects :info="project" :index="i" :in-view="active" />
      </template>

      <template #contact="{ active }">
        <Contact :in-view="active" />
      </template>
    </FullScreenScroll>
  </main>

  <Background />
</template>

<script setup lang="ts">
import { computed } from "vue";

import { getImageUrl } from "@/composables/utils";
import projects from "@/content/projects.json";

import { XfIcon } from "xf-cmpt-lib";
import FullScreenScroll, {
  type Section,
} from "./components/scroll/FullScreenScroll.vue";
import Header from "@/components/header/Header.vue";
import About from "@/components/about/About.vue";
import Projects from "@/components/projects/Projects.vue";
import Contact from "@/components/contact/Contact.vue";
import Background from "@/components/background/Background.vue";

//  ** Computed **
const sections = computed<Section[]>(() => {
  const sectionsList: Section[] = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "contact", name: "Contact" },
  ];

  sectionsList.splice(
    2,
    0,
    ...projects.map((p) => ({ id: p.id, name: p.name })),
  );

  return sectionsList;
});
</script>

<style lang="scss">
@use "./assets/styles/index.scss";
@use "xf-cmpt-lib/index.css" as cmpt;

.nav {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
}
</style>
