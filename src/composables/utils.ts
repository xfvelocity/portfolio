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

export const throttle = (func: Function, delay: number) => {
  let timeoutId;
  let lastExecTime = 0;

  return function (...args) {
    const now = Date.now();

    const execute = () => {
      func.apply(this, args);
      lastExecTime = now;
    };

    if (now - lastExecTime >= delay) {
      execute();
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(execute, delay - (now - lastExecTime));
    }
  };
};
