function animate(element, clazz) {
  return new Promise((res, rej) => {
    element.addEventListener("animationend", () => {
      res();
    });
    element.classList.add(clazz);
  });
}

module.exports = function(content) {
  return new Promise((res, rej) => {
    const message = document.createElement("div");
    message.style.cssText =
      "display:inline-block;padding:10vh;background:white;border:1px solid #ccc;";
    message.classList.add("fadein");
    message.textContent = content;

    const backdrop = document.createElement("div");
    backdrop.style.cssText =
      "background:rgba(255, 255, 255, 0.8);position:absolute;top:0;left:0;bottom:0;right:0;text-align:center;padding:10vh;";
    backdrop.appendChild(message);
    backdrop.onclick = async e => {
      await animate(message, "fadeout");
      document.body.removeChild(backdrop);
      res();
    };
    document.body.appendChild(backdrop);
  });
};
