import { Armour } from "../interfaces/item";

export default class ArmourModel implements Armour {
  public tier: string;
  public level: number;
  public defence: number;

  public constructor() {
    this.tier = "Iron";
    this.level = 1;
    this.defence = 12;
  }
}
