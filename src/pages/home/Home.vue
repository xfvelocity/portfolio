<template>
  <v-container id="home-page">
    <v-row
      class="align-center"
      :class="screenWidth > 1500 ? 'justify-space-between' : 'justify-center'"
    >
      <v-col v-if="!isTablet" cols="12">
        <img src="@/assets/saturn.svg" alt="" />
      </v-col>
      <v-col class="justify-center mt-10" :cols="isTablet ? 'auto' : 12">
        <div class="text">
          <h1>Alex Long</h1>
          <span>
            <h3>front end</h3>
            <h3>software engineer</h3>
          </span>
        </div>
      </v-col>
      <v-col v-if="isTablet" cols="6">
        <img src="@/assets/saturn.svg" alt="" />
      </v-col>
    </v-row>
  </v-container>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  get screenWidth(): number {
    return this.$store.state.screenWidth;
  }

  get isTablet(): boolean {
    return this.$store.state.screenWidth > 700;
  }
}
</script>
<style lang="scss">
#home-page {
  padding: 0 28px;
  height: 80vh;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  .text {
    max-width: 275px;
    margin: 0 auto;
    h1 {
      font-size: 50px;
      margin: 0;
      letter-spacing: 0.2rem;
    }

    h3 {
      font-size: 16px;
      font-weight: 400;
      margin: 0;
      letter-spacing: 0.2rem;
    }
  }

  @media (min-width: 550px) {
    .text {
      max-width: 300px;
      h1 {
        font-size: 60px;
      }
      h3 {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 700px) {
    img {
      max-width: 650px;
    }
  }
  @media (min-width: 1100px) {
    .text {
      max-width: none;
      h1 {
        font-size: 80px;
      }
    }
  }
}
</style>