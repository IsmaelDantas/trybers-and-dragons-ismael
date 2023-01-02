import Race from './Race';

class Dwarf extends Race {
  private _hp: number;
  private static _dwarfCounter = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._hp = 80;
  }

  static createdRacesInstances(): number {
    this._dwarfCounter += 1;
    return this._dwarfCounter;
  }

  get maxLifePoints(): number {
    return this._hp;
  }
}

export default Dwarf;