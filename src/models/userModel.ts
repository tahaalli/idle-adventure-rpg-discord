import { User } from "../interfaces/user";
import ArmourModel from "./armourModel";
import FishingRodModel from "./fishingRodModel";
import PickaxeModel from "./pickaxeModel";
import { BasicSkill } from "./skillModels";
import WeaponModel from "./weaponModel";

export default class UserModel implements User {
  public id;
  public username;
  public level;
  public exp;
  public miningLevel;
  public miningExp;
  public fishingLevel;
  public fishingExp;
  public rank;
  public hp;
  public sp;
  public weapon;
  public armour;
  public pickaxe;
  public fishingRod;
  public inventory;
  public skillSet;

  public constructor(id: string, username: string) {
    this.id = id;
    this.username = username;
    this.level = 1;
    this.exp = 0;
    this.miningLevel = 1;
    this.miningExp = 0;
    this.fishingLevel = 1;
    this.fishingExp = 0;
    this.rank = 1500;
    this.hp = 100;
    this.sp = 50;
    this.weapon = new WeaponModel();
    this.armour = new ArmourModel();
    this.pickaxe = new PickaxeModel();
    this.fishingRod = new FishingRodModel();
    this.inventory = new Map();
    this.skillSet = new Map().set("basic_attack", new BasicSkill());
  }
}
