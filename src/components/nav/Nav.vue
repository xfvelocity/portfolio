<template>
  <nav
    id="nav"
    class="px-6 pt-6 d-flex align-center"
    :class="windowWidth > 1200 ? 'pt-8 pr-12' : 'pt-6 pr-6'"
  >
    <v-spacer />
    <div class="d-flex">
      <Button
        :class="windowWidth >= 768 ? 'mr-4' : 'mr-2'"
        :imgSize="windowWidth >= 768 ? 29 : 24"
        :iconName="dynamicImage('icons/github.svg')"
        customIcon
        @click="goToLink('https://github.com/xfvelocity')"
      />
      <Button
        :imgSize="windowWidth >= 768 ? 29 : 24"
        :iconName="dynamicImage('icons/linkedin.svg')"
        customIcon
        @click="goToLink('https://www.linkedin.com/in/alex-long-31339a15a/')"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { dynamicImage } from "../../shared/helpers/utils";

import Button from "../buttons/Button.vue";

export default defineComponent({
  name: "Nav",
  components: {
    Button,
  },
  props: {
    hideSensitiveData: {
      type: Boolean,
      default: false,
    },
    windowWidth: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const goToLink = (link: string): void => {
      window.open(link);
    };

    return {
      dynamicImage,
      goToLink,
    };
  },
});
</script>

<style lang="scss">
#nav {
  position: absolute;
  width: 100%;
  z-index: 99;
}
</style>
