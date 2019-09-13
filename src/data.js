// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window
const example = () => {
  return "example";
};
window.example = example;

/*
window.data = {
  peru: peruData,
  mexico: mexicoData,
  brasil: brasilData,
  chile: chileData
}*/
////////////////////////////////////////////////////

const peruCountry = WORLDBANK.PER.indicators
const mexicoCountry = WORLDBANK.MEX.indicators
const brasilCountry = WORLDBANK.BRA.indicators
const chileCountry = WORLDBANK.CHL.indicators


const peru = peruCountry.map
(peruData => {
  console.log(peruData.countryName);

});

document.getElementById("peru-write").innerHTML = `esse é o nome do pais ${peru.countryName}`


const mexico = mexicoCountry.map(mexicoData => {
  console.log(mexicoData.countryName);
})
/*
for (let banana in peruCountry){
  peruCountry.map(elem => console.log(elem.indicatorName));
}
 }*/

const brasil = brasilCountry.map(brasilData => {
  console.log(brasilData.countryName);
})

const chile = chileCountry.map(chileData => {
  console.log(chileData.countryName);
})


/*
chileData = () => {

  chileCountry.map(elem => console.log(elem.indicatorCode));

};
console.log(chileData());
*/
