<template>
  <!-- Browser preview -->
  <div ref="browserRef" class="browser">
    <div class="browser__bar">
      <span class="dot dot--red" />
      <span class="dot dot--yellow" />
      <span class="dot dot--green" />
      <span class="browser__url">{{ project.route }}</span>

      <a
        v-if="project.route"
        :href="project.route"
        target="_blank"
        rel="noopener noreferrer"
        class="browser__visit"
        :aria-label="`Visit ${project.title} website (opens in new tab)`"
      >
        <xf-icon :src="getImageUrl(`icons/open.svg`)" :size="12" />
      </a>
    </div>

    <div class="browser__content">
      <!-- Real screenshot -->
      <img
        v-if="project.img"
        :src="getImageUrl(`img/${project.img}`)"
        :alt="`${project.title} screenshot`"
        class="browser__screenshot"
      />

      <!-- Live iframe -->
      <div v-else-if="project.route" class="browser__iframe-wrap">
        <iframe
          :src="project.route"
          class="browser__iframe"
          scrolling="no"
          tabindex="-1"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts"
        />
      </div>

      <!-- Styled mock fallback -->
      <div v-else class="browser__mock">
        <div class="mock-hero">
          <div class="mock-line" style="width: 65%" />

          <div
            class="mock-line"
            style="width: 48%; opacity: 0.5; margin-top: 10px"
          />

          <div class="mock-btn" />
        </div>

        <div class="mock-grid">
          <div v-for="n in 3" :key="n" class="mock-card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XfIcon } from "xf-cmpt-lib";
import { getImageUrl } from "@/composables/utils";

defineProps({
  project: {
    type: Object as any,
    required: true,
  },
});
</script>

<style lang="scss">
// Browser mockup in hero
.browser {
  width: 100%;
  max-width: 920px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 14px 14px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: none;
  backdrop-filter: blur(12px);
  overflow: hidden;

  &__bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  &__url {
    flex: 1;
    margin: 0 10px;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.4);
    font-family: var(--font-body);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 6px;
    padding: 4px 10px;
  }

  &__visit {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.45);
    flex-shrink: 0;

    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  &__content {
    position: relative;
    overflow: hidden;
    min-height: 300px;
    max-height: 500px;
  }

  &__screenshot {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  &__iframe-wrap {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  &__iframe {
    width: 1920px;
    height: 1080px;
    border: none;
    transform-origin: top left;
    pointer-events: none;
  }

  // Mock content
  &__mock {
    padding: 32px 28px;
  }
}

// Dots shared
.browser .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
  flex-shrink: 0;
  &--red {
    background: rgba(255, 107, 107, 0.8);
  }
  &--yellow {
    background: rgba(254, 202, 87, 0.8);
  }
  &--green {
    background: rgba(72, 219, 251, 0.8);
  }
}
</style>
