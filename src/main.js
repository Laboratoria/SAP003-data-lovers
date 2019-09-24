const print = document.getElementById("root");
paises.addEventListener("change", function escolhaPais() {
  print.innerHTML = "";
  const pais = document.getElementById("paises").value;
  const paisEscolhido = WORLDBANK[pais].indicators;
  const paisFiltrado = window.data.pais(paisEscolhido);
  paisFiltrado.map(item => {
    print.innerHTML += `<p>${item.name}</p><div id="${item.name}"></div>`;
    for (let ano in item.anos) {
      if (item.anos[ano] !== "") {
        document.getElementById(item.name).innerHTML += `<p>${ano} : ${item.anos[ano].toString().slice(0,5)} %</p>`;
      }
    }
  });
});