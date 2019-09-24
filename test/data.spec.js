require("../src/data.js");

const info = {worldbank: {
  PER: {
    indicators: [
      "SL.TLF.TOTL.FE.ZS",
      "SL.UEM.TOTL.FE.ZS",
      "SL.EMP.TOTL.SP.FE.ZS",
      "SE.PRM.ENRL.FE.ZS",
      "SE.SEC.ENRL.FE.ZS",
      "SE.TER.CUAT.ST.FE.ZS"
    ]
  },
  BRA: {
    indicators: [
      "SL.TLF.TOTL.FE.ZS",
      "SL.UEM.TOTL.FE.ZS",
      "SL.EMP.TOTL.SP.FE.ZS",
      "SE.PRM.ENRL.FE.ZS",
      "SE.SEC.ENRL.FE.ZS",
      "SE.TER.CUAT.ST.FE.ZS"
    ]
  },
  CHL: {
    indicators: [
      "SL.TLF.TOTL.FE.ZS",
      "SL.UEM.TOTL.FE.ZS",
      "SL.EMP.TOTL.SP.FE.ZS",
      "SE.PRM.ENRL.FE.ZS",
      "SE.SEC.ENRL.FE.ZS",
      "SE.TER.CUAT.ST.FE.ZS"
    ]
  },
  MEX: {
    indicators: [
      "SL.TLF.TOTL.FE.ZS",
      "SL.UEM.TOTL.FE.ZS",
      "SL.EMP.TOTL.SP.FE.ZS",
      "SE.PRM.ENRL.FE.ZS",
      "SE.SEC.ENRL.FE.ZS",
      "SE.TER.CUAT.ST.FE.ZS"
    ]
  }
}}

describe("função filtro", () => {
  it("é uma funcao", () => {
    expect(typeof data.pais([{ chave: 1 }])).toBe("object");
  });
  it("filtro paises", () => {
    expect(data.pais(WORLDBANK[PER].indicators)).toEqual([{PER: {
      indicators: [
        "SL.TLF.TOTL.FE.ZS",
        "SL.UEM.TOTL.FE.ZS",
        "SL.EMP.TOTL.SP.FE.ZS",
        "SE.PRM.ENRL.FE.ZS",
        "SE.SEC.ENRL.FE.ZS",
        "SE.TER.CUAT.ST.FE.ZS"
      ]]},});
  });
});