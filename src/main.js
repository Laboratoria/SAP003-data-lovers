const selectPais = document.getElementById("select-country");
selectPais.addEventListener("change", () => {
  sortData(WORLDBANK[selectPais.value].indicators);
  countryDatas();
});

const getData = document.getElementById("select-dados");
const getYears = document.getElementById("select-ano");

const button = document.getElementById("btn-ver");
const result = document.getElementById("result");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const countryValue1 = selectPais.value;
  const indicators1 = WORLDBANK[countryValue1].indicators;
  const dataFiltrado = filterDatas(indicators1, getData.value);// filterDatas(indicators1, getData.value, getYears.value);

  dataFiltrado.map(item => {    
    if (item.data[getYears.value] === "") {
      result.innerHTML = "Não tem dados!";
    } else {
      result.innerHTML = `Esse é o resultado ${parseInt(item.data[getYears.value])}%`;
    }
  });
  
  const years = WORLDBANK[countryValue1].indicators[0].data; 
  console.log(Object.values(years)) 
  Object.values(years).reduce((acc, cur) => {
    //console.log(acc + years[cur])
    if (cur !== ""){
      //console.log("oi");
    return (acc + cur) / acc.length
  }
  console.log(acc)

  return acc
  }, 0)

});

function countryDatas() {
  getData.innerHTML = "";
  getYears.innerHTML = "";
  
  const countryValue = selectPais.value;
  const indicators = WORLDBANK[countryValue].indicators;

  indicators.map((elem) => {
    getData.innerHTML += `<option>${elem.indicatorName}</option>`;
  });

  const years = WORLDBANK[countryValue].indicators[0].data;  
  for (item of Object.keys(years)) {
    getYears.innerHTML += `<option>${item}</option>`; 
  }
}
