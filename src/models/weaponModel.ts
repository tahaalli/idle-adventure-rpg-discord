import { Weapon } from "../interfaces/item";

export default class WeaponModel implements Weapon {
  public tier: string;
  public level: number;
  public attack: number;

  public constructor() {
    this.tier = "Iron";
    this.level = 1;
    this.attack = 15;
  }
}
