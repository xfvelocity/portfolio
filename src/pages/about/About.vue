<template>
  <div id="about" class="d-flex align-center">
    <div class="text px-6">
      <h2 class="mb-2 text-center">About Me</h2>
      <p>
        I'm, a self-taught developer with over
        <span class="light-blue--text text--lighten-2">2 years</span> experience
        who has a love for web development which is fueled by creating and
        troubleshooting code. It started with coding being a hobby which has now
        led to a full-time career.
      </p>
      <p class="mt-8">
        Experience with a range of Javascript frameworks such as
        <span class="light-blue--text text--lighten-2">Vue</span> &
        <span class="light-blue--text text--lighten-2">Svelte</span>. Paired
        alongside with
        <span class="light-blue--text text--lighten-2">Vuetify</span> &
        <span class="light-blue--text text--lighten-2">Tailwind</span> to build
        stunning looking websites. I can also build backend systems using
        <span class="light-blue--text text--lighten-2">NodeJS</span> &
        <span class="light-blue--text text--lighten-2">MongoDB</span> to help
        support these.
      </p>
    </div>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>
<style lang="scss">
#about {
  height: 80vh;
  .text {
    h2 {
      font-size: 44px;
    }
  }
}
</style>