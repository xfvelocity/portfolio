<template>
  <div
    ref="sectionsContainer"
    class="fullscreen xf-position-relative xf-w-100 xf-overflow-hidden"
  >
    <section
      v-for="(section, index) in sections"
      :key="section.id"
      :ref="(el) => registerSectionRef(el as HTMLElement, index)"
      class="fullscreen-section xf-position-relative xf-w-100 xf-overflow-hidden"
      :class="{ active: currentSectionIndex === index }"
      :id="section.id"
    >
      <slot
        :name="section.id"
        :id="section.id"
        :index="index"
        :active="currentSectionIndex === index"
      />
    </section>

    <div class="fullscreen-pagination">
      <button
        v-for="(section, index) in sections"
        :key="`nav-${section.id}`"
        class="fullscreen-pagination-dot"
        :class="{
          'fullscreen-pagination-dot-active': currentSectionIndex === index,
        }"
        @click="scrollToSection(index)"
        :aria-label="`Go to ${section.name}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

import { ref, onMounted, onBeforeUnmount } from "vue";

type Section = {
  id: string;
  name: string;
};

// ** Props **
const props = defineProps({
  sections: {
    type: Array as PropType<Section[]>,
    required: true,
  },
  scrollDuration: {
    type: Number,
    default: 500,
  },
  scrollOffset: {
    type: Number,
    default: 0,
  },
});

//  ** Data **
const currentSectionIndex = ref<number>(0);
const isScrolling = ref<boolean>(false);
const sectionsContainer = ref<HTMLElement | null>(null);
const sectionRefs = ref<HTMLElement[]>([]);

// ** Methods **
const scrollToSection = (index: number) => {
  if (index < 0 || index >= props.sections.length || isScrolling.value) return;

  isScrolling.value = true;
  currentSectionIndex.value = index;

  const targetSection = sectionRefs.value[index];
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Reset scrolling state after animation completes
    setTimeout(() => {
      isScrolling.value = false;
    }, props.scrollDuration);
  }
};

// Handle mouse wheel events
const handleWheel = (event: WheelEvent) => {
  event.preventDefault();

  if (isScrolling.value) return;

  // Determine scroll direction
  const direction = event.deltaY > 0 ? 1 : -1;
  const newIndex = currentSectionIndex.value + direction;

  // Check if new index is within bounds
  if (newIndex >= 0 && newIndex < props.sections.length) {
    scrollToSection(newIndex);
  }
};

// Handle keyboard navigation
const handleKeyDown = (event: KeyboardEvent) => {
  if (isScrolling.value) return;

  switch (event.key) {
    case "ArrowDown":
    case "PageDown":
      event.preventDefault();
      if (currentSectionIndex.value < props.sections.length - 1) {
        scrollToSection(currentSectionIndex.value + 1);
      }
      break;
    case "ArrowUp":
    case "PageUp":
      event.preventDefault();
      if (currentSectionIndex.value > 0) {
        scrollToSection(currentSectionIndex.value - 1);
      }
      break;
    case "Home":
      event.preventDefault();
      scrollToSection(0);
      break;
    case "End":
      event.preventDefault();
      scrollToSection(props.sections.length - 1);
      break;
  }
};

// Handle touch events for mobile
let touchStartY = 0;

const handleTouchStart = (event: TouchEvent) => {
  touchStartY = event.touches[0].clientY;
};

const handleTouchEnd = (event: TouchEvent) => {
  if (isScrolling.value) return;

  const touchEndY = event.changedTouches[0].clientY;
  const deltaY = touchStartY - touchEndY;

  // Minimum swipe distance to trigger section change
  const minSwipeDistance = 50;

  if (Math.abs(deltaY) > minSwipeDistance) {
    // Determine scroll direction
    const direction = deltaY > 0 ? 1 : -1;
    const newIndex = currentSectionIndex.value + direction;

    if (newIndex >= 0 && newIndex < props.sections.length) {
      scrollToSection(newIndex);
    }
  }
};

// Scroll to current section on resize
const handleResize = () => {
  scrollToSection(currentSectionIndex.value);
};

// Register section element references
const registerSectionRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    sectionRefs.value[index] = el;
  }
};

// ** Lifecycle **
// Setup event listeners on mount
onMounted(() => {
  if (sectionsContainer.value) {
    sectionsContainer.value.addEventListener("wheel", handleWheel, {
      passive: false,
    });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Initial scroll position
    setTimeout(() => {
      scrollToSection(currentSectionIndex.value);
    }, 100);
  }
});

// Clean up event listeners
onBeforeUnmount(() => {
  if (sectionsContainer.value) {
    sectionsContainer.value.removeEventListener("wheel", handleWheel);
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("resize", handleResize);
    document.removeEventListener("touchstart", handleTouchStart);
    document.removeEventListener("touchend", handleTouchEnd);
  }
});
</script>

<style lang="scss" scoped>
.fullscreen {
  height: 100vh;
  scroll-snap-align: start;

  &-section {
    height: 100vh;
    scroll-snap-align: start;
  }

  &-pagination {
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 10;

    @media (max-width: 768px) {
      top: auto;
      bottom: 20px;
      right: 50%;
      transform: translateX(50%);
      flex-direction: row;
      justify-content: center;
    }

    &-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.5);
      border: none;
      padding: 0;
      cursor: pointer;
      transition: all 0.3s ease;

      &-active {
        background-color: white;
        transform: scale(1.5);
      }
    }
  }
}
</style>
