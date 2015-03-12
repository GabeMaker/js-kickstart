describe("Testing jasmine setup", function() {

  it("can recognise an expect statement", function() {
    expect(1 + 1).toBe(2);
  });

  describe("arithmetic1", function() {
    it("returns 20 less than input multiplied by 5", function() {
      expect(arithmetic1(10)).toBe(30);
    });
  });

});


// # fill out the method below
// # then test tho see if you did them correctly with
// #  $ rake 1:1

// # Given a number, return 20 less than, that number multiplied by 5
// #
// # arithmetic1(10)     # => 30
// # arithmeitc1(10.5)   # => 32.5
// # arithmeitc1(-6)     # => -50

// def arithmetic1(n)
//   # the code for this method goes in here
// end