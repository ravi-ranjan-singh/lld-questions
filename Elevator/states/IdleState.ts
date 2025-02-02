import { ElevatorState } from "../enums/elevatorState";
import { Elevator } from "../models/Elevator";
import { Floor } from "../models/Floor";
import { State } from "./state";

export class IdleState implements State {
  calling(elevator: Elevator, currentFloor: Floor): void {
    if (elevator.getCurrentFloor().floorNumber !== currentFloor.floorNumber) elevator.changeState(ElevatorState.MOVING);
    else elevator.changeState(ElevatorState.OPENING);
  }

  opening(elevator: Elevator, currentFloor: Floor): void {
    throw new Error("Cannot open door in idle state");
  }

  readingFloorNumber(): number {
    throw new Error("Cannot read floor number in idle state");
  }
  moving(): void {
    throw new Error("Cannot move in idle state");
  }
  getState(): ElevatorState {
    return ElevatorState.IDLE;
  }
}
