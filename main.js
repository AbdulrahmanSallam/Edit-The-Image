let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let rest = document.querySelector("span");
let imgBox = document.querySelector(".img-box");

window.onload = () => {
  download.style.display = "none";
  rest.style.display = "none";
  imgBox.style.display = "none";
};

upload.onchange = () => {
  download.style.display = "block";
  rest.style.display = "block";
  imgBox.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = () => {
    img.src = file.result;
  };
};

let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) => {
  filter.addEventListener("input", () => {
    img.style.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)
    `;
  });
});
