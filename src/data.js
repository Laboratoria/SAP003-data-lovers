//MAIN JS
const selectDataPer = document.getElementById("select-peru")
const selectYearPer = document.getElementById("year-peru")

const selectDataMex = document.getElementById("select-mexico")
const selectYearMex = document.getElementById("year-mexico")

const selectDataBra = document.getElementById("select-brasil")
const selectYearBra = document.getElementById("year-brasil")

const selectDataChl = document.getElementById("select-chile")
const selectYearChl = document.getElementById("year-chile")


//DATA.JS
const perDatas = WORLDBANK.PER.indicators
const yearPeruData = perDatas[0].data

const mexDatas = WORLDBANK.MEX.indicators
const yearMexicoData = mexDatas[0].data

const braDatas = WORLDBANK.BRA.indicators
const yearBrasilData = braDatas[0].data

const chlDatas = WORLDBANK.CHL.indicators
const yearChileData = chlDatas[0].data


const btnPer = document.getElementById("btn-submit-per")
const btnBra = document.getElementById("btn-submit-bra")
const btnMex = document.getElementById("btn-submit-mex")
const btnChl = document.getElementById("btn-submit-chl")


//btnPer.addEventListener("click", filterInfosPeru);
btnBra.addEventListener("click", filterInfosBrasil);
btnMex.addEventListener("click", filterInfosMexico);
btnChl.addEventListener("click", filterInfosChile);

function filterInfosPeru(e) {
  e.preventDefault();
  const dataPerValue = selectDataPer.value
  const yearPerValue = selectYearPer.value
  filterTodos(perDatas, dataPerValue, yearPerValue);
  //const objIndice = perDatas.filter(indicador => indicador.indicatorName === dataPerValue)
  //objIndice.map(item => console.log(item.data[yearPerValue]))
}

function filterInfosBrasil(e) {
  e.preventDefault();
  const dataBraValue = selectDataBra.value;
  const yearBraValue = selectYearBra.value;
  filterTodos(braDatas, dataBraValue, yearBraValue);

  // console.log(dataBraValue, yearBraValue)
  // const objIndice = braDatas.filter(indicador => indicador.indicatorName === dataBraValue)
  // console.log(objIndice)
  // objIndice.map(item => console.log(item.data[yearBraValue]))
}

function filterInfosMexico(e) {
  e.preventDefault();
  const dataMexValue = selectDataMex.value
  const yearMexValue = selectYearMex.value
  filterTodos(mexDatas, dataMexValue, yearMexValue);

  //const objIndice = mexDatas.filter(indicador => indicador.indicatorName === dataMexValue)
  //objIndice.map(item => console.log(item.data[yearMexValue]))
}

function filterInfosChile(e) {
  e.preventDefault();
  const dataChlValue = selectDataChl.value
  const yearChlValue = selectYearChl.value
  filterTodos(chlDatas, dataChlValue, yearChlValue);
  //const objIndice = chlDatas.filter(indicador => indicador.indicatorName === dataChlValue)
  //objIndice.map(item => console.log(item.data[yearChlValue]))
}

function filterTodos(data, selectValue, yearValue) {
  const dataFiltrado = data.filter(indicador => indicador.indicatorName === selectValue);
  dataFiltrado.map(item => console.log(item.data[yearValue]))
}


perDatas.map((elem) => {
  selectDataPer.innerHTML += `<option>${elem.indicatorName}</option>`
})
for (item of Object.keys(yearPeruData)) {
  selectYearPer.innerHTML += `<option>${item}</option>`
}

braDatas.map((elem) => {
  selectDataBra.innerHTML += `<option>${elem.indicatorName}</option>`
})
for (item of Object.keys(yearBrasilData)) {
  selectYearBra.innerHTML += `<option>${item}</option>`
}

mexDatas.map((elem) => {
  selectDataMex.innerHTML += `<option> ${elem.indicatorName}</option>`
})
for (item of Object.keys(yearMexicoData)) {
  selectYearMex.innerHTML += `<option>${item}</option>`
}

chlDatas.map((elem) => {
  selectDataChl.innerHTML += `<option>${elem.indicatorName}</option>`
})
for (item of Object.keys(yearChileData)) {
  selectYearChl.innerHTML += `<option>${item}</option>`
}



 window.data = {
  filterTodos: filterTodos,
//   filterPeru: filterInfosBrasil,
//   filterPeru: filterInfosMexico,
//   filterPeru: filterInfosChile
}

//countryYears = () => {

  // dadosMex.map(year => {
  //   for(item of Object.keys(dadosyearMex)){
  //     yearMex.innerHTML +=`<option> "${item}"</option>`}
  // })
  // dadosBra.map(year => {
  //   for(item of Object.keys(dadosyearBra)){
  //     yearBra.innerHTML +=`<option> "${item}"</option>`}
  // })
  // dadosChl.map(year => {
  //   for(item of Object.keys(dadosyearChl)){
  //     yearChl.innerHTML +=`<option> "${item}"</option>`}
  // })
//};  


//console.log(countryYears());


















/*


let obj = {
  artista: "Anitta",
  titulo: "Goal",
  duracao: 150
}

function objectToArray(object) {
  let result = []
  for(key of Object.keys(object)){
    result.push(
      [key, object[key]]
    )
  }
  return result;
}
console.log(objectToArray(obj))
*/







/*
const eggsPokemon = pokes.filter(function(element){
  return element.egg == "2 km"


});

console.log(eggsPokemon)

var heroes = [
	{name: "batman", franchise: "DC"},
	{name: "Ironman", franchise: "Marvel"},
	{name: "Thor", franchise: "Marvel"},
	{name: "Superman", franchise: "DC"}
];

var marvelHeroes =  heroes.filter(function(hero) {
	console.log(hero.franchise == "Marvel");
});

*/
//dadosYearPer[0].data
//  dadosMex.map(elem => {selectMex.innerHTML +=`<option> ${elem.indicatorName}</option>`})

//  dadosBra.map(elem => {selectBra.innerHTML +=`<option> ${elem.indicatorName}</option>`})

//  dadosChl.map(elem => {selectChl.innerHTML +=`<option> ${elem.indicatorName}</option>`})