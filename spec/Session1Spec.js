describe("Testing jasmine setup", function() {

  it("can recognise an expect statement", function() {
    expect(1 + 1).toBe(2);
  });

  describe("arithmetic1", function() {
    it("returns 20 less than input multiplied by 5", function() {
      expect(arithmetic1(10)).toBe(30);
    });

    it("returns 32.5 when input is 10.5", function() {
      expect(arithmetic1(10.5)).toEqual(32.5);
    });

    it("returns -50 when input is -6", function() {
      expect(arithmetic1(-6)).toEqual(-50);
    });
  });

});