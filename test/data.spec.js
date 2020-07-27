require("../src/Js/data.js");

const chosenIndicators = [
  "SL.TLF.TOTL.FE.ZS",
  "SL.UEM.TOTL.FE.ZS",
  "SL.EMP.TOTL.SP.FE.ZS",
  "SE.PRM.ENRL.FE.ZS",
  "SE.SEC.ENRL.FE.ZS",
  "SE.TER.CUAT.ST.FE.ZS"
];

test('function that takes database data from selected indicators', () => {
  expect(showSelectCountry()).toBe("function");
});

// describe("teste da função filtro", () => {
//   it("é uma função", () => {
//     expect(typeof window.data.pais([{ chave: 1}])).toBe("object");
//   });
// });
// describe("teste da função calculo", () => {
//   it("é um função", () => {
//     expect(typeof data.calculo).toBe("function");
//   });
//   it("é um função", () => {
//     expect(data.calculo(arr, "xuxu", "banana")).toEqual(100);
//   });
// });

// const arr = [
//   {
//     "data": {
//       "2000": "",
//       "2001": "",
//       "2002": 31.4799995422363,
//       "2003": 29.6299991607666,
//       "2004": 27.6299991607666,
//     },
//     "indicatorCode": "xuxu"
//   },
//   {
//     "data": {
//       "2000": "",
//       "2001": "",
//       "2002": 31.4799995422363,
//       "2003": 29.6299991607666,
//       "2004": 27.6299991607666,
//     },
//     "indicatorCode": "banana"
//   },
//   {
//     "data": {
//       "2000": "",
//       "2001": "",
//       "2002": 31.4799995422363,
//       "2003": 29.6299991607666,
//       "2004": 27.6299991607666,
//     },
//     "indicatorCode": "peixinho"
//   },
// ];