
const chosenIndicators = [
  "SL.TLF.TOTL.FE.ZS",
  "SL.UEM.TOTL.FE.ZS",
  "SL.EMP.TOTL.SP.FE.ZS",
  "SE.PRM.ENRL.FE.ZS",
  "SE.SEC.ENRL.FE.ZS",
  "SE.TER.CUAT.ST.FE.ZS",
];


function showSelectCountry() {
  let selectCountry = document.querySelector('.selectCountry').value;
  const bank = WORLDBANK[selectCountry].indicators;
  bank.map(name => name.countryName);
  informationIndicators();
}


function informationIndicators() {

  const newIndicator = [];
  WORLDBANK.BRA.indicators.filter(i => {

    for (let indicator of chosenIndicators) {

      if (indicator === i.indicatorCode) {
        newIndicator.push( {
           code: indicator, 
           name: i.indicatorName, 
           data: i.data,
           pais: i.countryName, 
          });
        }
    }
  })
  return console.log(newIndicator)
}





function showTable() {

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
         <!--  nome  -->
         </td>
         <td>
         <!--  data  -->
         </td>
         <td>
           <!--  %  -->
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

document.getElementById('root').innerHTML = showTable();


