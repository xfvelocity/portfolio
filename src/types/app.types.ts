export interface Page {
  component: string;
  id: string;
  info?: PageInfo;
}

export interface PageInfoLink {
  name: string;
  link: string;
}

export interface PageInfo {
  name: string;
  desc: string[];
  technologies: string[];
  img: string;
  links: PageInfoLink[];
}
