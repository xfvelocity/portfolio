import { Page } from "@/shared/types/app.types";

export const pages: Page[] = [
  { component: "Home", id: "home", inView: false },
  { component: "About", id: "about", inView: false },
  {
    component: "Projects",
    id: "buildadream",
    inView: false,
    info: {
      name: "Build A-Dream",
      desc:
        "This was one of the first projects that I started working on and it's been re-worked multiple times, currently using Vue & Nuxtjs. This website was built for a family member to help promote their landscaping business.",
      github: "https://github.com/xfvelocity/build-a-dream",
      link: "https://buildadream.co.uk/",
      technologies: ["typescript", "vue", "vuetify", "nuxt"],
      img: require("@/assets/buildadream.png"),
    },
  },
  {
    component: "Projects",
    id: "hostingsolutions",
    inView: false,
    info: {
      name: "Hosting Solutions",
      desc:
        "HostingSolutions was a website in which I wanted to challenge my base HTML/CSS skills. This is one of the favourite websites I’ve created as it has taught me a lot about SVG animations.",
      github: "https://github.com/xfvelocity/hosting-solutions",
      link: "https://hosting-solutions.herokuapp.com/",
      technologies: ["html", "css", "javascript", "sass"],
      img: require("@/assets/hostingsolutions.png"),
    },
  },
  {
    component: "Projects",
    id: "trackit",
    inView: false,
    info: {
      name: "Track IT",
      desc:
        'This will be a new version of my previously developed "Gym Tracker" built on Vue 3. Currently in progress - Check the Repo to keep up to date with progress',
      github: "https://github.com/VelocityDevelopment/Track-IT",
      link: "https://www.gymprogresstracker.com/",
      technologies: ["typescript", "vue", "vuetify", "firebase"],
      img: require("@/assets/gymtracker.png"),
    },
  },
  { component: "Contact", id: "contact", inView: false },
];
