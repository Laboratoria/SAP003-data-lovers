require("../src/data.js");

describe("filterDatas", () => {
  it("is a function", () => {
    expect(typeof filterDatas).toBe("function");
  }); 
});

describe("sortData", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it("returns `sortData`", () => {
    expect(sortData(
      [
        {
          "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
        },
        {
          "indicatorName": "Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)",
        },
        {
          "indicatorName": "Tasa de participación en la fuerza laboral, total (% de la población total mayor de 15 años) (estimación nacional)",
        },
        {
          "indicatorName": "Proporcin de tasas de participacin laboral femenina y masculina (%) (estimación modelado OIT)",
        }
      ]
    )).toEqual(
      [
        {
          "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
        },
        {
          "indicatorName": "Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)",
        },
        {
          "indicatorName": "Proporcin de tasas de participacin laboral femenina y masculina (%) (estimación modelado OIT)",
        },
        {
          "indicatorName": "Tasa de participación en la fuerza laboral, total (% de la población total mayor de 15 años) (estimación nacional)",
        }
      ]
    );
  });
});

/*
it("returns `ordenaPorFavor`", () => {
  expect(ordenaPorFavor(array)).toBe(
    [
      {
        "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
      },
      {
        "indicatorName": "Fuerza laboral con educación intermedia (% del total)",
      },
      {
        "indicatorName": "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
      }
    ]
  );
});
*/

//require("../src/data.js");

// describe("example", () => {
//   it("is a function", () => {
//     expect(typeof example).toBe("function");
//   });

//   it("returns `example`", () => {
//     expect(example()).toBe("example");
//   });
// });
// 
/*
require("../src/data.js");

function divide(a, b) {
  return a / b;
}

array = [
  {
    "indicatorName": "Fuerza laboral con educación intermedia (% del total)",
  },
  {
    "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
  },
  {
    "indicatorName": "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
  }
]
expect(ordenaPorFavor(array)).toBe(
  [
    {
      "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
    },
    {
      "indicatorName": "Fuerza laboral con educación intermedia (% del total)",
    },
    {
      "indicatorName": "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
    }
  ]
)

describe("divide", () => {
  it("10 por 5", () => {
    expect(divide(10, 5)).toBe(2);
  });

  it("60 por 10", () => {
    expect(divide(60, 10)).toBe(6);
  });

  it("60 por 0", () => {
    expect(divide(60, 0)).toBe(Infinity);
  });
});

describe("filterDatas", () => {
  it("is a function", () => {
    expect(typeof filterDatas).toBe("function");
  });

//  it("returns `example`", () => {
  //  expect(example()).toBe("example");
  //});
});*/
