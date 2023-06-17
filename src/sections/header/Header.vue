<template>
  <div class="full-height">
    <div class="header max-width xf-center">
      <transition name="slide-up" appear>
        <div class="xf-flex xf-flex-wrap">
          <div class="header-text xf-mt-8">
            <h1>Alex Long</h1>
            <div>
              <h4>front end</h4>
              <h4 class="typewriter">software engineer</h4>
            </div>
          </div>

          <img
            class="header-img xf-w-100"
            :src="dynamicImage('saturn.svg')"
            alt=""
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { dynamicImage } from "@/composables/utils";

// ** Props **
defineProps<{ inView: boolean }>();
</script>

<style lang="scss">
.header {
  &-text {
    h1 {
      letter-spacing: 0.2rem;
      font-size: 50px;
    }

    h4 {
      letter-spacing: 0.2rem;
      font-weight: 500;
    }

    order: 1;
  }
}
</style>
