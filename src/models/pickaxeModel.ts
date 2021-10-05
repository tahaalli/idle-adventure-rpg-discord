import { Pickaxe } from "../interfaces/item";

export default class PickaxeModel implements Pickaxe {
  public tier: string;
  public level: number;

  public constructor() {
    this.tier = "Iron";
    this.level = 1;
  }
}
