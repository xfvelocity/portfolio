<template>
  <div class="full-height">
    <div class="contact max-width xf-center xf-flex-center">
      <transition name="slide-up">
        <div v-show="inView" class="xf-text-center">
          <h2 class="xf-text-36 xf-fw-700">Get in touch</h2>
          <p class="contact-desc xf-text-14 xf-text-16-sm xf-mt-2">
            Like what you see? or want to ask more questions, feel free to
            contact me.
          </p>

          <div class="xf-flex-center xf-mt-8 xf-gap-4">
            <a
              v-for="(option, i) in contactOptions"
              :key="i"
              class="contact-icon"
              :href="option.route"
            >
              <xf-icon
                class="xf-center"
                :src="`icons/${option.icon}.svg`"
                fill="white"
                :size="24"
              />
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
    route: "mailto:alexlong.dev@outlook.com",
  },
];
</script>

<style lang="scss">
.contact {
  h2 {
    letter-spacing: 0.05em;
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
  }
}
</style>
