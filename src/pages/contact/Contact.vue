<template>
  <div class="px-6 d-flex align-center" id="contact-page">
    <div>
      <h2 class="text-center">Get in touch</h2>
      <p class="text-center">
        Like what you see? or want to ask more questions, feel free to contact
        me.
      </p>
      <div class="d-flex align-center justify-center mt-12">
        <Button
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-2"
          color="white"
          buttonClass="pa-8"
          :largeIcon="true"
          :iconName="icon.name"
          :outlined="true"
          :icon="true"
          @click="goToLink(icon.value)"
        />
      </div>
    </div>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
  icons: any[] = [
    {
      name: "phone",
      value: "tel:07411820679",
    },
    {
      name: "mail",
      value: "mailto:alexlong2001@outlook.com",
    },
  ];

  goToLink(link: string): void {
    window.location.href = link;
  }
}
</script>
<style lang="scss">
#contact-page {
  height: 80vh;

  h2 {
    font-size: 40px;
  }
}
</style>