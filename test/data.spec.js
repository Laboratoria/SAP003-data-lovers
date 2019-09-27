require("../src/data.js");

describe("filterDatas", () => {
  it("is a function", () => {
    expect(typeof filterDatas).toBe("function");
  }); 
  it("funcao filtro", () => {
    expect(filterDatas(
      [
        {
          indicatorName: "gatinho"
        },
        {
          indicatorName: "xuxu"
        },
        {
          indicatorName: "banana"
        }
      ]
      , "gatinho")).toEqual(
      [
        {
          indicatorName: "gatinho"
        }
      ]
    );
  });
});

describe("sortData", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it("returns `sortData`", () => {
    expect(sortData([{"indicatorName": "Xuxa"}, {"indicatorName": "Banana"}, {"indicatorName": "Peixinho"}, {"indicatorName": "Palomita"}])).toEqual([{"indicatorName": "Banana"}, {"indicatorName": "Palomita"}, {"indicatorName": "Peixinho"}, {"indicatorName": "Xuxa"}]);
  });
});

describe("dataAverage", () => {
  it("is a function", () => {
    expect(typeof dataAverage).toBe("function");
  });

  it("Média", () => {
    expect(dataAverage({"2002": 31.4799995422363, "2003": 29.6299991607666, "2004": 27.6299991607666})).toEqual(29.57999928792317);
  });
});
