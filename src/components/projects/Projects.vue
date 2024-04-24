<template>
  <div class="project full-height">
    <div class="xf-center project-max-width">
      <transition name="slide-up">
        <div class="project-content xf-p-6 xf-p-md-10">
          <img
            :class="{ 'xf-cursor-pointer xf-hover': info.route }"
            :src="dynamicImage(`img/${info.img}`)"
            alt=""
            @click="openLink(info.route)"
          />

          <div class="project-content-desc xf-mt-lg-6">
            <h3 class="xf-my-3 xf-text-30 xf-text-36-md">
              {{ info.name }}
            </h3>

            <p class="xf-text-14 xf-text-16-sm xf-text-18-lg">
              {{ info.desc }}
            </p>

            <div class="xf-mt-8 xf-mt-lg-12 xf-mt-xl-15">
              <div class="xf-flex xf-flex-align-items-center">
                <a
                  v-for="(link, i) in info.links"
                  :key="i"
                  :href="link.link"
                  :aria-label="link.name"
                  target="_blank"
                >
                  <xf-icon
                    :src="dynamicImage(`icons/${link.name}.svg`)"
                    class="xf-mr-2 xf-hover"
                    :size="isMedium ? 24 : 20"
                    :title="link.name"
                  />
                </a>

                <div class="xf-ml-auto xf-flex xf-flex-align-items-center">
                  <xf-icon
                    v-for="(tech, i) in info.technologies"
                    :key="`tech-${i}`"
                    :src="dynamicImage(`icons/skills/${tech}.svg`)"
                    class="xf-mr-1"
                    :size="isMedium ? 24 : 20"
                    :title="tech"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isMedium } from "@/composables/mediaQueries";
import { dynamicImage } from "@/composables/utils";

import { XfIcon } from "xf-cmpt-lib";

interface PageInfoLink {
  name: string;
  link: string;
}

interface PageInfo {
  name: string;
  desc: string;
  technologies: string[];
  img: string;
  links: PageInfoLink[];
  route: string;
}

// ** Props **
defineProps<{ info: PageInfo; inView: boolean }>();

// ** Methods **
const openLink = (route: string): void => {
  if (route) {
    window.open(route);
  }
};
</script>

<style lang="scss" scoped>
.project {
  &-content {
    background-color: rgba(21, 16, 48, 0.5);
    border-radius: 10px;

    img {
      border-radius: 5px;
      width: 100%;
      border: 1px solid rgb(111, 111, 111);
    }

    &:hover {
      opacity: 0.8;
      transform: scale(1.01);
      transition: all 0.2s;
    }

    @include lg-up {
      gap: 20px;

      h3 {
        font-size: 50px !important;
      }
    }
  }

  &-max-width {
    width: 100% !important;
    max-width: 320px;
    margin: 0 auto;

    @include sm-up {
      max-width: 650px;
    }

    @include md-up {
      max-width: 800px;
    }

    @include lg-up {
      max-width: 900px;
    }
  }
}
</style>
