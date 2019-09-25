const selectPais = document.getElementById("select-country");
selectPais.addEventListener("change", () => {
  sortData(WORLDBANK[selectPais.value].indicators);
  countryDatas();
});

const getData = document.getElementById("select-dados");
const getYears = document.getElementById("select-ano");
getData.addEventListener("change", () => {
  const years = WORLDBANK[selectPais.value].indicators[0].data;
  popularAno(years);
})

const button = document.getElementById("btn-ver");
const result = document.getElementById("result");
const reduce = document.getElementById("reduce");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const countryValue1 = selectPais.value;
  const indicators1 = WORLDBANK[countryValue1].indicators;
  const dataFiltrado = filterDatas(indicators1, getData.value);// filterDatas(indicators1, getData.value, getYears.value);

  // console.log(dataFiltrado[0].data.filter())
  dataFiltrado.map(item => {    
    if (item.data[getYears.value] === "") {
      result.innerHTML = "Não tem dados!";
    } else {
      result.innerHTML = `Esse é o resultado ${parseInt(item.data[getYears.value])}%`;
    }
  });

  const years = WORLDBANK[countryValue1].indicators[0].data; 
  // const filteredYears = Object.keys(years).filter( year => years[year] !== "");  
  // const soma = Object.values(years).reduce((acc, cur) => {//olhar a constante soma
  //   if (cur !== "") {      
  //     return acc + cur;
  //   }
  //   return acc / filteredYears.length;
  // }, 0);
  // console.log(soma);
  reduce.innerHTML = `Média por anos disponíveis ${parseInt(dataAverage(years))}%`;

  // const years = WORLDBANK[countryValue1].indicators[0].data;
  // const filteredYears = Object.keys(years).filter( year => years[year] !== "");
  
  //reduce.innerHTML = `Média por anos disponíveis ${parseInt((soma / filteredYears.length))}%`
  //CORRIGIR A DIVISÃO
  //console.log(soma / filteredYears.length)
});

function countryDatas() {
  getData.innerHTML = "";
 
  
  const countryValue = selectPais.value;
  const indicators = WORLDBANK[countryValue].indicators;

  indicators.map((elem) => {
    getData.innerHTML += `<option>${elem.indicatorName}</option>`;
  });

  // const years = WORLDBANK[countryValue].indicators[0].data;

}

function popularAno(years){
  getYears.innerHTML = "";
  for (item of Object.keys(years)) {
    if (years[item] !== "") {
      console.log(years[item])
      getYears.innerHTML += `<option>${item}</option>`; 
    }
  }
}
