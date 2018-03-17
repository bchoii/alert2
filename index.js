var background;

function removeChildren(node) {
  var cNode = node.cloneNode(false);
  node.parentNode.replaceChild(cNode, node);
}

function animate(element, clazz) {
  return new Promise((res, rej) => {
    element.addEventListener("animationend", () => {
      res();
    });
    element.classList.add(clazz);
  });
}

function show(content) {
  return new Promise(async (res, rej) => {
    console.log("DEBUG");
    const message = document.createElement("div");
    message.classList.add("messagebox");
    message.textContent = content;

    // hide();
    background = document.createElement("div");
    background.classList.add("alert2");
    background.classList.add("background");
    background.classList.add("fadein");
    background.appendChild(message);
    background.onclick = () => {
      hide(res);
    };
    document.body.appendChild(background);
  });
}

async function hide(done) {
  if (background) {
    await animate(background, "fadeout");
    document.body.removeChild(background);
  }
  if (done) {
    done();
  }
}

module.exports = { show, hide };
