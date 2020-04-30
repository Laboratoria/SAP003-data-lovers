
const chosenIndicators = [
  "SL.TLF.TOTL.FE.ZS",
  "SL.UEM.TOTL.FE.ZS",
  "SL.EMP.TOTL.SP.FE.ZS",
  "SE.PRM.ENRL.FE.ZS",
  "SE.SEC.ENRL.FE.ZS",
  "SE.TER.CUAT.ST.FE.ZS",
];

const newIndicator = [];

function showSelectCountry() {
  let selectCountry = document.querySelector('.selectCountry').value;
  const bank = WORLDBANK[selectCountry].indicators;

  bank.filter(i => {
    for (let indicator of chosenIndicators) {
      if (indicator === i.indicatorCode) {
        newIndicator.push({
          code: indicator,
          name: i.indicatorName,
          country: i.countryName,
        });
      }

      for (let year in i.data) {
        let percentForYear;
        if (i.data[year] !== '') {
          //console.log(i.data[year])
          percentForYear = i.data[year].toString().slice(0, 5);
        }
        newIndicator.push(percentForYear);
        document.getElementById('root').innerHTML = showTable(i.indicatorName, percentForYear, 0)
      }
    }
  })
  //console.log(newIndicator);

  return newIndicator
}







function showTable(name, data, percent) {

  const template = `
   <main>
   <div class="container-table">
   <table>
     <thead>
       <tr>
         <th>Categoria</th>
         <th>Ano</th>
         <th>%</th>
       </tr>
     </thead>
     <tbody>
       <tr>
       <td>
         ${name}
         </td>
         <td>
         ${data}
         </td>
         <td>
           ${percent}
         </td>
       </tr>
     </tbody>
     <tfoot>
       <tr>
         <td>
           <!-- calculo da média/soma -->
         </td>
       </tr>
     </tfoot>
   </table>
 </div>
 </main>
   `
  return template;
}



