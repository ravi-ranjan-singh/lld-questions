import { LiftState } from "../enums/liftStates";
import { Lift } from "../models/lift";
import { Floor } from "../models/Floor";
import { State } from "./state";

export class OpenState implements State {
  calling(lift: Lift, currentFloor: Floor): void {
    throw new Error("Cannot call lift in open state");
  }
  opening(lift: Lift, currentFloor: Floor): void {
    lift.changeCurrentFloor(currentFloor);
    lift.changeState(LiftState.READING_FLOOR);
  }
  readingFloorNumber(): number {
    throw new Error("Cannot read floor number in open state");
  }
  moving(): void {
    throw new Error("Cannot move in open state");
  }
  getState(): LiftState {
    return LiftState.OPENING;
  }
}
