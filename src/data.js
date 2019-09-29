
data = {
  pais,
  calculo
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
  let arrNovo = [];
  paisEscolhido.map(i => {
    for (let indicador of arrayIndicators) {
      if (indicador === i.indicatorCode) {
        arrNovo.push({ code: indicador, anos: i.data, name: i.indicatorName });
      }
    }
  });
  return arrNovo;
}
function calculo(arrayPais, indicatorDesemprego, indicatorPopulacao) {
  let somaDes = 0;
  arrayPais.map(i => {
    if (i.indicatorCode === indicatorDesemprego) {
      const arrayValores = Object.values(i.data);
      for (let i of arrayValores) {
        if (i != "") {
          somaDes += i;
        }
      }
    }
  });
  let somaPop = 0;
  arrayPais.map(i => {
    if (i.indicatorCode === indicatorPopulacao) {
      const arrayValores = Object.values(i.data);
      for (let i of arrayValores) {
        if (i != "") {
          somaPop += i;
        }
      }
    }
  });
  return (somaDes/somaPop)* 100;
};
