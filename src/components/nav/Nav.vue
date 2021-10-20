<template>
  <nav
    id="nav"
    class="px-6 pt-6 d-flex align-center"
    :class="screenWidth > 1200 ? 'pt-8 pr-12' : 'pt-6 pr-6'"
  >
    <v-spacer></v-spacer>
    <div class="d-flex">
      <Button
        :class="screenWidth >= 768 ? 'mr-4' : 'mr-2'"
        :imgSize="screenWidth >= 768 ? '29px' : '24px'"
        :iconName="require('@/assets/icons/github.svg')"
        :customIcon="true"
        @click="goToLink('https://github.com/xfvelocity')"
      />
      <Button
        :imgSize="screenWidth >= 768 ? '29px' : '24px'"
        :iconName="require('@/assets/icons/linkedin.svg')"
        :customIcon="true"
        @click="goToLink('https://www.linkedin.com/in/alex-long-31339a15a/')"
      />
    </div>
  </nav>
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  @Prop({ default: true })
  showName!: string;

  hideSensitiveData: boolean =
    process.env.VUE_APP_HIDE_SENSITIVE_DATA === "true";
}
</script>
<style lang="scss">
#nav {
  position: absolute;
  width: 100%;
  z-index: 99;
}
</style>