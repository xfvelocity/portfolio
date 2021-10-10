<template>
  <v-container id="about-page" class="d-flex align-center px-6">
    <v-row class="align-center">
      <v-col v-if="screenWidth < 740" class="pa-0" cols="12">
        <transition name="slide-fade-top">
          <SolarSystemSVG v-show="show" svgClass="solar-system_svg" />
        </transition>
      </v-col>
      <v-col :cols="screenWidth >= 740 ? '6' : 12">
        <transition name="slide-fade-bottom">
          <div v-show="show" class="text">
            <h2 class="mb-1">About Me</h2>
            <p>
              I'm, a self-taught developer with over
              <span class="light-blue--text text--lighten-2">2 years</span>
              experience who has a love for web development which is fueled by
              creating and troubleshooting code. It started with coding being a
              hobby which has now led to a full-time career.
            </p>
            <p>
              Experience with a range of Javascript frameworks such as
              <span class="light-blue--text text--lighten-2">Vue</span> &
              <span class="light-blue--text text--lighten-2">Svelte</span>.
              Paired alongside with
              <span class="light-blue--text text--lighten-2">Vuetify</span> &
              <span class="light-blue--text text--lighten-2">Tailwind</span> to
              build stunning looking websites. I can also build backend systems
              using
              <span class="light-blue--text text--lighten-2">NodeJS</span> &
              <span class="light-blue--text text--lighten-2">MongoDB</span> to
              help support these.
            </p>

            <div
              v-if="screenWidth >= 740"
              class="d-flex mt-8"
              @click="goToLink('/src/assets/alexlong-cv.pdf')"
            >
              <p class="font-weight-medium mr-1 mb-0">CV / Resume</p>
              <v-icon color="white">file_download</v-icon>
            </div>
          </div>
        </transition>
      </v-col>
      <v-col v-if="screenWidth >= 740" cols="6">
        <transition name="slide-fade-top">
          <SolarSystemSVG v-show="show" svgClass="solar-system_svg" />
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>
 
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import SolarSystemSVG from "./SolarSytemSVG.vue";

@Component({
  components: {
    SolarSystemSVG,
  },
})
export default class About extends Vue {
  @Prop()
  inView!: boolean;

  show: boolean = false;

  @Watch("inView")
  setContentVisible(): void {
    setTimeout(() => (this.show = this.inView), 300);
  }

  get screenWidth(): number {
    return this.$store.state.screenWidth;
  }

  goToLink(link: string): void {
    window.open(link);
  }
}
</script>

<style lang="scss">
#about-page {
  height: 80vh;
  margin: 0 auto;
  max-width: 1400px;

  .solar-system_svg {
    max-height: 200px;
    max-width: 200px;
    display: block;
    margin: 0 auto;
  }

  .text {
    max-width: 450px;
    margin: 0 auto;
    h2 {
      font-size: 40px;
      text-align: center;
    }
  }

  @media (min-width: 600px) {
    .solar-system_svg {
      max-width: 300px;
      max-height: 300px;
    }
  }

  @media (min-width: 740px) {
    .solar-system_svg {
      max-width: 350px;
      max-height: 350px;
    }

    .text {
      h2 {
        text-align: left;
        font-size: 60px;
      }
    }
  }

  @media (min-width: 1000px) {
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
      p {
        font-size: 16px;
      }
    }
    .solar-system_svg {
      max-width: 700px;
      max-height: 700px;
    }
  }

  @media (min-width: 1800px) {
    .solar-system_svg {
      max-width: 700px;
      max-height: 700px;
    }
  }
}
</style>