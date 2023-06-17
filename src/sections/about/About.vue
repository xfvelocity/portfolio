<template>
  <div class="full-height">
    <div class="about xf-center max-width">
      <transition name="slide-fade-top">
        <xf-icon class="solar-system" src="solar-system.svg" />
      </transition>

      <transition name="slide-fade-bottom">
        <div class="text">
          <h2 class="xf-mt-6 xf-mb-3 xf-text-32">About Me</h2>
          <p>
            A passionate self-taught developer with
            <span class="xf-text-colour-blue-lighten-2 xf-fw-600">
              more than 3 years of experience
            </span>
            in web development. My love for development is constantly fuelled by
            the thrill of creating and troubleshooting code.
          </p>
          <p class="xf-my-4">
            Experience with a range of JavaScript frameworks such as
            <span class="xf-text-colour-blue-lighten-2 xf-fw-600">
              Vue 3 (Nuxt), React 18 (Next), Astro</span
            >.
          </p>
          <p>
            Integration with CMS
            <span class="xf-text-colour-blue-lighten-2 xf-fw-600"
              >Strapi, Sanity.io</span
            >
            and tested with
            <span class="xf-text-colour-blue-lighten-2 xf-fw-600"
              >Cypress, Vitest, Jest</span
            >.
          </p>

          <div
            class="xf-flex xf-mt-8 xf-cursor-pointer"
            @click="goToLink('/alexlong-cv.pdf')"
          >
            <p class="xf-fw-700 xf-mr-2">CV / Resume</p>
            <xf-icon src="icons/download.svg" fill="white" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { goToLink } from "@/composables/utils";
import { XfIcon } from "xf-cmpt-lib";
</script>

<style lang="scss">
.about {
  .text {
    max-width: 400px;
    margin: 0 auto;

    h2 {
      text-align: center;
    }

    p {
      font-size: 14px;
    }
  }

  .solar-system {
    height: 100%;
    width: 100%;
    display: block;
    margin: 0 auto;

    #outer-ring {
      transform-origin: center;
      animation: rotateClockwise 320s linear infinite;
    }

    #inner-ring {
      transform-origin: center;
      animation: rotateAntiClockwise 240s linear infinite;
    }

    @keyframes rotateClockwise {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes rotateAntiClockwise {
      to {
        transform: rotate(-360deg);
      }
    }
  }
}
</style>
