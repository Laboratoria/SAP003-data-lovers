//códigos que tenham a ver com a exibição dos dados na tela. Interação com o DOM. Operações como criação de nós, registro de manejadores de eventos (event listeners ou event handlers) e etc.
//window.example = example;

let buttonPeru = document.getElementById("btn-peru");
let buttonMexico = document.getElementById("btn-mexico");
let buttonBrasil = document.getElementById("btn-brasil");
let buttonChile = document.getElementById("btn-chile");

buttonPeru.addEventListener("click", () => {
    let peruWrite = window.data.peru();
    document.getElementById("peru-write").innerHTML = `Esse é o nome do país: ${peruData}`
    
    
    /*
    buttonCode.addEventListener("click", () => {
        let encodeText = window.cipher.encode(+offSet.value, writtenMsg.value);
        document.getElementById("result").innerHTML = `<p>Essa é sua mensagem cifrada:</p> <p>${encodeText}</p>`
    });
    */  
});


buttonMexico.addEventListener("click", () => {

});


buttonBrasil.addEventListener("click", () => {

});


buttonChile.addEventListener("click", () => {

});