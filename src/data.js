data = {
  pais,
};

const arrayIndicators = [
  "SL.TLF.TOTL.FE.ZS",
  "SL.UEM.TOTL.FE.ZS",
  "SL.EMP.TOTL.SP.FE.ZS",
  "SE.PRM.ENRL.FE.ZS",
  "SE.SEC.ENRL.FE.ZS",
  "SE.TER.CUAT.ST.FE.ZS"
];

function pais(paisEscolhido) {
  const desempregadas = "SL.UEM.TOTL.FE.ZS";
  const populacao = "SP.POP.TOTL.FE.IN";
  let arrNovo = [];
  paisEscolhido.map(i => {
    for (let indicador of arrayIndicators) {
      if (indicador === i.indicatorCode) {
        arrNovo.push({ code: indicador, anos: i.data, name: i.indicatorName });
      }
      if (i.indicatorCode === desempregadas && i.indicatorCode === populacao){
          i.data
        calculo();
      }
    }
  });
  return arrNovo;
}

/*Função cálculo*/

function calculo(desempregadas, populacao) {
    (((desempregadas)/populacao)*100);
  return calculo;
}
console.log("desmp " + desempregadas);
console.log(populacao);


