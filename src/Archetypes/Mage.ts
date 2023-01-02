import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Mage extends Archetypes {
  private static _mageCount = 0;
  private _energyType: EnergyType;
  constructor(name: string, energyType: EnergyType = 'mana') {
    super(name);
    this._energyType = energyType;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._mageCount += 1;
    return this._mageCount;
  }
}

export default Mage;