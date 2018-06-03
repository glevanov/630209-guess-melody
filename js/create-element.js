export const createElement = (templateText) => {
  const element = document.createElement(`template`);
  element.innerHTML = templateText.trim();
  return element.content;
};
