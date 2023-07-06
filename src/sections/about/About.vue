<template>
  <div class="full-height">
    <div class="xf-center max-width">
      <transition name="slide-up">
        <div v-show="inView" class="about xf-grid xf-gap-3">
          <div
            v-for="(tech, i) in technologies"
            :key="i"
            class="about-technology xf-flex-center xf-col-6"
          >
            <xf-icon :src="`icons/skills/${tech.icon}.svg`" :size="20" />
            <span class="xf-ml-2 xf-fw-700">{{ tech.name }}</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XfIcon } from "xf-cmpt-lib";
import { dynamicImage } from "../../composables/utils";

import technologies from "../../content/technologies.json";

// ** Props **
defineProps<{ inView: boolean }>();
</script>

<style lang="scss" scoped>
.about {
  &-technology {
    background-color: #101010;
    padding: 15px 30px;
    border-radius: 10px;
  }
}
</style>
