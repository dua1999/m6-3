import { sum2numbers } from "./utils";

describe("sum2numbers", () => {
  it("should sum 2 numbers", () => {
    expect(sum2numbers(2, 3)).toBe(5);
  });
});
