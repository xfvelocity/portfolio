<template>
  <div class="projects fp-auto-height">
    <v-container class="projects-content px-6">
      <transition name="slide-fade-left">
        <v-row
          class="projects-content__row align-center justify-center"
          v-show="show"
        >
          <v-col v-if="screenWidth < 1200" cols="12">
            <img
              style="width: 100%"
              :src="project.img"
              alt=""
              @click="goToLink(project.link)"
            />
          </v-col>
          <v-col class="text" :cols="screenWidth >= 1200 ? 'auto' : '12'">
            <h2 class="my-3">{{ project.name }}</h2>
            <div class="text-desc">
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
          </v-col>
          <v-col class="img-container" v-if="screenWidth >= 1200" cols="6">
            <img :src="project.img" alt="" @click="goToLink(project.link)" />
          </v-col>
        </v-row>
      </transition>
    </v-container>
  </div>
</template>
 
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Project } from "@/types/projects.types";

@Component
export default class Projects extends Vue {
  @Prop()
  inView!: boolean;
  @Prop()
  project!: Project;

  show: boolean = false;
  // projects: Project[] = projects;

  @Watch("inView")
  setContentVisible(): void {
    setTimeout(() => (this.show = this.inView), 400);
  }

  get screenWidth(): number {
    return this.$store.state.screenWidth;
  }

  goToLink(link: string): void {
    if (process.env.VUE_APP_HIDE_SENSITIVE_DATA === "true") window.open(link);
  }
}
</script>
<style lang="scss">
.projects {
  .fp-tableCell {
    vertical-align: top;
  }

  &-content {
    &__row {
      .text {
        h2 {
          font-size: 32px;
        }
      }
    }
  }
}

//   @media (min-width: 740px) {
//     max-width: 600px;
//     .project {
//       .text {
//         h2 {
//           font-size: 60px;
//           margin-top: 0 !important;
//         }
//       }
//     }
//   }

//   @media (min-width: 1200px) {
//     max-width: 1400px;

//     .project {
//       justify-content: center;
//       align-content: center;
//       position: relative;
//       .img-container {
//         z-index: -1;
//         position: absolute;
//         right: 150px;
//         top: -250px;
//         img {
//           width: 800px;
//         }
//       }

//       .text {
//         position: absolute;
//         left: 0;
//         margin-right: 40px;

//         h2 {
//           font-size: 80px;
//         }

//         p {
//           font-size: 16px;
//         }
//         &-desc {
//           max-width: 470px;
//         }
//       }
//     }
//   }
// }
</style>