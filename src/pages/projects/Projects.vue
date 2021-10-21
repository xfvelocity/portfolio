<template>
  <v-container class="projects px-6">
    <transition name="slide-fade-bottom">
      <v-row
        class="projects-content align-center justify-center"
        v-show="inView"
      >
        <v-col class="img-container" v-if="screenWidth < 1200" cols="12">
          <img :src="info.img" alt="" @click="goToLink(info.link)" />
        </v-col>
        <v-col class="text" :cols="screenWidth >= 1200 ? 'auto' : '12'">
          <h3 class="my-3">{{ info.name }}</h3>
          <div class="text-desc">
            <p>{{ info.desc }}</p>
            <div class="d-flex mt-8">
              <span class="d-flex align-center">
                <Button
                  class="mr-1"
                  iconName="launch"
                  :icon="true"
                  @click="goToLink(info.link)"
                />
                <Button
                  imgSize="24px"
                  :iconName="require('@/assets/icons/github.svg')"
                  :customIcon="true"
                  @click="goToLink(info.github)"
                />
              </span>
              <v-spacer></v-spacer>
              <span class="text-desc__technologies">
                <img
                  width="20px"
                  style="max-height: 20px"
                  class="mr-1"
                  v-for="(tech, i) in info.technologies"
                  :key="`tech-${i}`"
                  :src="require(`@/assets/skills/${tech}.svg`)"
                  alt=""
                />
              </span>
            </div>
          </div>
        </v-col>
        <v-col class="img-container" v-if="screenWidth >= 1200" cols="auto">
          <img :src="info.img" alt="" @click="goToLink(info.link)" />
        </v-col>
      </v-row>
    </transition>
  </v-container>
</template>
 
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Project } from "@/shared/types/projects.types";

@Component
export default class Projects extends Vue {
  @Prop()
  inView!: boolean;
  @Prop()
  info!: Project;
}
</script>

<style lang="scss">
.projects {
  max-width: 400px;

  .fp-tableCell {
    vertical-align: top;
  }

  &-content {
    .img-container {
      img {
        width: 100% !important;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 550px;
  }

  @media (min-width: 1200px) {
    max-width: 1400px;

    .fp-tableCell {
      height: 100vh;
      width: 90%;
      margin: 0 auto;
    }

    &-content {
      position: relative;

      .img-container {
        z-index: -1;
        position: absolute;
        right: 0;

        img {
          width: 550px !important;
        }
      }

      .text {
        position: absolute;
        left: 0;
        margin-right: 40px;

        h3 {
          font-size: 80px;
          margin-bottom: 0 !important;
        }

        &-desc {
          max-width: 460px;

          &__technologies {
            margin-top: 30px !important;
          }
        }
      }
    }
  }
}
</style>