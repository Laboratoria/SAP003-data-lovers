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
  console.log(paisEscolhido);
  let arrNovo = [];
  paisEscolhido.map(i => {
    for (let j of arrayIndicators) {
      if (j === i.indicatorCode) {
        arrNovo.push({ code: j, anos: i.data, name: i.indicatorName });

      }
    }
  });
  return arrNovo;
}

console.log(typeof pais([1, 2, 3]));