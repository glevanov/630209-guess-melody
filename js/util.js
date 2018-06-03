const app = document.querySelector(`.app`);

export const renderScreen = (element) => {
  const activeScreen = app.querySelector(`.main`);
  app.replaceChild(element, activeScreen);
};
