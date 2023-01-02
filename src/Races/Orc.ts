import Race from './Race';

export default class Orc extends Race {
  private _hp: number;
  private static _orcCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._hp = 74;
  }

  static createdRacesInstances(): number {
    this._orcCount += 1;
    return this._orcCount;
  }

  get maxLifePoints(): number {
    return this._hp;
  }
}