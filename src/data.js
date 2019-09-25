function filterDatas(data, indicatorValue) {
  // console.log("data", data);
  // console.log("filterdatas", data.filter(indicador => indicador.indicatorName === indicatorValue));
  return data.filter(indicador => indicador.indicatorName === indicatorValue);
}

function dataAverage(ano) {
  // const years = WORLDBANK[countryValue1].indicators[0].data; 
  const filteredYears = Object.keys(ano).filter( year => ano[year] !== "");  
  const soma = Object.values(ano).reduce((acc, cur) => {//olhar a constante soma
    if (cur !== ""){      
      return acc + cur
    }
    return acc / filteredYears.length
  }, 0);

  return soma;

}

function sortData(array) {
  return array.sort(function (a, b) {
    return a.indicatorName.localeCompare(b.indicatorName); //mudar de lugar
  });
}

//function reduceYears(hi, bye) {
//
//}

window.filterDatas = filterDatas;
window.sortData = sortData;
dataAverage = dataAverage;

