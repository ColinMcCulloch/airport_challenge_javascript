describe("Airport", function() {
  it("Airport exists", function() {
    var airport = new Airport();
  expect(airport).not.toBe(null);
  });

  it("Land method is defined", function() {
      var airport = new Airport();
      expect(airport.land).toBeDefined();
  });
});
