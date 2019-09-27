function filterDatas(data, indicatorValue) {
  return data.filter(indicador => indicador.indicatorName === indicatorValue);
}

function dataAverage(ano) {
  console.log(ano)
  const filterYear = Object.entries(ano).filter(ano => ano[1] !== "");
  const mapYear = filterYear.map(year => year[1]);
  const soma = mapYear.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return soma / mapYear.length;
}

//console.log(dataAverage({"2002": 31.4799995422363, "2003": 29.6299991607666, "2004": 27.6299991607666}));

function sortData(array) {
  return array.sort(function (a, b) {
    return a.indicatorName.localeCompare(b.indicatorName);
  });
}

window.filterDatas = filterDatas;
window.sortData = sortData;
window.dataAverage = dataAverage;

