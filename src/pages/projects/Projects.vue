<template>
  <v-container class="px-6 d-flex align-center" id="projects-page">
    <transition name="slide-fade-left">
      <v-row class="project align-center" v-show="show">
        <v-col v-if="screenWidth < 1200" cols="12">
          <img
            style="width: 100%"
            :src="projects[0].img"
            alt=""
            @click="goToLink(projects[0].link)"
          />
        </v-col>
        <v-col class="text" :cols="screenWidth >= 1200 ? 'auto' : '12'">
          <h2 class="my-3">{{ projects[0].name }}</h2>
          <div class="text-desc">
            <p>{{ projects[0].desc }}</p>
            <div class="d-flex mt-8">
              <span class="d-flex align-center">
                <Button
                  class="mr-1"
                  iconName="launch"
                  :icon="true"
                  @click="goToLink(projects[0].link)"
                />
                <Button
                  imgSize="22px"
                  :iconName="require('@/assets/icons/github.svg')"
                  :customIcon="true"
                  @click="goToLink(projects[0].github)"
                />
              </span>
              <v-spacer></v-spacer>
              <span>
                <img
                  width="20px"
                  style="max-height: 20px"
                  class="mr-1"
                  v-for="(tech, i) in projects[0].technologies"
                  :key="`tech-${i}`"
                  :src="require(`@/assets/skills/${tech}.svg`)"
                  alt=""
                />
              </span>
            </div>
          </div>
        </v-col>
        <v-col class="img-container" v-if="screenWidth >= 1200" cols="6">
          <img
            :src="projects[0].img"
            alt=""
            @click="goToLink(projects[0].link)"
          />
        </v-col>
      </v-row>
    </transition>
  </v-container>
</template>
 
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Project } from "@/types/projects.types";
import { projects } from "./projects.data";

@Component
export default class Projects extends Vue {
  @Prop()
  inView!: boolean;

  show: boolean = false;
  projects: Project[] = projects;

  @Watch("inView")
  setContentVisible(): void {
    setTimeout(() => (this.show = this.inView), 400);
  }

  get screenWidth(): number {
    return this.$store.state.screenWidth;
  }

  goToLink(link: string): void {
    if (!process.env.VUE_APP_DISABLE_LINKS) window.open(link);
  }
}
</script>
<style lang="scss">
#projects-page {
  height: 80vh;
  max-width: 450px;
  margin: 0 auto;

  .project {
    .text {
      h2 {
        font-size: 32px;
      }
    }
  }

  @media (min-width: 740px) {
    max-width: 600px;
    .project {
      .text {
        h2 {
          font-size: 60px;
          margin-top: 0 !important;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    max-width: 1400px;

    .project {
      justify-content: center;
      align-content: center;
      position: relative;
      .img-container {
        z-index: -1;
        position: absolute;
        right: 150px;
        top: -250px;
        img {
          width: 800px;
        }
      }

      .text {
        position: absolute;
        left: 0;
        margin-right: 40px;

        h2 {
          font-size: 80px;
        }

        p {
          font-size: 16px;
        }
        &-desc {
          max-width: 470px;
        }
      }
    }
  }
}
</style>