<template>
  <v-container id="about-page" class="d-flex align-center px-6">
    <v-row>
      <v-col class="mobile-img" cols="12">
        <img src="@/assets/solar-system.svg" alt="" />
      </v-col>
      <v-col class="text" cols="12">
        <h2 class="mb-2 text-center">About Me</h2>
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
          <span class="light-blue--text text--lighten-2">Svelte</span>. Paired
          alongside with
          <span class="light-blue--text text--lighten-2">Vuetify</span> &
          <span class="light-blue--text text--lighten-2">Tailwind</span> to
          build stunning looking websites. I can also build backend systems
          using <span class="light-blue--text text--lighten-2">NodeJS</span> &
          <span class="light-blue--text text--lighten-2">MongoDB</span> to help
          support these.
        </p>

        <div
          v-if="1 == 0"
          class="d-flex mt-8"
          @click="goToLink('/src/assets/alexlong-cv.pdf')"
        >
          <p class="font-weight-medium mr-1 mb-0">CV / Resume</p>
          <v-icon color="white">file_download</v-icon>
        </div>
      </v-col>
      <!-- <v-col cols="12">
        <img style="width: 100%" src="@/assets/solar-system.svg" alt="" />
      </v-col> -->
    </v-row>
  </v-container>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
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

  .mobile-img img {
    width: 150px;
    display: block;
    margin: 0 auto;
  }

  .text {
    max-width: 450px;
    margin: 0 auto;
    h2 {
      font-size: 40px;
    }
  }
}
</style>