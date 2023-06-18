const heroIdInp = document.getElementById("hero-id");
const showBtn = document.getElementById("btn-show");
const heroName = document.getElementById("hero-name");
const heroDetails = document.getElementById("hero-details");
console.log(`Hero input id is ${heroIdInp.value}`);

showBtn.addEventListener("click", function () {
  const inpID = heroIdInp.value;
  superHero(inpID);
});

const superHero = (id) => {
  fetch(`https://superheroapi.com/api.php/6451742424883148/${id}`)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      document.getElementById(
        "image"
      ).innerHTML = `<img src = '${json.image.url}' alt='super hero' height=200 width = 200/>`;
      heroName.innerText = json.name;
      heroDetails.innerText = `Combat : ${json.powerstats.combat}
                              Durability : ${json.powerstats.durability}
                              Intelligence : ${json.powerstats.intelligence}
                              Power : ${json.powerstats.power}
                              Speed : ${json.powerstats.speed}
                              Strength : ${json.powerstats.strength}`;
      powerStats(json);
    });
};

const powerStats = (superhero) => {
  console.log(superhero.powerstats);
};
