<template>
  <v-container class="projects px-6">
    <transition name="slide-fade-bottom">
      <v-row
        v-show="inView"
        class="projects-content align-center justify-center"
      >
        <v-col
          class="img-container"
          v-if="windowWidth < 1200"
          cols="12"
          @click="goToLink(info.link)"
        >
          <img :src="dynamicImage(info.img)" alt="" />
        </v-col>
        <v-col class="text" :cols="windowWidth >= 1200 ? '12' : '12'">
          <h3 class="my-3">{{ info.name }}</h3>
          <div class="text-desc">
            <p v-html="info.desc" />
            <div class="d-flex align-center mt-8 text-desc__technologies">
              <span class="d-flex align-center">
                <Button
                  class="mr-1"
                  iconName="mdi-open-in-new"
                  tooltipMessage="Visit"
                  @click="goToLink(info.link)"
                />
                <Button
                  :img-size="24"
                  :iconName="dynamicImage('icons/github.svg')"
                  customIcon
                  tooltipMessage="Github"
                  @click="goToLink(info.github)"
                />
                <Button
                  v-if="info.jira"
                  :img-size="22"
                  :iconName="dynamicImage('icons/jira.svg')"
                  customIcon
                  tooltipMessage="Jira Board"
                  @click="goToLink(info.jira!)"
                />
                <Button
                  v-if="info.figma"
                  :img-size="16"
                  :iconName="dynamicImage('icons/figma.svg')"
                  customIcon
                  tooltipMessage="Figma Designs"
                  @click="goToLink(info.figma!)"
                />
              </span>
              <v-spacer />
              <span>
                <img
                  style="width: 20px; max-height: 20px"
                  class="mr-2"
                  v-for="(tech, i) in info.technologies"
                  :key="`tech-${i}`"
                  :src="dynamicImage(`skills/${tech}.svg`)"
                  alt=""
                />
              </span>
            </div>
          </div>
        </v-col>
        <v-col
          class="img-container"
          v-if="windowWidth >= 1200"
          cols="auto"
          @click="goToLink(info.link)"
        >
          <img :src="dynamicImage(info.img)" alt="" />
        </v-col>
      </v-row>
    </transition>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { dynamicImage, goToLink } from "../../shared/helpers/utils";
import { Project } from "../../shared/types/projects.types";

import Button from "../../components/buttons/Button.vue";

export default defineComponent({
  name: "Projects",
  components: {
    Button,
  },
  props: {
    inView: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Object as PropType<Project>,
      default: () => ({}),
    },
    windowWidth: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    return {
      dynamicImage,
      goToLink,
    };
  },
});
</script>

<style lang="scss" scoped>
.v-container {
  max-width: none !important;
  width: 90%;
}

.projects {
  max-width: 400px !important;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .fp-tableCell {
    vertical-align: top;
  }

  &-content {
    .img-container {
      img {
        cursor: pointer;
        width: 100% !important;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 550px !important;
  }

  @media (min-width: 1200px) {
    max-width: 1500px !important;

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
        width: 60%;
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
          max-width: 500px;

          &__technologies {
            margin-top: 30px !important;
          }
        }
      }
    }
  }

  @media (min-width: 1400px) {
    &-content {
      .text {
        &-desc {
          &__technologies {
            margin-top: 80px !important;
          }
        }
      }
    }
  }
}
</style>
