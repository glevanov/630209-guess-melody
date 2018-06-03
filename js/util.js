export const app = document.querySelector(`.app`);

export const getScreenFromTemplate = (templateText) => {
  const element = document.createElement(`template`);
  element.innerHTML = templateText.trim();
  return element.content;
};

export const renderScreen = (element) => {
  const activeScreen = app.querySelector(`.main`);
  app.replaceChild(element, activeScreen);
};
