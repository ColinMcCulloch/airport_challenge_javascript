describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport(20);
    plane = new Plane();
  });

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
  });
  it("Airport land to land a plane", function(){
    airport.land(plane);
    expect(airport.planes).toEqual([plane]);
  });
  it("Does not land a plane when it's at capacity", function(){
    airport.capacity = 0;
    airport.land(plane);
    expect(airport.planes).not.toContain(plane);
  });

});
