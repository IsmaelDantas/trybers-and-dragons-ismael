import Race from './Race';

export default class Halfling extends Race {
  private _hp: number;
  private static _halflingCounter = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._hp = 60;
  }

  static createdRacesInstances(): number {
    this._halflingCounter += 1;
    return this._halflingCounter;
  }

  get maxLifePoints(): number {
    return this._hp;
  }
}