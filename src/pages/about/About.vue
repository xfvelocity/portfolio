<template>
  <v-container class="d-flex align-center px-6">
    <v-row class="align-center">
      <v-col v-if="windowWidth <= 768" class="pa-0" cols="12">
        <transition name="slide-fade-top">
          <SolarSystemSVG v-if="inView" svgClass="solar-system_svg" />
        </transition>
      </v-col>

      <v-col :cols="windowWidth > 768 ? 6 : 12">
        <transition name="slide-fade-bottom">
          <div v-if="inView" class="text">
            <h2 class="mb-1">About Me</h2>
            <p>
              I'm a self-taught developer with over
              <span class="light-blue--text text--lighten-2">2 years</span> of
              experience who has a love for web development which is fueled by
              creating and troubleshooting code. Started coding as a hobby which
              has now led to a full-time career.
            </p>
            <p>
              Experience with a range of Javascript frameworks such as
              <span class="light-blue--text text--lighten-2">Vue 3</span> &
              <span class="light-blue--text text--lighten-2">Svelte</span>.
              Paired with design frameworks such as
              <span class="light-blue--text text--lighten-2">
                Vuetify, Tailwind
              </span>
              & <span class="light-blue--text text--lighten-2">Ionic</span> to
              build stunning looking websites. I also have experience building
              backend systems using
              <span class="light-blue--text text--lighten-2">NodeJS</span> &
              <span class="light-blue--text text--lighten-2">MongoDB</span> or
              <span class="light-blue--text text--lighten-2">Firebase</span>
            </p>

            <div
              v-if="windowWidth > 768"
              class="d-flex mt-8"
              style="cursor: pointer"
              @click="goToLink('/alexlong-cv.pdf')"
            >
              <p class="font-weight-medium mr-1 mb-0">CV / Resume</p>
              <v-icon color="white">file_download</v-icon>
            </div>
          </div>
        </transition>
      </v-col>

      <v-col v-if="windowWidth > 768" cols="6">
        <transition name="slide-fade-top">
          <SolarSystemSVG v-if="inView" svgClass="solar-system_svg" />
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { goToLink } from "../../shared/helpers/utils";

import SolarSystemSVG from "./SolarSytemSVG.vue";

export default defineComponent({
  name: "About",
  components: {
    SolarSystemSVG,
  },
  props: {
    inView: {
      type: Boolean,
      default: false,
    },
    windowWidth: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    return {
      goToLink,
    };
  },
});
</script>

<style lang="scss">
#about {
  height: 80vh;
  margin: 0 auto;
  max-width: 1400px;

  .solar-system_svg {
    max-height: 220px;
    max-width: 220px;
    display: block;
    margin: 0 auto;
  }

  .text {
    max-width: 400px;
    margin: 0 auto;

    h2 {
      text-align: center;
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
