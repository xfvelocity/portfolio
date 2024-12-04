<template>
  <div class="full-height">
    <div class="contact max-width xf-center xf-flex-center">
      <transition name="slide-up">
        <div v-show="inView" class="xf-text-center">
          <h2 class="xf-fw-700">Get in touch</h2>
          <p class="contact-desc xf-text-14 xf-text-16-sm xf-mt-2">
            For any inquiries or collaboration opportunities, please feel free
            to reach out.
          </p>

          <div class="xf-flex-center xf-mt-8 xf-gap-4">
            <a
              v-for="(option, i) in contactOptions"
              :key="i"
              class="contact-icon"
              :href="option.route"
              :aria-label="option.icon"
            >
              <xf-icon
                class="xf-center"
                :src="dynamicImage(`icons/${option.icon}.svg`)"
                fill="white"
                :size="isMedium ? 28 : 24"
              />
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isMedium } from "@/composables/mediaQueries";
import { dynamicImage } from "@/composables/utils";

import { XfIcon } from "xf-cmpt-lib";

interface ContactOptions {
  icon: string;
  route: string;
}

// ** Props **
defineProps<{ inView: boolean }>();

// ** Data **
const contactOptions: ContactOptions[] = [
  {
    icon: "phone",
    route: "tel:07411820679",
  },
  {
    icon: "envelope",
    route: "mailto:alexlong2001@outlook.com",
  },
];
</script>

<style lang="scss">
@use "@/assets/styles/variables";

.contact {
  h2 {
    letter-spacing: 0.05em;
    font-size: 32px;

    @include variables.sm-up {
      font-size: 60px;
    }
  }

  &-desc {
    max-width: 400px;
    margin: 0 auto;
  }

  &-icon {
    border: 2px solid white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: relative;

    @include variables.sm-up {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
