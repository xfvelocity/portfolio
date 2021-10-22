<template>
  <div class="px-6 d-flex justify-center align-center">
    <transition name="slide-fade-bottom">
      <div class="content" v-show="inView">
        <h2 class="text-center">Get in touch</h2>
        <p class="text-center">
          Like what you see? or want to ask more questions, feel free to contact
          me.
        </p>
        <div class="d-flex align-center justify-center mt-12">
          <Button
            v-for="(option, i) in contactOptions"
            :key="i"
            class="mx-2"
            color="white"
            :buttonClass="screenWidth >= 768 ? 'pa-10' : 'pa-8'"
            :largeIcon="screenWidth < 768"
            :xLargeIcon="screenWidth >= 768"
            :iconName="option.name"
            :outlined="true"
            :icon="true"
            @click="goToLink(option.value)"
          />
        </div>
      </div>
    </transition>
  </div>
</template>
 
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { ContactOptions } from "@/shared/types/contact.types";

@Component
export default class Contact extends Vue {
  @Prop()
  inView!: any;

  contactOptions: ContactOptions[] = [
    {
      name: "phone",
      value: "tel:07411820679",
    },
    {
      name: "mail",
      value: "mailto:alexlong2001@outlook.com",
    },
  ];
}
</script>
<style lang="scss">
#contact {
  .fp-tableCell {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    p {
      max-width: 350px;
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      h2 {
        font-size: 65px;
      }

      p {
        max-width: 450px;
        font-size: 18px;
      }
    }

    @media (min-width: 1400px) {
      h2 {
        font-size: 80px;
      }
    }

    @media (min-width: 1600px) {
      h2 {
        font-size: 100px;
      }

      p {
        max-width: 550px;
        font-size: 20px;
      }
    }
  }
}
</style>