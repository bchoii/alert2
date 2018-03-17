let alertbackground;

function removeNode(node) {
  node && node.parentNode && node.parentNode.removeChild(node);
}

// function removeChildren(node) {
//   var cNode = node.cloneNode(false);
//   node.parentNode.replaceChild(cNode, node);
// }

function animate(element, clazz) {
  if (!element) return;
  return new Promise((res, rej) => {
    element.addEventListener("animationend", () => {
      res();
    });
    element.classList.add(clazz);
  });
}

function show(content) {
  return new Promise(async (res, rej) => {
    await hide();
    const messagebox = document.createElement("div");
    messagebox.classList.add("messagebox");

    alertbackground = document.createElement("div");
    alertbackground.classList.add("alert2");
    alertbackground.classList.add("background");
    alertbackground.classList.add("fadein");
    alertbackground.appendChild(messagebox);

    alertbackground.onclick = () => {
      hide();
      res();
    };

    messagebox.textContent = content;
    document.body.appendChild(alertbackground);
  });
}

async function hide() {
  await animate(alertbackground, "fadeout");
  removeNode(alertbackground);
  alertbackground = undefined;
}

module.exports = { show, hide };
