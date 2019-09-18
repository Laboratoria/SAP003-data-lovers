//colocar as funções
//window.data.filterTodos

//btnPer.addEventListener("change", () => {
//    let peixinho = window.data.filterTodos;
//    document.getElementById("result").innerHTML = `Esse é o resultado ${peixinho}`;
//    console.log(peixinho)
//});
//btnPer.addEventListener("click", () => {
//    let banana = window.data.filterInfosPeru;
//    document.getElementById("result").innerHTML = `Esse é o resultado ${banana}`
//
//}
//);








//códigos que tenham a ver com a exibição dos dados na tela. Interação com o DOM. Operações como criação de nós, registro de manejadores de eventos (event listeners ou event handlers) e etc.

/*
ir no HTML e pegar o que vc quer filtrar
chamar funcao de filtro lá do data.js ---- filtro(indice, "BRA")
pega o retorno da funcao filtro lã do data e exibe*/
/*
const btnBuscaPer = document.getElementById("btn-submit")

btnBuscaPer.addEventListener("click", filterInfosPeru);

function filterInfosPeru(e){
    e.preventDefault();
    const indiceSelecionado = document.getElementById("select-peru").value
    const anoSelecionado = document.getElementById("year-peru").value
    const objIndice = dado.PER.indicators.filter(indicador => indicador.indicatorName === indiceSelecionado)
    objIndice.map(item => console.log(item.data[anoSelecionado]))
}
*/
