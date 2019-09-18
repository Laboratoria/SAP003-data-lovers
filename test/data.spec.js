require("../src/data.js");

const assert = require("assert");

describe("toInternal", () => {

  test("is a function", () => {
    expect(typeof app.toInternal).toBe("function");
  });

  test("should return ...", () => {
    expect(app.toInternal({
      "name": "Rick Sanchez",
      "status": "Alive",
      "type": "",
      "gender": "Male",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    }).toEqual({image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", name: "Rick Sanchez", status: "Alive", origin: "Earth (C-137)", location: "Earth (Replacement Dimension)"}));
  });

});

describe("getData", () => {
  test("is a function", () => {
    expect(typeof app.getData).toBe("function");
  });
});