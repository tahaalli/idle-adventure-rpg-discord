import { Armour, FishingRod, Item, Pickaxe, Weapon } from "./item";
import { Skill } from "./skill";

export interface User {
  id: string;
  username: string;
  level: number;
  exp: number;
  miningLevel: number;
  miningExp: number;
  fishingLevel: number;
  fishingExp: number;
  rank: number;
  hp: number;
  sp: number;
  weapon: Weapon;
  armour: Armour;
  pickaxe: Pickaxe;
  fishingRod: FishingRod;
  inventory: Map<string, Item>;
  skillSet: Map<string, Skill>;
}
