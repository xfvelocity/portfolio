export const getImageUrl = (filename: string): string => {
  const path = `/src/assets/${filename}`;
  const imageModules = import.meta.glob(
    "/src/assets/**/*.{png,jpg,jpeg,svg,webp,gif,mp4,webm}",
    { eager: true },
  ) as Record<string, { default: string }>;

  if (imageModules[path]) {
    return imageModules[path].default;
  }

  throw new Error(`Image not found: ${path}`);
};

export const goToLink = (url: string) => {
  window.open(url);
};

export const debounce = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const throttle = (func: Function, interval: number) => {
  let lastCall = 0;

  return (...args: any) => {
    const now = Date.now();

    if (lastCall + interval < now) {
      lastCall = now;
      return func.apply(this, args);
    }
  };
};
