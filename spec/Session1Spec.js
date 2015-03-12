describe("Testing jasmine setup", function() {

  it("can recognise an expect statement", function() {
    expect(1 + 1).toBe(2);
  });


  describe("1-1 arithmetic1", function() {
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


  describe("1-2 arithmetic2", function() {
    it("returns half the smallest given parameter/argument", function() {
      expect(arithmetic2(1,2)).toBe(0.5);
    });

    it("returns 5.0 when the parameters are 19 and 10", function() {
      expect(arithmetic2(19,10)).toBe(5.0);
    });

    it("returns -3.5 when the parameters are -6 and -7", function() {
      expect(arithmetic2(-6, -7)).toBe(-3.5);
    });
  });
});

  describe("1-3 ten_twenty", function() {
    it("returns 20 if number given is odd", function() {
      expect(ten_twenty(5)).toEqual(20);
    });

    it("returns 10 if number given is even", function() {
      expect(ten_twenty(6)).toEqual(10);
    });

  });



// # remember, you can test this file with
// #   $ rake 1:3


// # Given a number, n, return 10 if it is even, and 20 if it is odd
// #
// # ten_twenty(5) # => 20
// # ten_twenty(6) # => 10

// def ten_twenty(n)
//   # your code goes here
// end
