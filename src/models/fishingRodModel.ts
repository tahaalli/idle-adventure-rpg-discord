import { FishingRod } from "../interfaces/item";

export default class FishingRodModel implements FishingRod {
  public tier: string;
  public level: number;

  public constructor() {
    this.tier = "Iron";
    this.level = 1;
  }
}
