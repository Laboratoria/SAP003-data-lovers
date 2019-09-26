function filterDatas(data, indicatorValue) {
  return data.filter(indicador => indicador.indicatorName === indicatorValue);
}

function dataAverage(ano) {
  const xuxu = Object.entries(ano).filter(ano => ano[1] !== "");
  const banana = xuxu.map(year => year[1]);
  const soma = banana.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  
  return soma/banana.length;
}

console.log(dataAverage({"2002": 31.4799995422363, "2003": 29.6299991607666, "2004": 27.6299991607666}));

function sortData(array) {
  return array.sort(function (a, b) {
    return a.indicatorName.localeCompare(b.indicatorName); //mudar de lugar
  });
}

window.filterDatas = filterDatas;
window.sortData = sortData;
window.dataAverage = dataAverage;

