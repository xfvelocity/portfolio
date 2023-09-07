<template>
  <div class="project full-height">
    <div class="xf-center project-max-width">
      <transition name="slide-up">
        <div class="project-content xf-p-6 xf-p-md-10">
          <img
            class="xf-w-100"
            :class="{ 'xf-cursor-pointer xf-hover': info.route }"
            :src="`img/${info.img}`"
            alt=""
            @click="openLink(info.route)"
          />

          <h3 class="xf-my-3 xf-text-30 xf-text-36-md">
            {{ info.name }}
          </h3>

          <div class="text-desc">
            <p
              v-for="(text, i) in info.desc"
              :key="i"
              class="xf-text-14 xf-text-16-sm xf-mb-2"
            >
              {{ text }}
            </p>

            <div class="xf-flex xf-flex-align-items-center xf-mt-8">
              <a
                v-for="(link, i) in info.links"
                :key="i"
                :href="link.link"
                target="_blank"
              >
                <xf-icon
                  :src="`icons/${link.name}.svg`"
                  class="xf-mr-2 xf-hover"
                  :size="20"
                  :title="link.name"
                />
              </a>

              <div class="xf-ml-auto xf-flex xf-flex-align-items-center">
                <xf-icon
                  v-for="(tech, i) in info.technologies"
                  :key="`tech-${i}`"
                  :src="`icons/skills/${tech}.svg`"
                  class="xf-mr-1"
                  :size="20"
                  :title="tech"
                />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XfIcon } from "xf-cmpt-lib";

interface PageInfoLink {
  name: string;
  link: string;
}

interface PageInfo {
  name: string;
  desc: string[];
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
    border-radius: 20px;

    &:hover {
      opacity: 0.8;
      transform: scale(1.01);
      transition: all 0.2s;
    }
  }

  img {
    border-radius: 20px;
  }

  &-max-width {
    width: 100% !important;
    max-width: 320px;
    margin: 0 auto;

    @include sm-up {
      max-width: 650px;
    }
  }
}
</style>
