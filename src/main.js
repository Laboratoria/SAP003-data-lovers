const getYears = document.getElementById("select-ano");

const selectPais = document.getElementById("select-country");
selectPais.addEventListener("change", () => {
  sortData(WORLDBANK[selectPais.value].indicators);
  countryDatas();
});

const getData = document.getElementById("select-dados");
getData.addEventListener("change", () => {
  const indicators = WORLDBANK[selectPais.value].indicators;
  const dataFilter = indicators.filter(elem => elem.indicatorName === getData.value ? elem.data : null);
  inputYear(dataFilter[0].data);
});

const button = document.getElementById("btn-see");
const yearResult = document.getElementById("year-result");
const averageResult = document.getElementById("average-result");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const countryValue1 = selectPais.value;
  const indicators1 = WORLDBANK[countryValue1].indicators;

  const dataFiltrado = filterDatas(indicators1, getData.value);
  const indicatorFilter = indicators1.filter(elem => elem.indicatorName === getData.value ? elem.data : null);

  dataFiltrado.map(item => item.data[getYears.value] === "" ? yearResult.innerHTML = "Não tem dados!" : yearResult.innerHTML = `<h4>Média anual ${parseInt(item.data[getYears.value])}%</h4>`);

  const years = indicatorFilter[0].data;
  const dataOfYear = dataFiltrado[0].data[getYears.value];
  averageResult.innerHTML = `<h4>Média por anos apurados ${parseInt(dataAverage(years))}%</h4>`;

  const ctx = document.getElementById("myChart").getContext("2d");

  new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: ["Média anual", "Média por anos apurados"],
      datasets: [{
        label: "# of Votes",
        data: [parseInt(dataOfYear), parseInt(dataAverage(years))],
        backgroundColor: [
          "rgba(100, 154, 46, 0.2)",

          "rgba(8, 8, 138, 0.2)"

        ],
        borderColor: [
          "rgba(100, 154, 46, 1)",
          "rgba(8, 8, 138, 1)"

        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  window.scroll({
    top: 900,
    behavior: 'smooth'
  });
});

function countryDatas() {
  getData.innerHTML = '<option value="" disabled="" selected=""> Selecione um dado indicador</option>';
  const countryValue = selectPais.value;
  const indicators = WORLDBANK[countryValue].indicators;

  indicators.map((elem) => {
    getData.innerHTML += `<option>${elem.indicatorName}</option>`;
  });
}

function inputYear(years) {
  getYears.innerHTML = '<option value="" disabled="" selected=""> Selecione o ano apurado</option>';
  const filterYear = Object.entries(years).filter(ano => ano[1] !== "");

  filterYear.map((elem) => {
    getYears.innerHTML += `<option>${elem[0]}</option>`;
  });
}
