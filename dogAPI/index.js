console.log(
  fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response.json()
  )
);

const genNextImg = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      const dogImg = document.getElementById("image");
      dogImg.innerHTML = `<img src = '${json.message}' height = 400px width=500px />`;
    });
};

genNextImg();

const nextImg = document.getElementById("btn");
nextImg.addEventListener("click", genNextImg);
