document.querySelector('.selectCountry').addEventListener('change', showSelectCountry());
document.querySelector('.selectOrder').addEventListener('change', showSelectOrder());


function repeatTable(categories) {
  const template = `
   <main>
    <div class="container-table">
      ${categories.map(category => showTable(category)).join('')}
    </div>
  </main>
   `;
  return template;
};



function showTable(category) {
  window.xuxu = category.data;
  
  const template = `
  <h2>
  ${category.indicatorName}
</h2>
<div class='div-table'>
  <table>
      <thead>
        <tr>
          <th>Ano</th>
          <th>%/Ano</th>
        </tr>
      </thead>
      <tbody>
      ${console.log(window.categoryData),xuxu.map(item => {
    
    return `<tr>
        <td>${item.year}</td>
        <td>${item.value.toFixed(2)}</td>
        </tr>`;
  }).join('')
    }
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
  </div>
`
  return template
};



