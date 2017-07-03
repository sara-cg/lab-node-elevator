/*jshint esversion:6*/

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = "up";
  }

  start() {
    setInterval(() => {
      update();
    }, 1000);
  }

  stop() {
    clearInterval();
  }
  update() {
    this.log();
  }
  _passengersEnter() {
    if (waitingList.length !== 0) {
      this.passengers.push(this.waitingList);
      this.requests.push(this.passengers.Person.destinationFloor);
      console.log("$(Person.name) has enter the elevator");
    }
  }
  _passengersLeave() {
    if (this.passengers.Person.destinationFloor == this.floor) {
      this.passengers.pop(Person.name);
      console.log("$(Person.name) has left the elevator");
    }
  }
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
      this.direction = "up";
    }
  }
  floorDown() {
    if (this.floor >= 0) {
      this.floor -= 1;
      this.direction = "down";
    }
  }
  call() {
    this.waitingList.push(Person.name);
    this.requests.push(Person);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
