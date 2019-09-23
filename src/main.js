const selectPais = document.getElementById("select-country");
selectPais.addEventListener("change", countryDatas);

const getData = document.getElementById("select-dados");
const getYears = document.getElementById("select-ano");

const button = document.getElementById("btn-ver");
const result = document.getElementById("result");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const countryValue1 = selectPais.value;
  //const dataValue1 = getData.value
  const indicators1 = WORLDBANK[countryValue1].indicators;

  const dataFiltrado = data.filterDatas(indicators1, getData.value);

  dataFiltrado.map(item => {    
    if (item.data[getYears.value] === "") {
      result.innerHTML = "Não tem dados!";
    } else {
      result.innerHTML = `Esse é o resultado ${parseInt(item.data[getYears.value])}%`;
    }
  });
  // filterDatas(indicators1, getData.value, getYears.value);
});


function ordenaPorFavor(array) {
  return array.sort(function (a, b) {
    if (a.indicatorName > b.indicatorName) {
      return 1;
    }
    if (a.indicatorName < b.indicatorName) {
      return -1;
    }
    return 0;
  });
}

function countryDatas(e) {
  e.preventDefault();
  getData.innerHTML = "";
  getYears.innerHTML = "";
  
  const countryValue = selectPais.value;
  const indicators = WORLDBANK[countryValue].indicators;

//  indicators.sort(function (a, b) {
//    if (a.indicatorName > b.indicatorName) {
//      return 1;
//    }
//    if (a.indicatorName < b.indicatorName) {
//      return -1;
//    }
//    return 0;
//  });

  indicators.map((elem) => {
    getData.innerHTML += `<option>${elem.indicatorName}</option>`;
  });

  const years = WORLDBANK[countryValue].indicators[0].data;  
  for (item of Object.keys(years)) {
    getYears.innerHTML += `<option>${item}</option>`; 
  }
}

