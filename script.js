let fetchRes = fetch("http://demo.tech2edge.co/samples/data-sg");
var body = document.querySelector("body");
var casting = document.querySelector(".casting");

var images = document.querySelectorAll("img");
var imgmodel = document.querySelector(".imgmodel");

let imageUrl = "";
fetchRes
  .then((res) => res.json())
  .then((data) => {
    imageUrl = data.series.img;
    console.log("Hello", imageUrl);
    body.style.background = `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${imageUrl})`;
    let characters = data.characters;
    let result = "";
    for (let i = 0; i < characters.length; i++) {
      result += `<div class="character">
        <img src="${characters[i].img}"></img>
        <div>Name: ${characters[i].name}</div>
        <div>Age: ${characters[i].age}</div>
        <div>Profession: ${characters[i].age}</div>
      </div>`;
    }

    casting.innerHTML = result;
    images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      images[i].onclick = function () {
        imgmodel.classList.toggle("showimg");
        imgmodel.style.backgroundImage = `url(${this.src})`;
      };
    }

    imgmodel.onclick = function () {
      imgmodel.classList.remove("showimg");
    };
  });

for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    imgmodel.classList.toggle("showimg");
    imgmodel.style.backgroundImage = `url(${this.src})`;
  };
}

imgmodel.onclick = function () {
  imgmodel.classList.remove("showimg");
};
