function filterDatas(data, selectValue) {
  return data.filter(indicador => indicador.indicatorName === selectValue);
}

function reduceYears(hi, bye) {

}

window.filterDatas = filterDatas;
