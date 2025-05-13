<template>
  <div class="infinite-grid-container">
    <div v-for="(row, index) in rows" :key="`row-${row}`" class="grid-row">
      <div
        class="sliding-track"
        :class="{ reverse: index % 2 === 0 }"
        :style="{
          '--animation-duration': `${getRowDuration(index)}s`,
        }"
      >
        <!-- First set of items -->
        <div
          v-for="(item, i) in row"
          :key="`item-${row}-${i}`"
          class="grid-item xf-mx-2"
        >
          <slot :item="item" />
        </div>

        <!-- Duplicated set for seamless looping -->
        <div
          v-for="(item, i) in row"
          :key="`dup-${row}-${i}`"
          class="grid-item xf-mx-2"
        >
          <slot :item="item" />
        </div>
      </div>
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
// Calculate row-specific animation duration
const getRowDuration = (row: number): number => {
  return 30 + row * 5;
};
</script>

<style lang="scss" scoped>
.infinite-grid-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grid-row {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.sliding-track {
  display: flex;
  width: max-content;
  animation: slideLeft var(--animation-duration) linear infinite;

  &.reverse {
    animation: slideRight var(--animation-duration) linear infinite;
  }
}

.grid-item {
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
