document.getElementById("btn-humans").addEventListener("click", clickHumans);
document.getElementById("btn-aliens").addEventListener("click", clickAliens);
document.getElementById("btn-alive").addEventListener("click", clickAlive);
document.getElementById("btn-dead").addEventListener("click", clickDead);
document.getElementById("btn-male").addEventListener("click", clickMale);
document.getElementById("btn-female").addEventListener("click", clickFemale);
document.getElementById("btn-Ordem").addEventListener("click",clickOrdem);
document.getElementById("btn-gene-desco").addEventListener("click",clickGeneDesc);
document.getElementById("btn-status-desco").addEventListener("click",clickStatusDesc);
// document.getElementById("btn-origin").addEventListener("click", clickOrigin);

function buildCard(person) {
  const card = `<div class="card">
    <h3>${person.name}</h3>
    <img src="${person.image}"/>
    <p> Status: ${person.status} <br /> Gender: ${person.gender} <br /> Espécie: ${person.species} <br/> Origin: ${person.origin.name} <br /> Location: ${person.location.name} </p>
  </div>`;
  return card;
}

function clickHumans() {
  const species = getSpecies("Human");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  species.forEach(item => cards.innerHTML += buildCard(item));
}

function clickAliens() {
  const species = getSpecies("Alien");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  species.forEach(item => cards.innerHTML += buildCard(item));
}

function clickMale() {
  const genders = getGender("Male");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  genders.forEach(item => cards.innerHTML += buildCard(item));
}

function clickFemale() {
  const genders = getGender("Female");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  genders.forEach(item => cards.innerHTML += buildCard(item));
}

function clickGeneDesc() {
  const genders = getGender("unknown");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  genders.forEach(item => cards.innerHTML += buildCard(item));
}

function clickAlive() {
  const status = getStatus("Alive");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  status.forEach(item => cards.innerHTML += buildCard(item));
}

function clickDead() {
  const status = getStatus("Dead");
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  status.forEach(item => cards.innerHTML += buildCard(item));
}

function clickStatusDesc() {
  const status = getStatus("unknown")
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  status.forEach(item => cards.innerHTML += buildCard(item));
}
function clickOrdem() {
  let ordem = RICKANDMORTY.results.sort((a,b)=>(a.name>b.name)? 1 :-1) //sort ordenou os valores dos tributos names do objeto results por ordem alfabetica (codigo asc)
  ordem.forEach(item => cards.innerHTML += buildCard(item));
}

