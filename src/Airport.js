function Airport(capacity) {
this.capacity = capacity;
this.planes = [];
}
Airport.prototype.land = function(plane) {
  if(this.planes.length < this.capacity) {
    this.planes.push(plane);
  }

}
Airport.prototype.takeOff = function(plane) {

}
