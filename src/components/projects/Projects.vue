<template>
  <div class="project full-height">
    <div class="xf-center project-max-width">
      <transition name="slide-up">
        <div
          class="project-content xf-p-6 xf-p-md-10"
          :class="{ 'xf-cursor-pointer xf-hover': info.route }"
          @click="openLink(info.route)"
        >
          <video
            v-if="info.video"
            ref="video"
            :poster="dynamicImage(`img/${info.img}`)"
            muted
            loop
          >
            <source :src="dynamicImage(`img/${info.video}`)" />
          </video>

          <img
            v-else-if="info.img"
            :src="dynamicImage(`img/${info.img}`)"
            alt=""
          />

          <div class="project-content-desc xf-mt-2 xf-mt-lg-6">
            <h3 class="xf-mb-1 xf-text-30 xf-text-36-md">
              {{ info.name }}
            </h3>

            <div class="xf-text-14 xf-text-16-sm xf-text-18-lg">
              <p v-for="(d, i) in info.desc" :key="i" class="xf-mb-1">
                {{ d }}
              </p>
            </div>

            <div class="xf-mt-8 xf-mt-lg-12 xf-mt-xl-15">
              <div class="xf-flex xf-flex-align-items-center">
                <a
                  v-for="(link, i) in info.links"
                  :key="i"
                  :href="link.link"
                  :aria-label="link.name"
                  target="_blank"
                  @click.stop=""
                >
                  <xf-icon
                    :src="dynamicImage(`icons/${link.name}.svg`)"
                    class="xf-mr-2 xf-hover"
                    :size="isMedium ? 24 : 20"
                    :title="link.name"
                  />
                </a>

                <div class="xf-ml-auto xf-flex xf-flex-align-items-center">
                  <xf-icon
                    v-for="(tech, i) in info.technologies"
                    :key="`tech-${i}`"
                    :src="dynamicImage(`icons/skills/${tech}.svg`)"
                    class="xf-mr-1"
                    :size="isMedium ? 24 : 20"
                    :title="tech"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isMedium } from "@/composables/mediaQueries";
import { dynamicImage } from "@/composables/utils";
import { ref, watch } from "vue";

import { XfIcon } from "xf-cmpt-lib";

// ** Types **
interface PageInfoLink {
  name: string;
  link: string;
}

interface PageInfo {
  name: string;
  desc: string[];
  technologies: string[];
  img?: string;
  video?: string;
  links: PageInfoLink[];
  route: string;
}

// ** Props **
const props = defineProps<{ info: PageInfo; inView: boolean }>();

// ** Data **
const video = ref<HTMLVideoElement>();

// ** Methods **
const openLink = (route: string): void => {
  if (route) {
    window.open(route);
  }
};

// ** Watchers **
watch(
  () => props.inView,
  () => {
    setTimeout(() => {
      if (props.inView && video.value) {
        video.value.play();
      }
    }, 2000);
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables";

.project {
  &-content {
    img,
    video {
      border-radius: 5px;
      border: 2px solid rgb(173, 173, 173);
      width: 100%;
    }

    &:hover {
      opacity: 0.8;
      transform: scale(1.01);
      transition: all 0.2s;
    }

    @include variables.lg-up {
      gap: 20px;

      h3 {
        font-size: 50px !important;
      }
    }
  }

  &-max-width {
    width: 100% !important;
    max-width: 380px;
    margin: 0 auto;

    @include variables.sm-up {
      max-width: 650px;
    }

    @include variables.md-up {
      max-width: 800px;
    }

    @include variables.lg-up {
      max-width: 900px;
    }
  }
}
</style>
