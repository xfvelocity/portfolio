<template>
  <nav
    class="px-6 pt-6 d-flex align-center"
    :class="screenWidth >= 1200 ? 'pt-8 pr-12' : 'pt-6 pr-6'"
  >
    <v-spacer></v-spacer>
    <div class="d-flex">
      <Button
        class="mr-2"
        :imgSize="screenWidth >= 740 ? '29px' : '24px'"
        :iconName="require('@/assets/icons/github.svg')"
        :customIcon="true"
        @click="goToLink('https://github.com/xfvelocity')"
      />
      <Button
        :imgSize="screenWidth >= 740 ? '29px' : '24px'"
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
@media (min-width: 740px) {
  h3 {
    font-size: 22px;
  }
}
</style>