import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const main = document.querySelector(".main");

  const image = document.createElement("div");
  image.className = "image";

  const img = document.createElement("img");
  img.src = "./images/rapid.png";
  image.appendChild(img);

  main.appendChild(image);
  const btn = document.querySelector(".image");
  btn.addEventListener("click", () => {
    image.style.transform = "scale(2)";
  });

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
