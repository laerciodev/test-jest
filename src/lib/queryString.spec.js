const { queryString, parse } = require("./queryString");

describe("Convert object to query string", () => {
  it("should create a valid query string when a object is provided", () => {
    const obj = {
      name: "Laercio",
      profession: "developer",
    };

    expect(queryString(obj)).toBe("name=Laercio&profession=developer");
  });

  it("should create a valid query string even when an array passed as value", () => {
    const obj = {
      name: "Fabio",
      abilities: ["JS", "TDD"],
    };

    expect(queryString(obj)).toBe("name=Fabio&abilities=JS,TDD");
  });

  it("should throw an error when an object is passed as value", () => {
    const obj = {
      name: "Laercio",
      abilities: {
        first: "JS",
        second: "TDD",
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe("Convert query string to object", () => {
  it("Should convert a query string to object", () => {
    const qs = "name=Laercio&profession=developer";

    expect(parse(qs)).toEqual({
      name: "Laercio",
      profession: "developer",
    });
  });

  it("should convert a query string of a single key-value pair to object", () => {
    const qs = "name=Fabio";

    expect(parse(qs)).toEqual({
      name: "Fabio",
    });
  });

  it("should convert a query string to an object taking care of comma separated values", () => {
    const qs = "name=Fabio&abilities=JS,TDD";

    expect(parse(qs)).toEqual({
      name: "Fabio",
      abilities: ["JS", "TDD"],
    });
  });
});
