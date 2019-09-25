const data = RICKANDMORTY.results;

const myDiv = document.getElementById("perc");
const tela = document.getElementById("list");
const input = document.getElementById("input-persons");

input.addEventListener("keyup", searchPersons);
document.getElementById("btn-gender-fem").addEventListener("click", filterFemale);
document.getElementById("btn-gender-male").addEventListener("click", filterMale);
document.getElementById("btn-gender-unknown").addEventListener("click", filterGenderUnknown);
document.getElementById("btn-status-alive").addEventListener("click", filterAlive);
document.getElementById("btn-status-dead").addEventListener("click", filterDead);
document.getElementById("btn-status-unknown").addEventListener("click", filterStatusUnknown);
document.getElementById("btn-specie-Human").addEventListener("click", filterSpecieHuman);
document.getElementById("btn-specie-Humanoid").addEventListener("click", filterSpecieHumanoid);
document.getElementById("btn-specie-Alien").addEventListener("click", filterSpecieAlien);
document.getElementById("btn-order-az").addEventListener("click", allNameAtoZ);
document.getElementById("btn-order-za").addEventListener("click", allNameZtoA);

function buildHtmlPerc(obj) {
  let html = "";
  obj.itens.forEach((item) => html += `
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img src="${item.image}">
        <p>Nome: <strong>${item.name}</strong></p>
      </div>
        <div class="card-back">
          <ul class="card__list">
            <li>Nome: <strong>${item.name}</strong></li>
            <li>Status: <strong>${item.status}</strong></li>
            <li>Espécie: <strong>${item.species}</strong></li>
            <li>Gênero: <strong>${item.gender}</strong></li>
            <li>Origem: <strong>${item.origin.name}</strong></li>
            <li>Localização: <strong>${item.location.name}</strong></li>
          </ul>
        </div>
      </div>
  </div>
  `);
  myDiv.innerHTML = `${obj.perc}% dos personagens possuem essas características.`;
  tela.innerHTML = html ;
}

function searchPersons() {
  let search = input.value.toUpperCase();
  let name = {"itens": window.data.getPerson(data, search)};
  myDiv.classList.add("invisible");
  return buildHtmlPerc(name);
}

function filterFemale() {
  myDiv.classList.remove("invisible");
  buildHtmlPerc(window.data.getValue(data, "gender", "Female"));
}

function filterMale() {
  myDiv.classList.remove("invisible");
  buildHtmlPerc(window.data.getValue(data, "gender", "Male"));
}

function filterGenderUnknown() {
  myDiv.classList.remove("invisible");
  buildHtmlPerc(window.data.getValue(data, "gender", "unknown"));
}

function filterDead() {
  myDiv.classList.remove("invisible");
  buildHtmlPerc(window.data.getValue(data, "status", "Dead"));
}

function filterAlive() {
  myDiv.classList.remove("invisible");
  buildHtmlPerc(window.data.getValue(data, "status", "Alive"));
}

function filterStatusUnknown() {
  myDiv.classList.remove("invisible");
  buildHtmlPerc(window.data.getValue(data, "status", "unknown"));
}

function filterSpecieHuman() {
  myDiv.classList.remove("invisible");
  buildHtmlPerc(window.data.getValue(data, "species", "Human"));
}

function filterSpecieAlien() {
  myDiv.classList.remove("invisible");
  buildHtmlPerc(window.data.getValue(data, "species", "Alien"));
}

function filterSpecieHumanoid() {
  myDiv.classList.remove("invisible");
  buildHtmlPerc(window.data.getValue(data, "species", "Humanoid"));
}

function allNameAtoZ() {
  myDiv.classList.add("invisible");
  buildHtmlPerc({"itens": window.data.getAllName(data, "A-Z")});
}

function allNameZtoA() {
  myDiv.classList.add("invisible");
  buildHtmlPerc({"itens": window.data.getAllName(data, "Z-A")});
}