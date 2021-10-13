export type Page = {
  component: string;
  inView: boolean;
};

export type FullPageOptions = {
  licenseKey: string;
  anchors: string[];
  scrollingSpeed: number;
  lockAnchors: true;
  onLeave: (origin: OnLeaveOrigin, destination: OnLeaveDestination) => void;
};

export type OnLeaveOrigin = {
  anchor: string;
  index: number;
  isFirst: boolean;
  isLast: boolean;
  item: HTMLElement;
};

export type OnLeaveDestination = {
  anchor: string;
  index: number;
  isFirst: boolean;
  isLast: boolean;
  item: HTMLElement;
};
