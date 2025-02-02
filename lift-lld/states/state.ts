import { LiftState } from "../enums/liftStates";
import { Lift } from "../models/lift";
import { Floor } from "../models/Floor";

export interface State {
  calling(lift: Lift, currentFloor: Floor): void;
  opening(lift: Lift, currentFloor: Floor): void;
  readingFloorNumber(lift: Lift, floor: Floor): void;
  moving(lift: Lift): void;
  getState(): LiftState;
}
