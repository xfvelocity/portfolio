<template>
  <v-btn
    :class="[buttonClass, 'cursor-pointer']"
    :color="color"
    :width="buttonSize"
    :height="buttonSize"
    :outlined="outlined"
    icon
    :variant="variant"
    @click="$emit('click')"
  >
    <img
      v-if="customIcon"
      :style="`width: ${imgSize}px`"
      :src="iconName"
      alt=""
    />
    <v-icon :icon="iconName" v-else :size="iconSize" :color="iconColor" />

    <v-tooltip v-if="tooltipMessage" activator="parent" location="start">
      <span>{{ tooltipMessage }}</span>
    </v-tooltip>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    iconName: {
      type: String,
      default: "",
    },
    customIcon: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: undefined,
    },
    iconColor: {
      type: String,
      default: "white",
    },
    tooltipMessage: {
      type: String,
      default: "",
    },
    imgSize: {
      type: Number,
      default: 24,
    },
    buttonSize: {
      type: Number,
      default: 32,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    iconSize: {
      type: String,
      default: "default",
    },
    buttonClass: {
      type: String,
      default: "",
    },
    variant: {
      type: String as PropType<
        "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"
      >,
      default: "plain",
    },
  },
  emits: ["click"],
});
</script>
