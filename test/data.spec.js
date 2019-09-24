require("../src/data.js");

const arrayIndicators = [
  "SL.TLF.TOTL.FE.ZS",
  "SL.UEM.TOTL.FE.ZS",
  "SL.EMP.TOTL.SP.FE.ZS",
  "SE.PRM.ENRL.FE.ZS",
  "SE.SEC.ENRL.FE.ZS",
  "SE.TER.CUAT.ST.FE.ZS"
];

describe("teste da função filtro", () => {
  it("é uma função", () => {
    expect(typeof window.data.pais([{ chave: 1}])).toBe("object");
  });
});