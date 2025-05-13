<template>
  <div
    class="sliding-grid xf-w-100 xf-overflow-hidden xf-flex xf-flex-direction-col xf-gap-4"
  >
    <div
      v-for="(row, index) in rows"
      :key="`row-${row}`"
      class="xf-w-100 xf-overflow-hidden xf-position-relative"
    >
      <!-- Gradient overlay for left side -->
      <div class="sliding-grid-overlay sliding-grid-left" />

      <div
        class="sliding-grid-track xf-flex xf-w-max-content"
        :class="{ 'siding-grid-track-reverse': index % 2 === 0 }"
        :style="{
          '--animation-duration': `${getRowDuration(index)}s`,
        }"
      >
        <!-- First set of items -->
        <div
          v-for="(item, i) in row"
          :key="`item-${row}-${i}`"
          class="sliding-grid-item xf-mx-2"
        >
          <slot :item="item" />
        </div>

        <!-- Duplicated set for seamless looping -->
        <div
          v-for="(item, i) in row"
          :key="`dup-${row}-${i}`"
          class="sliding-grid-item xf-mx-2"
        >
          <slot :item="item" />
        </div>
      </div>

      <!-- Gradient overlay for right side -->
      <div class="sliding-grid-overlay sliding-grid-left" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

// ** Data **
defineProps({
  rows: {
    type: Array as PropType<any[][]>,
    default: () => [[]],
  },
});

// ** Methods **
const getRowDuration = (row: number): number => {
  return 30 + row * 5;
};
</script>

<style lang="scss" scoped>
.sliding-grid {
  &-track {
    animation: slideLeft var(--animation-duration) linear infinite;

    &-reverse {
      animation: slideRight var(--animation-duration) linear infinite;
    }
  }

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s ease-out;

    &:hover {
      transform: scale(1.05);
      z-index: 10;
    }
  }

  &-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    z-index: 5;
    pointer-events: none;
  }

  &-left {
    left: 0;
    background: linear-gradient(to right, rgba(5, 8, 22, 1), rgba(5, 8, 22, 0));
  }

  &-right {
    right: 0;
    background: linear-gradient(to left, rgba(5, 8, 22, 1), rgba(5, 8, 22, 0));
  }
}

@keyframes slideLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes slideRight {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
