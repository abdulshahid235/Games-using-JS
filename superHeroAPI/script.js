const heroIdInp = document.getElementById("hero-id");
const showBtn = document.getElementById("btn-show");
const heroName = document.getElementById("hero-name");
const heroDetails = document.getElementById("hero-details");
const randHero = document.getElementById("random-hero");

console.log(Math.floor(Math.random() * 731) + 1);

randHero.addEventListener("click", function () {
  const randID = Math.floor(Math.random() * 731) + 1;
  fetch(`https://superheroapi.com/api.php/6451742424883148/${randID}`)
    .then((response) => response.json())
    .then((json) => {
      getSuperHero(json.name);
    });
});

showBtn.addEventListener("click", function () {
  const inpName = heroIdInp.value;
  getSuperHero(inpName);
});

const getSuperHero = (name) => {
  fetch(`https://superheroapi.com/api.php/6451742424883148/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.results[0]);
      document.getElementById(
        "image"
      ).innerHTML = `<img src = '${json.results[0].image.url}' alt='super hero' height=200 width = 200/>`;
      heroName.innerText = json.results[0].name;
      // heroDetails.innerText = `Combat : ${json.powerstats.combat}
      //                         Durability : ${json.powerstats.durability}
      //                         Intelligence : ${json.powerstats.intelligence}
      //                         Power : ${json.powerstats.power}
      //                         Speed : ${json.powerstats.speed}
      //                         Strength : ${json.powerstats.strength}`;
      heroDetails.innerHTML = powerStats(json.results[0]);
    });
};

const powerStats = (superhero) => {
  console.log(superhero.powerstats);
  const stats = Object.keys(superhero.powerstats).map((stat) => {
    return `<p> ${stat} : ${superhero.powerstats[stat]} </p>`;
  });

  console.log(stats);
  return stats.join("");
};
