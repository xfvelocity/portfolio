<template>
  <div class="px-6" id="projects">
    <div v-for="(project, i) in projects" :key="i">
      <img style="width: 100%" :src="project.img" alt="" />
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
    </div>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Projects extends Vue {
  projects: any = [
    {
      name: "Build A-Dream",
      desc: "This was one of my first projects that I started working on and its been re-worked multiple times, currently using vue & nuxtjs. This is a website to help promote a family members landscaping business.",
      github: "https://github.com/xfvelocity/build-a-dream",
      link: "https://buildadream.co.uk/",
      technologies: ["typescript", "vue", "vuetify", "nuxt"],
      img: require("@/assets/buildadream.png"),
    },
    {
      name: "Hosting Solutions",
      desc: "HostingSolutions was a website in which I wanted to challenge my base html/css skills. This is one of my favourite websites i’ve created and tought me a lot about svg animations. v3",
      github: "https://github.com/xfvelocity/hosting-solutions",
      link: "",
      technologies: ["html", "css", "javascript", "sass"],
      img: require("@/assets/hostingsolutions.png"),
    },
    {
      name: "Gym Tracker",
      desc: " I wanted to try my hand at a full-stack project which I could use everyday so I created the gym tracker, orignally used for meal prep it’s developed into a seamless gym tracking program",
      github: "https://github.com/xfvelocity/gym-progress-tracker",
      link: "https://www.gymprogresstracker.com",
      technologies: ["typescript", "vue", "vuetify", "mongodb", "nodejs"],
      img: require("@/assets/gymtracker.png"),
    },
  ];

  goToLink(link: string): void {
    window.open(link);
  }
}
</script>
<style lang="scss">
#projects {
  h2 {
    font-size: 32px;
  }
}
</style>