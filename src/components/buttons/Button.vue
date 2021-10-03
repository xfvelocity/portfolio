<template>
  <div>
    <v-tooltip v-if="tooltipMessage" top>
      <template v-slot:activator="{ on }">
        <v-btn
          v-if="icon || customIcon"
          :class="buttonClass"
          :color="color"
          v-on="on"
          :width="buttonSize"
          :height="buttonSize"
          :outlined="outlined"
          icon
          @click="$emit('click')"
        >
          <img
            v-if="customIcon"
            :style="`width: ${imgSize}`"
            :src="iconName"
            alt=""
          />
          <v-icon v-else :large="largeIcon" :color="iconColor">{{
            iconName
          }}</v-icon>
        </v-btn>
      </template>
      <span>{{ tooltipMessage }}</span>
    </v-tooltip>
    <v-btn
      v-else-if="icon || customIcon"
      :class="buttonClass"
      :color="color"
      :width="buttonSize"
      :height="buttonSize"
      :outlined="outlined"
      icon
      @click="$emit('click')"
    >
      <img
        v-if="customIcon"
        :style="`width: ${imgSize}`"
        :src="iconName"
        alt=""
      />
      <v-icon v-else :large="largeIcon" :color="iconColor">{{
        iconName
      }}</v-icon>
    </v-btn>
  </div>
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ default: false })
  icon!: boolean;
  @Prop({ default: false })
  customIcon!: boolean;
  @Prop({ default: "transparent" })
  color!: string;
  @Prop({ default: "white" })
  iconColor!: string;
  @Prop({ default: "" })
  tooltipMessage!: string;
  @Prop({ default: "24px" })
  imgSize!: string;
  @Prop({ default: "32px" })
  buttonSize!: string;
  @Prop({ default: false })
  outlined!: boolean;
  @Prop({ default: false })
  largeIcon!: boolean;
  @Prop()
  buttonClass!: string;
  @Prop()
  iconName!: string;
}
</script>