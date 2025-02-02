import { LiftState } from "../enums/liftStates";
import { Lift } from "../models/lift";
import { Floor } from "../models/Floor";
import { State } from "./state";

export class ReadingFloorNumberState implements State {
  calling(lift: Lift, currentFloor: Floor): void {
    throw new Error("Cannot call the lift while reading the floor number");
  }
  opening(lift: Lift, currentFloor: Floor): void {
    throw new Error("Lift is reading the floor number, cannot open the door");
  }
  readingFloorNumber(lift: Lift, floor: Floor) {
    lift.changeDestinationFloor(floor);
    lift.changeState(LiftState.MOVING);
  }
  moving(): void {
    throw new Error("Cannot move the lift while reading the floor number");
  }
  getState(): LiftState {
    return LiftState.READING_FLOOR;
  }
}
