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
              :src="getImageUrl(`icons/skills/${tech.toLowerCase()}.svg`)"
              :size="isMedium ? 36 : 20"
            />
            <span class="xf-ml-2 xf-fw-700 xf-text-18-md">{{ tech }}</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isMedium } from "@/composables/mediaQueries";
import { getImageUrl } from "@/composables/utils";

import technologies from "@/content/technologies.json";

import { XfIcon } from "xf-cmpt-lib";

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
