import Fighter from '../Fighter';

import Battle from './Battle';

class PVP extends Battle {
  private _player2: Fighter;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }
  
  fight(): number {
    while (this.player.lifePoints !== -1) {
      this.player.attack(this._player2);
      this.player.receiveDamage(this._player2.strength);
      if (this._player2.lifePoints === -1) {
        break;
      } 
    }
    return super.fight();
  }
}

export default PVP;