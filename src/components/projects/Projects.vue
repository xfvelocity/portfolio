<template>
  <div class="project full-height">
    <div class="xf-center max-width">
      <transition name="slide-up">
        <div class="project-content xf-grid xf-grid-12">
          <div
            class="project-content-desc xf-col-6 xf-h-100 xf-flex xf-flex-direction-col"
            :class="{ 'xf-col-offset-7': index % 2 === 0 }"
          >
            <div>
              <h3 class="xf-mb-2 xf-text-30 xf-text-36-md">
                {{ info.name }}
              </h3>

              <div class="xf-text-14 xf-text-16-sm xf-text-18-lg">
                <p v-for="(d, i) in info.desc" :key="i" class="xf-mb-2">
                  {{ d }}
                </p>
              </div>
            </div>

            <div class="xf-mt-auto">
              <div class="xf-flex xf-flex-align-items-center">
                <a
                  v-for="(link, i) in info.links"
                  :key="i"
                  :href="link.link"
                  :aria-label="link.name"
                  target="_blank"
                  @click.stop=""
                >
                  <xf-tooltip :text="link.tooltip">
                    <xf-icon
                      :src="getImageUrl(`icons/${link.name.toLowerCase()}.svg`)"
                      class="xf-mr-2 xf-hover"
                      :size="isMedium ? 24 : 20"
                    />
                  </xf-tooltip>
                </a>

                <div class="xf-ml-auto xf-flex xf-flex-align-items-center">
                  <xf-tooltip
                    v-for="(tech, i) in info.technologies"
                    :key="`tech-${i}`"
                    :text="tech"
                  >
                    <xf-icon
                      :src="
                        getImageUrl(`icons/skills/${tech.toLowerCase()}.svg`)
                      "
                      class="xf-mr-2"
                      :size="isMedium ? 24 : 20"
                    />
                  </xf-tooltip>
                </div>
              </div>
            </div>
          </div>

          <div
            class="xf-col-6"
            :class="{
              'xf-cursor-pointer xf-hover': info.route,
              'xf-col-offset-1': index % 2 === 0,
            }"
            @click="openLink(info.route)"
          >
            <xf-tooltip text="View site">
              <video v-if="info.video" ref="video" muted loop>
                <source :src="getImageUrl(`img/${info.video}`)" />
              </video>

              <img
                v-else-if="info.img"
                :src="getImageUrl(`img/${info.img}`)"
                alt=""
              />
            </xf-tooltip>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isMedium } from "@/composables/mediaQueries";
import { getImageUrl } from "@/composables/utils";
import { ref, watch } from "vue";

import { XfIcon, XfTooltip } from "xf-cmpt-lib";

// ** Types **
interface PageInfoLink {
  name: string;
  link: string;
  tooltip: string;
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
const props = defineProps<{ info: PageInfo; inView: boolean; index: number }>();

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
    }, 500);
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables";

.project {
  &-content {
    grid-auto-flow: dense;

    img,
    video {
      border-radius: 5px;
      border: 2px solid rgb(173, 173, 173);
      width: 100%;

      &:hover {
        opacity: 0.8;
        transform: scale(1.01);
        transition: all 0.2s;
      }
    }

    &-desc {
      h3 {
        white-space: nowrap;
        z-index: 2;
      }
    }

    @include variables.lg-up {
      gap: 20px;

      h3 {
        font-size: 42px !important;
      }
    }
  }
}
</style>
