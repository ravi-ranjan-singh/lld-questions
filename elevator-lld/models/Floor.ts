export class Floor {
  private floor: number;

  constructor(floor: number) {
    this.floor = floor;
  }

  get floorNumber(): number {
    return this.floor;
  }
}
