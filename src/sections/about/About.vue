<template>
  <div class="full-height">
    <div class="about xf-center max-width">
      <transition name="slide-fade-top">
        <SolarSystemSVG svgClass="solar-system_svg" />
      </transition>

      <transition name="slide-fade-bottom">
        <div class="text">
          <h2 class="xf-mt-6 xf-mb-3 xf-text-32">About Me</h2>
          <p>
            A passionate self-taught developer with
            <span class="xf-text-colour-blue">
              more than 3 years of experience
            </span>
            in web development. My love for development is constantly fuelled by
            the thrill of creating and troubleshooting code.
          </p>
          <p class="xf-my-4">
            Experience with a range of JavaScript frameworks such as
            <span class="xf-text-colour-blue">
              Vue 3 (Nuxt), React 18 (Next), Astro</span
            >.
          </p>
          <p>
            Integration with CMS
            <span class="xf-text-colour-blue">Strapi, Sanity.io</span> and
            tested with
            <span class="xf-text-colour-blue">Cypress, Vitest, Jest</span>.
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
import SolarSystemSVG from "./SolarSytemSVG.vue";
</script>

<style lang="scss">
.about {
  .solar-system_svg {
    height: 100%;
    width: 100%;
    display: block;
    margin: 0 auto;
  }

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

  @media (min-width: 768px) {
    .solar-system_svg {
      max-width: 350px;
      max-height: 350px;
      margin-bottom: 20px;
    }

    .text {
      max-width: 450px;

      h2 {
        text-align: left;
      }

      p {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 1000px) {
    width: 90%;
    margin: 0 auto;

    .solar-system_svg {
      max-width: 450px;
      max-height: 450px;
    }
  }

  @media (min-width: 1400px) {
    .row {
      justify-content: center;
    }

    .solar-system_svg {
      max-width: 550px;
      max-height: 550px;
    }
  }

  @media (min-width: 1600px) {
    .text {
      max-width: 550px;
    }

    .solar-system_svg {
      max-width: 650px;
      max-height: 650px;
    }
  }
}
</style>
