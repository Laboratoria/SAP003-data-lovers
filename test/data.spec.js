require("../src/data.js");

describe("pais", () => {
  it("is a function", () => {
    expect(typeof window.data.pais).toBe("function");
  });

  it("returns `pais`", () => {
    expect(example()).toBe("example");
  });
});
