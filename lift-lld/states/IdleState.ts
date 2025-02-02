import { LiftState } from "../enums/liftStates";
import { Lift } from "../models/lift";
import { Floor } from "../models/Floor";
import { State } from "./state";

export class IdleState implements State {
  calling(lift: Lift, currentFloor: Floor): void {
    if (lift.getCurrentFloor().floorNumber !== currentFloor.floorNumber) lift.changeState(LiftState.MOVING);
    else lift.changeState(LiftState.OPENING);
  }

  opening(lift: Lift, currentFloor: Floor): void {
    throw new Error("Cannot open door in idle state");
  }

  readingFloorNumber(): number {
    throw new Error("Cannot read floor number in idle state");
  }
  moving(): void {
    throw new Error("Cannot move in idle state");
  }
  getState(): LiftState {
    return LiftState.IDLE;
  }
}
