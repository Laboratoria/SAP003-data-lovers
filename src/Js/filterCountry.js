
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



function showSelectOrder() {
  const selectOrder = document.querySelector('.selectOrder').value;
  window.categoryData =
    selectOrder == 'decreasing'  ?
      window.xuxu.sort((a, b) => {
        if (a.year > b.year) {
          return -1;
        }
        if (a.year < b.year) {
          return 1;
        }
        return 0;
      }) : true
    
    //console.log(categoryData);
    return categoryData
    
     

}


// function showSelectOrder() {
//   const selectOrder = document.querySelector('.selectOrder').value;
//   const order = filterData.map(d => d.data)
//   for (let i = 0; i <= order.length; i++) {  
//     for (let j = 0; j <= order[i].length; j++) {
//       const data =  order[j].map(item => item.year);
//       if( selectOrder === 'decreasing'){
//         data.reverse()
//       } else{
//         data.sort()
//       }
//        return data;

//     }

//   }
// }

// function showSelectOrder() {
//   const selectOrder = document.querySelector('.selectOrder').value;
//   const order = filterData.map(d => d.data)
//   for (let i = 0; i <= order.length; i++) { 
//     if (selectOrder != "decreasing") {
//       for (let j = 0; j < order[i].length; j++) {
//         console.log(order[j].map(item => item.year));        
//       }

//     } else {
//       for (let k =order[i]; k >= 0; k--) {
//         console.log(order[k].map(item => item.year).reverse()); 
//       }

//     }
//   }
// }












