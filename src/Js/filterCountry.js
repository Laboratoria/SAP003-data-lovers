
const chosenIndicators = [
  "SL.TLF.TOTL.FE.ZS",
  "SL.UEM.TOTL.FE.ZS",
  "SL.EMP.TOTL.SP.FE.ZS",
  "SE.PRM.ENRL.FE.ZS",
  "SE.SEC.ENRL.FE.ZS",
  "SE.TER.CUAT.ST.FE.ZS",
];


function showSelectCountry() {

  const selectCountry = document.querySelector('.selectCountry').value;
  const getDataFromBank = WORLDBANK[selectCountry].indicators;

  window.filterData = getDataFromBank.filter(el => chosenIndicators.includes(el.indicatorCode))
    .map(info => {
      const clearedData = Object.entries(info.data).reduce((dataArr, curr) => {
        return (curr[1] !== '')
          ? [...dataArr, { year: curr[0], value: curr[1] }]
          : dataArr
      }, []);
      return { ...info, data: clearedData }
    });
  document.getElementById('root').innerHTML = repeatTable(filterData);

};

function showSelectOrder(event) {
  event.preventDefault();
  const selectOrder = document.querySelector('.selectOrder').value;
  const data = filterData.map(d => d.data);
  
  selectOrder !== "growing" ? data.reverse() : data.sort() ;
 
  return data;
}










