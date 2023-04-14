import CodersArray from "./CodersArray";

describe("Given a class CodersArray that simulates the array method lengths", () => {
  describe("When it receieves 3", () => {
    test("Then it returns 1", () => {
      const receivedNumber = 3;
      const expectedresult = 1;

      const result = new CodersArray().push(receivedNumber);

      expect(result).toBe(expectedresult);
    });
  });
});
