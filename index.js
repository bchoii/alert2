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
    const button = document.createElement("div");
    button.textContent = "Ok";
    button.onclick = () => {
      hide(res);
    };
    button.focus();

    const messagebox = document.createElement("div");
    messagebox.classList.add("messagebox");
    messagebox.textContent = content;
    messagebox.appendChild(document.createElement("hr"));
    messagebox.appendChild(button);

    // hide();
    background = document.createElement("div");
    background.classList.add("alert2");
    background.classList.add("background");
    background.classList.add("fadein");
    background.appendChild(messagebox);
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
