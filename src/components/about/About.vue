<template>
  <div class="full-height">
    <div class="xf-center max-width">
      <transition name="slide-up">
        <div v-show="inView" class="about xf-grid xf-gap-3">
          <div
            v-for="(tech, i) in technologies"
            :key="i"
            class="about-technology xf-flex-center xf-col-6 xf-col-lg-3 xf-py-3 xf-px-6 xf-py-md-6"
          >
            <xf-icon
              :src="`icons/skills/${tech.icon}.svg`"
              :size="isMedium ? 36 : 20"
            />
            <span class="xf-ml-2 xf-fw-700 xf-text-18-md">{{ tech.name }}</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XfIcon } from "xf-cmpt-lib";
import { isMedium } from "../../composables/mediaQueries";

import technologies from "../../content/technologies.json";

// ** Props **
defineProps<{ inView: boolean }>();
</script>

<style lang="scss" scoped>
.about {
  &-technology {
    background-color: rgb(21, 16, 48);
    border-radius: 10px;

    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
      transition: all 0.2s;
    }
  }
}
</style>
