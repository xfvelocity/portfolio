<template>
  <div class="full-height">
    <div class="header max-width xf-center">
      <transition name="slide-up" appear>
        <div class="header-content xf-text-center">
          <h1 class="xf-fw-700">Alex Long</h1>

          <h4 class="xf-text-20 typewriter">front end software engineer</h4>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
// ** Props **
defineProps<{ inView: boolean }>();
</script>

<style lang="scss">
@use "@/assets/styles/variables";

.header {
  h1 {
    font-size: 50px;
    letter-spacing: 0.1rem;

    @include variables.md-up {
      font-size: 100px;
    }
  }

  h4 {
    font-weight: 500;

    @include variables.md-up {
      font-size: 24px !important;
    }
  }
}
</style>
