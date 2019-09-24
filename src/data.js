function filterDatas(data, selectValue) {
  return data.filter(indicador => indicador.indicatorName === selectValue);
}

function sortData(array) {
  return array.sort(function (a, b) {
    return a.indicatorName.localeCompare(b.indicatorName) //mudar de lugar
  });
}

//function reduceYears(hi, bye) {
//
//}

window.filterDatas = filterDatas;
window.sortData = sortData;
