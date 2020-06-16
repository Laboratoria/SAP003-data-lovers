
const chosenIndicators = [
  "SL.TLF.TOTL.FE.ZS",
  "SL.UEM.TOTL.FE.ZS",
  "SL.EMP.TOTL.SP.FE.ZS",
  "SE.PRM.ENRL.FE.ZS",
  "SE.SEC.ENRL.FE.ZS",
  "SE.TER.CUAT.ST.FE.ZS",
];

function showData(data) {
  const fullYears = Object.entries(data);
   //console.log(fullYears);

  const filterData = fullYears.filter(data => {
    const [year, valueYear] = data;
    //console.log(data);
    return valueYear !== '';

  });
  return filterData.reduce((acc, item) => {
    const [year, valueYear] = item;
    acc[year] = valueYear;
    return console.log(acc)
  }, {});
};

function showSelectCountry() {
  const selectCountry = document.querySelector('.selectCountry').value;
  if (selectCountry === 'Country') {
    document.getElementById('root').innerHTML = '';
    return
  };
  const bank = WORLDBANK[selectCountry].indicators;
  const getData = bank
    .filter(item => chosenIndicators.includes(item.indicatorCode))
    .map(item => {
      return {
        name: item.indicatorName,
        data: item.data,
      };
    })
    .map(item => ({
      name: item.name,
      data: showData(item.data)
    }));

  document.getElementById('root').innerHTML = showTable(getData);
}

function showTable(categories) {

  const template = `
  <main>
  <div class="container-table">
  ${categories.map(category => showComponents(category))}
  </div>
  </main>
   `;
  return template;
}

function showLine(data) {
  return Object.entries(data).map(([year, valueYear]) => {
    console.log(data);
    
    return `<tr>
    <td>${year}</td>
    <td>${valueYear.toFixed(2)}</td>
    </tr>`;
  });
 
}



function showComponents(categories) {

  const template = `
<h2>${categories.name}</h2>
<div class='div-table'>
  <table>
      <thead>
        <tr>
          <th>Ano</th>
          <th>%/Ano</th>
        </tr>
      </thead>
      <tbody>
      ${showLine(categories.data).join('')}
      </tbody>
      <tfoot>
        <tr>
          <th>Média total</th>
          <th>
            <!-- calculo da média/soma -->
          </th>
        </tr>
      </tfoot>
    </table>
  </div>`

  return template
}

