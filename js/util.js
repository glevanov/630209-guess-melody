const app = document.querySelector(`.app`);

export const renderScreen = (element) => {
  const activeScreen = app.querySelector(`.main`);
  app.replaceChild(element, activeScreen);
};

export const createElement = (templateText) => {
  const element = document.createElement(`template`);
  element.innerHTML = templateText.trim();
  return element.content;
};
