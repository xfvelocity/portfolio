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
        "This was one of my first projects that I started working on and its been re-worked multiple times, currently using vue & nuxtjs. This is a website to help promote a family members landscaping business.",
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
        "HostingSolutions was a website in which I wanted to challenge my base html/css skills. This is one of my favourite websites i’ve created and tought me a lot about svg animations. v3",
      github: "https://github.com/xfvelocity/hosting-solutions",
      link: "",
      technologies: ["html", "css", "javascript", "sass"],
      img: require("@/assets/hostingsolutions.png"),
    },
  },
  {
    component: "Projects",
    id: "gymtracker",
    inView: false,
    info: {
      name: "Gym Tracker",
      desc:
        " I wanted to try my hand at a full-stack project which I could use everyday so I created the gym tracker, orignally used for meal prep it’s developed into a seamless gym tracking program",
      github: "https://github.com/xfvelocity/gym-progress-tracker",
      link: "https://www.gymprogresstracker.com",
      technologies: ["typescript", "vue", "vuetify", "mongodb", "nodejs"],
      img: require("@/assets/gymtracker.png"),
    },
  },
  { component: "Contact", id: "contact", inView: false },
];
