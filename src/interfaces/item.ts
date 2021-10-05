export interface Item {
  id: string;
  name: string;
  count: number;
}

export interface Weapon {
  tier: string;
  level: number;
  attack: number;
}

export interface Armour {
  tier: string;
  level: number;
  defence: number;
}

export interface Pickaxe {
  tier: string;
  level: number;
}

export interface FishingRod {
  tier: string;
  level: number;
}
