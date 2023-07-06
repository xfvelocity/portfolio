<template>
  <div class="full-height">
    <div class="header max-width xf-center">
      <transition name="slide-up" appear>
        <div class="header-content xf-text-center">
          <h1 class="xf-fw-700">Alex Long</h1>

          <h4 class="xf-text-20">front end software engineer</h4>

          <p class="xf-mt-6 xf-text-colour-blue-lighten-3">
            3+ years experience
          </p>
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
.header {
  h1,
  h4,
  p {
    letter-spacing: 0.1rem;
  }

  h1 {
    font-size: 50px;
  }

  h4 {
    font-weight: 500;
  }
}
</style>
