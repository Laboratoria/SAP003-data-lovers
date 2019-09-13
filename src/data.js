// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window
// const example = () => {
//   return "example";
// };
// window.example = example;
////////////////////////////////////////////////////

const dados = WORLDBANK

const peruCountry = WORLDBANK.PER.indicators
const mexicoCountry = WORLDBANK.MEX.indicators
const brasilCountry = WORLDBANK.BRA.indicators
const chileCountry = WORLDBANK.CHL.indicators

const paisEscolhido = "BRA"

// for (let pais in dados){
//   if (paisEscolhido === "BRA") {
//     const dadosPais = dados[pais].indicators
//     dadosPais.map(dado => console.log(dado.indicatorName))
//   }
// }

const selectBra = document.getElementById("indices")

if (paisEscolhido === "BRA") {
  const dadosPais = dados[paisEscolhido].indicators
  selectBra.innerHTML += `${dadosPais.map(dado => `<option>${dado.indicatorName}</option>`)}`
  }

//function filtro(tipoDeFiltro, pais){
//  return resultado filtrado
//}


const peru = peruCountry.map((peruData) => {  
  return peruData.countryName;
});
//console.log(peru)

const mexico = mexicoCountry.map((mexicoData) => {
  return mexicoData.countryName;
})


const brasil = brasilCountry.map((brasilData) => {
  return brasilData.countryName;
})

const chile = chileCountry.map((chileData) => {
  return chileData.countryName;
})


window.data = {
  peru: peru,
  mexico: mexico,
  brasil: brasil,
  chile: chile
}




/*
const trazerPaises = (pais) => {
  pais.map(nomePais => {
    console.log(nomePais.countryName);})

}

trazerPaises(mexicoCountry);
trazerPaises(brasilCountry);
*/

/*
chileData = () => {

  chileCountry.map(elem => console.log(elem.indicatorCode));

};
console.log(chileData());
*/

/*
for (let banana in peruCountry){
  peruCountry.map(elem => console.log(elem.indicatorName));
}
 }*/