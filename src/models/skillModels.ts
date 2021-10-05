import { Skill } from "../interfaces/skill";

// Basic Attack
export class BasicSkill implements Skill {
  public id = "basic_attack";
  public name = "Basic Attack";
  public level = 1;
  public demage = 0;
  public defence = 0;
  public reflection = 0;
  public cooldown = 0;
}

//#region Tier I Skills Unlock @ 10 Level
export class GuardianAngel implements Skill {
  public id = "guardian_angel";
  public name = "Guardian Angel";
  public level = 1;
  public demage = 0;
  public defence = this.level * 5;
  public reflection = this.level / 100;
  public cooldown = 2;
}
export class BattleCry implements Skill {
  public id = "battle_cry";
  public name = "Battle Cry";
  public level = 1;
  public demage = this.level * 6;
  public defence = 0;
  public reflection = 0;
  public cooldown = 2;
}
//#endregion

//#region Tier II Skills Unlock @ 50 Level
export class BodySlam implements Skill {
  public id = "body_slam";
  public name = "Body Slam";
  public level = 1;
  public demage = this.level * 8;
  public defence = 0;
  public reflection = 0;
  public cooldown = 4;
}
export class ShildWall implements Skill {
  public id = "shild_wall";
  public name = "Shield Wall";
  public level = 1;
  public demage = 0;
  public defence = this.level * 7;
  public reflection = (1.2 * this.level) / 100;
  public cooldown = 4;
}
//#endregion
