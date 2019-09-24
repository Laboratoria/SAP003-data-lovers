window.data = {
  pais: pais,
};

const arrayIndicators = [
  "SL.TLF.TOTL.FE.ZS",
  "SL.UEM.TOTL.FE.ZS",
  "SL.EMP.TOTL.SP.FE.ZS",
  "SE.PRM.ENRL.FE.ZS",
  "SE.SEC.ENRL.FE.ZS",
  "SE.TER.CUAT.ST.FE.ZS"
];

function pais (paisEscolhido) {
  let arrNovo = [];
  paisEscolhido.map(i => {
    for (let j of arrayIndicators) {
      if (j === i.indicatorCode) {
        arrNovo.push ({code: j, anos: i.data, name: i.indicatorName});

      }
    }
  });
  return arrNovo;
}
