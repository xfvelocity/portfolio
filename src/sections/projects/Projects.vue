<template>
  <div v-if="info" class="project full-height">
    <div class="xf-center max-width">
      <transition name="slide-up">
        <div v-show="inView">
          <img class="xf-w-100" :src="dynamicImage(info.img)" alt="" />

          <h3 class="xf-mt-3 xf-mb-1 xf-text-32 xf-text-36-sm">
            {{ info.name }}
          </h3>

          <div class="text-desc">
            <p
              v-for="(text, i) in info.desc"
              :key="i"
              class="xf-text-14 xf-text-16-sm xf-mb-2"
            >
              {{ text }}
            </p>

            <div class="xf-flex xf-flex-align-items-center xf-mt-8">
              <a
                v-for="(link, i) in info.links"
                :key="i"
                :href="link.link"
                target="_blank"
              >
                <xf-icon
                  :src="`icons/${link.name}.svg`"
                  class="xf-mr-2 xf-hover"
                  :size="20"
                  :title="link.name"
                />
              </a>

              <div class="xf-ml-auto xf-flex xf-flex-align-items-center">
                <xf-icon
                  v-for="(tech, i) in info.technologies"
                  :key="`tech-${i}`"
                  :src="`icons/skills/${tech}.svg`"
                  class="xf-mr-1"
                  :size="20"
                />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { dynamicImage } from "@/composables/utils";

import { XfIcon } from "xf-cmpt-lib";

interface PageInfoLink {
  name: string;
  link: string;
}

interface PageInfo {
  name: string;
  desc: string[];
  technologies: string[];
  img: string;
  links: PageInfoLink[];
}

// ** Props **
defineProps<{ info: PageInfo; inView: boolean }>();
</script>

<style lang="scss" scoped>
.project {
  img {
    border: 1px solid rgb(46, 46, 46);
  }
}
</style>
