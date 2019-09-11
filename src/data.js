// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

const example = () => {
  return "example";
};
window.example = example;



///////////////////////////////////////////////////////

//console.log(WORLDBANK.PER.indicators[0].countryCode

const peruCountry = WORLDBANK.PER
const mexicoCountry = WORLDBANK.MEX
const brasilCountry = WORLDBANK.BRA
const chileCountry = WORLDBANK.CHL

const countries = [peruCountry, mexicoCountry, brasilCountry, chileCountry]

countries.map(country => console.log(country.indicators[0].countryName));