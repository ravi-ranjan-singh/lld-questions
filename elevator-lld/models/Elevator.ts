import { ElevatorState } from "../enums/elevatorState";
import { Floor } from "./Floor";

export class Elevator {
  private floors: Floor[] = [];
  private currentFloor: Floor;
  private destinationFloor: Floor;
  private state: ElevatorState = ElevatorState.IDLE;

  constructor(maximumFloors: number) {
    this.floors = Array.from({ length: maximumFloors }, (_, i) => new Floor(i));
    this.currentFloor = this.floors[0];
    this.destinationFloor = this.floors[0];
  }

  changeCurrentFloor(currentFloor: Floor): void {
    if (FloorValidator.validateFloor(currentFloor, this.floors)) this.currentFloor = currentFloor;
  }

  changeDestinationFloor(destinationFloor: Floor): void {
    if (FloorValidator.validateFloor(destinationFloor, this.floors)) this.destinationFloor = destinationFloor;
  }

  getCurrentFloor(): Floor {
    return this.currentFloor;
  }

  getDestinationFloor(): Floor {
    return this.destinationFloor;
  }

  changeState(state: ElevatorState): void {
    this.state = state;
  }

  getState(): ElevatorState {
    return this.state;
  }
}

class FloorValidator {
  static validateFloor(currentFloor: Floor, availableFloors: Floor[]): boolean {
    if (
      currentFloor.floorNumber < availableFloors[0].floorNumber ||
      currentFloor.floorNumber > availableFloors[availableFloors.length - 1].floorNumber
    ) {
      return false;
    }
    return true;
  }
}
