export const renderComponent = (div) => {
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/XHQBiozafb0";
  div.appendChild(iframe);
};
