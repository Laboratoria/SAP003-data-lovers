const selectPais = document.getElementById("select-country");

selectPais.addEventListener("change", () => {
  sortData(WORLDBANK[selectPais.value].indicators);
  countryDatas();
});

const getYears = document.getElementById("select-ano");
const getData = document.getElementById("select-dados");

getData.addEventListener("change", () => {
  const indicators = WORLDBANK[selectPais.value].indicators;
  const dataFilter = indicators.filter(elem => elem.indicatorName === getData.value ? elem.data : null);
  popularAno(dataFilter[0].data);
  //console.log(dataFilter[0].data)
});

//const getYears = document.getElementById("select-ano");

//getYears.addEventListener("change", () =>{
//  const countryValue = selectPais.value;
//  const years = WORLDBANK[countryValue].indicators[0].data;
//  const carlos = years.filter(elem => elem.data === getYears ? elem : null)
//  popularAno(carlos[0].data);
//  console.log(carlos[0].data)
//})

const button = document.getElementById("btn-ver");
const result = document.getElementById("result");
const reduce = document.getElementById("reduce");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const countryValue1 = selectPais.value;
  const indicators1 = WORLDBANK[countryValue1].indicators;
  const dataFiltrado = filterDatas(indicators1, getData.value);
  dataFiltrado.map(item => {    
    if (item.data[getYears.value] === "") {
      result.innerHTML = "Não tem dados!";
    } else {
      result.innerHTML = `Esse é o resultado ${parseInt(item.data[getYears.value])}%`;
    }
  });

  const years = WORLDBANK[countryValue1].indicators[0].data;
  reduce.innerHTML = `Média por anos disponíveis ${parseInt(dataAverage(years))}%`;
});

function countryDatas() {
  getData.innerHTML = "";
  
  const countryValue = selectPais.value;
  const indicators = WORLDBANK[countryValue].indicators;

  indicators.map((elem) => {
    getData.innerHTML += `<option>${elem.indicatorName}</option>`;
  });

}

function popularAno(years) {
  getYears.innerHTML = "";
  const xuxu = Object.entries(years).filter(ano => ano[1] !== "");
     
   xuxu.map((elem) => {
    getYears.innerHTML += `<option>${elem[0]}</option>`;
  })
}
