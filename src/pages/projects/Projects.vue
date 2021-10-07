<template>
  <div class="px-6 d-flex align-center" id="projects-page">
    <transition name="slide-fade-left">
      <v-carousel
        v-show="show"
        height="530px"
        :show-arrows="false"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(project, i) in projects"
          :key="i"
          reverse-transition="slide-x-reverse-transition"
          transition="slide-x-transition"
          eager
        >
          <img
            style="width: 100%"
            :src="project.img"
            alt=""
            @click="goToLink(project.link)"
          />
          <h2 class="my-3">{{ project.name }}</h2>
          <p>{{ project.desc }}</p>
          <div class="d-flex mt-8">
            <span class="d-flex align-center">
              <Button
                class="mr-1"
                iconName="launch"
                :icon="true"
                @click="goToLink(project.link)"
              />
              <Button
                imgSize="22px"
                :iconName="require('@/assets/icons/github.svg')"
                :customIcon="true"
                @click="goToLink(project.github)"
              />
            </span>
            <v-spacer></v-spacer>
            <span>
              <img
                width="20px"
                style="max-height: 20px"
                class="mr-1"
                v-for="(tech, i) in project.technologies"
                :key="`tech-${i}`"
                :src="require(`@/assets/skills/${tech}.svg`)"
                alt=""
              />
            </span>
          </div>
        </v-carousel-item>
      </v-carousel>
    </transition>
  </div>
</template>
 
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { projects } from "./projects.data";

@Component
export default class Projects extends Vue {
  @Prop()
  inView!: any;

  show: boolean = false;
  projects: any = projects;

  @Watch("inView")
  setContentVisible(): void {
    setTimeout(() => (this.show = this.inView), 400);
  }

  goToLink(link: string): void {
    window.open(link);
  }
}
</script>
<style lang="scss">
#projects-page {
  height: 75vh;
  h2 {
    font-size: 32px;
  }
}
</style>