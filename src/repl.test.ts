import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "HeLlO\nwoRLd ",
    expected: ["hello", "world"],
  },
  {
    input: "Hi My Name Is Ash   Ketchum",
    expected: ["hi", "my", "name", "is", "ash", "ketchum"],
  },
  {
    input: "",
    expected: []
  },
  {
    input: " ",
    expected: []
  }

])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});