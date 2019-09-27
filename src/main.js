const selectPais = document.getElementById("select-country");

selectPais.addEventListener("change", () => {
  sortData(WORLDBANK[selectPais.value].indicators);
  countryDatas();
});

const getYears = document.getElementById("select-ano");
const getData = document.getElementById("select-dados");

getData.addEventListener("change", () => {
  const indicators = WORLDBANK[selectPais.value].indicators;
  const dataFilter = indicators.filter(elem => elem.indicatorName === getData.value ? elem.data : null);
  inputYear(dataFilter[0].data);
});

const button = document.getElementById("btn-ver");
const result = document.getElementById("result");
const reduce = document.getElementById("reduce");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const countryValue1 = selectPais.value;
  const indicators1 = WORLDBANK[countryValue1].indicators;
  const dataFiltrado = filterDatas(indicators1, getData.value);  
  const indicatorFilter = indicators1.filter(elem => elem.indicatorName === getData.value ? elem.data : null);

  dataFiltrado.map(item => {    
    if (item.data[getYears.value] === "") {
      result.innerHTML = "Não tem dados!";
    } else {
      result.innerHTML = `Esse é o resultado ${parseInt(item.data[getYears.value])}%`;
    }
  });
  const years = indicatorFilter[0].data;
  const dadoDoAno = dataFiltrado[0].data[getYears.value];
  reduce.innerHTML = `Média por anos disponíveis ${parseInt(dataAverage(years))}%`;

  const ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: ["ano", "média"],
      datasets: [{
        label: "# of Votes",
        data: [parseInt(dadoDoAno), parseInt(dataAverage(years))],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)"
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
});

function countryDatas() {
  getData.innerHTML = "";
  
  const countryValue = selectPais.value;
  const indicators = WORLDBANK[countryValue].indicators;

  indicators.map((elem) => {
    getData.innerHTML += `<option>${elem.indicatorName}</option>`;
  });

}

function inputYear(years) {
  getYears.innerHTML = "";
  const xuxu = Object.entries(years).filter(ano => ano[1] !== "");     
  xuxu.map((elem) => {
    getYears.innerHTML += `<option>${elem[0]}</option>`;
  });
}
