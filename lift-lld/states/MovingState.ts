import { LiftState } from "../enums/liftStates";
import { Lift } from "../models/lift";
import { Floor } from "../models/Floor";
import { State } from "./state";

class Moving implements State {
  calling(lift: Lift, currentFloor: Floor): void {
    throw new Error("Method not implemented.");
  }
  opening(lift: Lift, currentFloor: Floor): void {
    throw new Error("Cannot open door while moving");
  }
  readingFloorNumber(lift: Lift, floor: Floor): void {
    throw new Error("Cannot read floor number while moving");
  }
  moving(lift: Lift): void {
    lift.changeCurrentFloor(lift.getDestinationFloor());
    lift.changeState(LiftState.IDLE);
  }
  getState(): LiftState {
    return LiftState.MOVING;
  }
}
