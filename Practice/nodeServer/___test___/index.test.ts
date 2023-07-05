import { sum } from "./index";

describe("sum function test", () => {
  it("should add 1 + 2 and return 3", () => {
    const ans = sum(1, 2);
    console.log(ans);
    expect(ans).toBe(3);
  });

  // TRUTHY AND FALSEY
  it("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  // NUMBERS

  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  it("adding floating point numbers", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3); // This works.
  });

  // STRINGS //

  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  it('but there is a "stop" in Christopher', () => {
    expect("Christopher").toMatch(/stop/);
  });

  // ARRAYS //

  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  it("the shopping list has milk on it", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });

  // EXCEPTIONS //

  function compileAndroidCode() {
    throw new Error("you are using the wrong JDK");
  }

  it("compiling android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
});
