import Race from './Race';

class Dwarf extends Race {
  private _lifePoints: number;
  private static _countInstance = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 80;
  }

  static createdRacesInstances(): number {
    this._countInstance += 1;
    return this._countInstance;
  }
  
  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Dwarf;