import { ElevatorState } from "../enums/elevatorState";
import { Elevator } from "../models/Elevator";
import { Floor } from "../models/Floor";
import { State } from "./state";

export class ReadingFloorNumberState implements State {
  calling(elevator: Elevator, currentFloor: Floor): void {
    throw new Error("Cannot call the Elevator while reading the floor number");
  }
  opening(elevator: Elevator, currentFloor: Floor): void {
    throw new Error("elevator is reading the floor number, cannot open the door");
  }
  readingFloorNumber(elevator: Elevator, floor: Floor) {
    elevator.changeDestinationFloor(floor);
    elevator.changeState(ElevatorState.MOVING);
  }
  moving(): void {
    throw new Error("Cannot move the elevator while reading the floor number");
  }
  getState(): ElevatorState {
    return ElevatorState.READING_FLOOR;
  }
}
