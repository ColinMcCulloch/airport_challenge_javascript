describe("Airport", function() {
  var airport = new Airport(20);



  it("Airport exists", function() {
  expect(airport).not.toBe(null);
  });

  it("Land method is defined", function() {
      expect(airport.land).toBeDefined();
  });
  it("Take off method is method", function() {
    expect(airport.takeOff).toBeDefined();
  });
  it ("Airport has a capacity", function(){
    expect(airport.capacity).toEqual(20);
  })


});
