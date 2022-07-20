export const dynamicImage = (url: string) => {
  return new URL(`/src/assets/${url}`, import.meta.url).href;
};

export const goToLink = (url: string) => {
  window.open(url);
};
