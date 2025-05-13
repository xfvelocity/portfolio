<template>
  <div class="infinite-grid-container">
    <div
      v-for="row in 3"
      :key="`row-${row}`"
      class="grid-row"
      :style="{
        '--slide-direction': row % 2 === 0 ? 1 : -1,
        '--slide-duration': `${getRowDuration(row)}s`,
      }"
    >
      <div class="sliding-wrapper">
        <div
          v-for="(itemSet, setIndex) in rowItems[row - 1]"
          :key="`set-${row}-${setIndex}`"
          class="sliding-track"
        >
          <div
            v-for="item in itemSet"
            :key="`item-${row}-${setIndex}-${item.id}`"
            class="grid-item"
            :style="{ backgroundColor: item.color }"
          >
            {{ item.id }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";

interface GridItem {
  id: number;
  color: string;
}

// Create a reactive array to store all row items
const rowItems = reactive<GridItem[][][]>([]);

// Base speed for animations (lower = faster)
const baseSpeed = 20;

// Generate random color in pastel range
const getRandomPastelColor = (): string => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 80%)`;
};

// Calculate row-specific animation duration
const getRowDuration = (row: number): number => {
  // Stagger speeds between rows
  return baseSpeed + ((row * 3) % 5);
};

// Create grid items with unique IDs and colors
const generateGridItems = (count: number): GridItem[] => {
  const items: GridItem[] = [];
  for (let i = 1; i <= count; i++) {
    items.push({
      id: i,
      color: getRandomPastelColor(),
    });
  }
  return items;
};

onMounted(() => {
  // Initialize items for each row (3 rows)
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    // Create multiple sets of items for better looping
    const baseItems = generateGridItems(8);
    rowItems.push([[...baseItems], [...baseItems], [...baseItems]]);
  }
});
</script>

<style lang="scss" scoped>
.infinite-grid-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 0;
}

.grid-row {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.sliding-wrapper {
  display: flex;
  width: 100%;
  overflow: visible;
  position: relative;
}

.sliding-track {
  display: flex;
  animation: slide var(--slide-duration) linear infinite;
  position: absolute;
  left: 0;
  top: 0;
  width: max-content;

  &:nth-child(1) {
    animation-delay: calc(var(--slide-duration) * -0.33);
    transform: translateX(calc(100% * var(--slide-direction)));
  }

  &:nth-child(2) {
    animation-delay: calc(var(--slide-duration) * -0.66);
    transform: translateX(calc(200% * var(--slide-direction)));
  }

  &:nth-child(3) {
    transform: translateX(0);
  }
}

.grid-item {
  width: 120px;
  height: 120px;
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  color: rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% * 3 * var(--slide-direction)));
  }
}
</style>
