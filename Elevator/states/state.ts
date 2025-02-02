import { ElevatorState } from "../enums/elevatorState";
import { Elevator } from "../models/Elevator";
import { Floor } from "../models/Floor";

export interface State {
  calling(elevator: Elevator, currentFloor: Floor): void;
  opening(elevator: Elevator, currentFloor: Floor): void;
  readingFloorNumber(elevator: Elevator, floor: Floor): void;
  moving(elevator: Elevator): void;
  getState(): ElevatorState;
}
