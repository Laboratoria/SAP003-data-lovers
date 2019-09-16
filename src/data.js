//MAIN JS
const printDataPer = document.getElementById("select-peru")
const printYearPer = document.getElementById("year-peru")

const printDataMex = document.getElementById("select-mexico")
const printYearMex = document.getElementById("year-mexico")

const printDataBra = document.getElementById("select-brasil")
const printYearBra = document.getElementById("year-brasil")

const printDataChl = document.getElementById("select-chile")
const printYearChl = document.getElementById("year-chile")

//DATA.JS
let dado = WORLDBANK

const peruDatas = dado.PER.indicators
const yearPeruData = peruDatas[0].data

const mexDatas = dado.MEX.indicators
const yearMexicoData = mexDatas[0].data

const braDatas = dado.BRA.indicators
const yearBrasilData = braDatas[0].data

const chlDatas = dado.CHL.indicators
const yearChileData = chlDatas[0].data


countryDatas = () => {
  peruDatas.map((elem) => {
    printDataPer.innerHTML += `<option>${elem.indicatorName}</option>`
  })
  for (item of Object.keys(yearPeruData)){
    printYearPer.innerHTML += `<option>${item}</option>`
  }
  
  mexDatas.map((elem) => {
    printDataMex.innerHTML += `<option> ${elem.indicatorName}</option>`
  })
  for (item of Object.keys(yearMexicoData)){
    printYearMex.innerHTML += `<option>${item}</option>`
  }

  braDatas.map((elem) => {
    printDataBra.innerHTML += `<option> "${elem.indicatorName}"</option>`
  })
  for (item of Object.keys(yearBrasilData)){
    printYearBra.innerHTML += `<option>${item}</option>`
  }

  chlDatas.map((elem) => {
    printDataChl.innerHTML += `<option>${elem.indicatorName}</option>`
  })
  for (item of Object.keys(yearChileData)){
    printYearChl.innerHTML += `<option>${item}</option>`
  }
}
countryDatas();


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