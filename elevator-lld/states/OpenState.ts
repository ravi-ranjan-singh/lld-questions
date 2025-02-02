import { ElevatorState } from "../enums/elevatorState";
import { Elevator } from "../models/Elevator";
import { Floor } from "../models/Floor";
import { State } from "./state";

export class OpenState implements State {
  calling(elevator: Elevator, currentFloor: Floor): void {
    throw new Error("Cannot call elevator in open state");
  }
  opening(elevator: Elevator, currentFloor: Floor): void {
    elevator.changeCurrentFloor(currentFloor);
    elevator.changeState(ElevatorState.READING_FLOOR);
  }
  readingFloorNumber(): number {
    throw new Error("Cannot read floor number in open state");
  }
  moving(): void {
    throw new Error("Cannot move in open state");
  }
  getState(): ElevatorState {
    return ElevatorState.OPENING;
  }
}
