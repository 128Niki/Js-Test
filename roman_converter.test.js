const roman_to_decimal = require("./roman-converter");
const sum = require("./roman-converter")

/*
    do:
        1. Írj egy tesztet
        2. Írj minimális kódot ahhoz, hogy a teszt teljesüljön
        3. Refaktorálás: teszt és kód karbantarthatóságának növelése
    while (tesztelt kód nincs kész)

    lehet max. 3 additív vagy 1 szubtraktív 
    I    1 
    X   10
    C  100
    M 1000
    
    csak additív lehet, maximum 1
    V    5
    L   50
    D  500

    max. 3 additív
    II
    XXX

    IV     4
    CD   400

    Feltételezzük, hogy a bemenet helyes.
    Bemenet ellenőrzésével nem foglalkozunk.

*/



;

test("roman_to_decimal('single_digit') should match Roman digit values.", () => {
    expect({
      I:roman_to_decimal("I"),
      X:roman_to_decimal("X"),
      C:roman_to_decimal("C"),
      M:roman_to_decimal("M"),
      V:roman_to_decimal("V"),
      L:roman_to_decimal("L"),
      D:roman_to_decimal("D")
    }).toEqual({
      I:1,
      X:10,
      C:100,
      M:1000,
      V:5,
      L:50,
      D:500,
    })
});


test("roman_to_decimal('II') should be 2", () => {
  expect(roman_to_decimal("II")).toBe(2);
});

test("roman_to_decimal('MMMDCCCLXXXVIII') should be 2", () => {
  expect(roman_to_decimal("MMMDCCCLXXXVIII")).toBe(3888);
});

test("roman_to_decimal('MCCLVI')should be 2",() =>{
  expect(roman_to_decimal("MCCLVI")).toBe(1256);
});

test("roman_to_decimal('IV')should be 4",() =>{
  expect(roman_to_decimal("IV")).toBe(4);
});

test("roman_to_decimal('IX')should be 9",() =>{
  expect(roman_to_decimal("IX")).toBe(9);
});

test("roman_to_decimal('MIX')should be 1009",() =>{
  expect(roman_to_decimal("MIX")).toBe(1009);
});

test("roman_to_decimal('MMMDCCCXCIV')should be 3894",() =>{
  expect(roman_to_decimal("MMMDCCCXCIV")).toBe(3894);
});