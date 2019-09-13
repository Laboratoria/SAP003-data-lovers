//códigos que tenham a ver com a exibição dos dados na tela. Interação com o DOM. Operações como criação de nós, registro de manejadores de eventos (event listeners ou event handlers) e etc.

let buttonPeru = document.getElementById("btn-peru");
let buttonMexico = document.getElementById("btn-mexico");
let buttonBrasil = document.getElementById("btn-brasil");
let buttonChile = document.getElementById("btn-chile");

/*
ir no HTML e pegar o que vc quer filtrar
chamar funcao de filtro lá do data.js ---- filtro(indice, "BRA")
pega o retorno da funcao filtro lã do data e exibe*/

buttonPeru.addEventListener("click", () => {
    document.getElementById("peru-write").innerHTML = `esse é o nome do pais ${window.data.peru[0]}`
});


buttonMexico.addEventListener("click", () => {
    document.getElementById("mexico-write").innerHTML = `esse é o nome do pais ${window.data.mexico[0]}`
});


buttonBrasil.addEventListener("click", () => {
    document.getElementById("brasil-write").innerHTML = `esse é o nome do pais ${window.data.brasil[0]}`
});


buttonChile.addEventListener("click", () => {
    document.getElementById("chile-write").innerHTML = `esse é o nome do pais ${window.data.chile[0]}`
});