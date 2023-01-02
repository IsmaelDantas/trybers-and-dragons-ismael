import Race from './Race';

export default class Elf extends Race {
  private _hp: number;
  private static _elfCounter = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._hp = 99;
  }

  static createdRacesInstances(): number {
    this._elfCounter += 1;
    return this._elfCounter;
  }

  get maxLifePoints(): number {
    return this._hp;
  }
}