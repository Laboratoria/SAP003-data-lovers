//manipulação de dados através de arrays e objetos.
// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window
const example = () => {
  return "example";
};


window.data = {
  peru: peruData,
  mexico: mexicoData,
  brasil: brasilData,
  chile: chileData
}
////////////////////////////////////////////////////

/*
const countries = [peruCountry, mexicoCountry, brasilCountry, chileCountry]
*/

const peruCountry = WORLDBANK.PER.indicators
const mexicoCountry = WORLDBANK.MEX.indicators
const brasilCountry = WORLDBANK.BRA.indicators
const chileCountry = WORLDBANK.CHL.indicators

/*
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);
*/


peruData = () => {

  peruCountry.map(elem => console.log(elem.countryName));
  /*
  for (let banana in WORLDBANK){    
    [banana].indicators.map(elem => console.log(elem.indicatorCode));
  }
  */

  
};
console.log(peruData());



mexicoData = () => {

  mexicoCountry.map(elem => console.log(elem.indicatorCode));
    
};
//console.log(mexicoData());



brasilData = () => {

  brasilCountry.map(elem => console.log(elem.indicatorCode));

};
//console.log(brasilData());



chileData = () => {

  chileCountry.map(elem => console.log(elem.indicatorCode));

};
//console.log(chileData());
