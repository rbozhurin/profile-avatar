import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const main = document.querySelector(".main");

  const image = document.createElement("div");
  image.classList.add("image");

  const img = document.createElement("img");
  img.setAttribute("src", "https://picsum.photos/200");
  image.appendChild(img);

  main.appendChild(image);

  image.addEventListener("click", () => {
    image.style.transform = "scale(2)";
  });

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
