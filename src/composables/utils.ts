export const dynamicImage = (url: string) => {
  return new URL(`/src/assets/${url}`, import.meta.url).href;
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
