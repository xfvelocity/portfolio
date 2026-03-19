<template>
  <div class="project full-height">
    <div class="xf-center max-width">
      <transition name="slide-up">
        <div
          class="project-content xf-grid xf-grid-12 xf-gap-10 xf-flex-align-items-center"
        >
          <div
            class="project-content-desc xf-col-12 xf-col-lg-5 xf-flex xf-flex-direction-col"
            :class="{
              'xf-col-offset-1 xf-col-offset-lg-8 xf-row-offset-2 xf-row-offset-lg-1':
                index % 2 === 0,
            }"
          >
            <div>
              <h3 class="xf-mb-2 xf-text-32">
                {{ info.name }}
              </h3>

              <p v-html="info.desc" class="xf-mb-2 xf-text-14 xf-text-16-lg" />
            </div>

            <div class="xf-mt-auto xf-pt-5">
              <div class="xf-flex xf-flex-align-items-center">
                <a
                  v-for="(link, i) in info.links"
                  :key="i"
                  :href="link.link"
                  :aria-label="link.tooltip"
                  target="_blank"
                  rel="noopener noreferrer"
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

          <project-frame
            class="xf-col-12 xf-col-lg-7"
            :class="{
              'xf-cursor-pointer xf-hover': info.route,
              'xf-col-offset-1 xf-row-offset-1': index % 2 === 0,
            }"
            :project="info"
            @click="openLink(info.route)"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isMedium } from "@/composables/mediaQueries";
import { getImageUrl } from "@/composables/utils";

import { XfIcon, XfTooltip } from "xf-cmpt-lib";

import ProjectFrame from "@/components/projects/ProjectFrame.vue";

// ** Types **
interface PageInfoLink {
  name: string;
  link: string;
  tooltip: string;
}

interface PageInfo {
  id: string;
  name: string;
  desc: string;
  technologies: string[];
  img?: string;
  links: PageInfoLink[];
  route: string;
}

// ** Props **
const props = defineProps<{ info: PageInfo; inView: boolean; index: number }>();

// ** Methods **
const openLink = (route: string): void => {
  if (route) {
    window.open(route);
  }
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables";

.project {
  &-content {
    grid-auto-flow: dense;

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
