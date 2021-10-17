export type Page = {
  component: string;
  inView: boolean;
  id: string;
  info?: any;
};

export type FullPageOptions = {
  licenseKey: string;
  anchors?: string[];
  scrollingSpeed?: number;
  lockAnchors?: boolean;
  controlArrows?: boolean;
  scrollHorizontally?: boolean;
  scrollHorizontallyKey?: string;
  onLeave?: (origin: OnLeaveOrigin, destination: OnLeaveDestination) => void;
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
