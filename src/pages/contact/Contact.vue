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
            :buttonClass="windowWidth >= 768 ? 'pa-10' : 'pa-8'"
            :largeIcon="windowWidth < 768"
            :xLargeIcon="windowWidth >= 768"
            :iconName="option.name"
            outlined
            icon
            @click="goToLink(option.value)"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { goToLink } from "../../shared/helpers/utils";
import { ContactOptions } from "../../shared/types/contact.types";

import Button from "../../components/buttons/Button.vue";

export default defineComponent({
  name: "Contact",
  components: {
    Button,
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
    const contactOptions: ContactOptions[] = [
      {
        name: "phone",
        value: "tel:07411820679",
      },
      {
        name: "mail",
        value: "mailto:alexlong2001@outlook.com",
      },
    ];

    return {
      contactOptions,
      goToLink,
    };
  },
});
</script>

<style lang="scss">
#contact {
  height: 100%;

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
