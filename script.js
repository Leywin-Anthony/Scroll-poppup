let previewScroll = 0;
let btnPopup = true;
window.addEventListener("scroll", () => {
  if (window.scrollY < previewScroll) {
    navbar.style.height = "90px";
  } else {
    navbar.style.height = "50px";
  }
  previewScroll = window.scrollY;

  // !cette formule est ultra importante pour le scroll effect
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  // !

  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "translateX(-100px)";
  }
  if (scrollValue > 0.85 && btnPopup) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    btnPopup = false;
  }
});
closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
