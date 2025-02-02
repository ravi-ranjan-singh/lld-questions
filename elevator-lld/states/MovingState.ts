import { ElevatorState } from "../enums/elevatorState";
import { Elevator } from "../models/Elevator";
import { Floor } from "../models/Floor";
import { State } from "./state";

class Moving implements State {
  calling(elevator: Elevator, currentFloor: Floor): void {
    throw new Error("Method not implemented.");
  }
  opening(elevator: Elevator, currentFloor: Floor): void {
    throw new Error("Cannot open door while moving");
  }
  readingFloorNumber(elevator: Elevator, floor: Floor): void {
    throw new Error("Cannot read floor number while moving");
  }
  moving(elevator: Elevator): void {
    elevator.changeCurrentFloor(elevator.getDestinationFloor());
    elevator.changeState(ElevatorState.IDLE);
  }
  getState(): ElevatorState {
    return ElevatorState.MOVING;
  }
}
