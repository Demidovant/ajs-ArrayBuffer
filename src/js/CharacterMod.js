import Character from './Character';

export default class CharacterMod extends Character {
  constructor(name, type, attack, stoned = false) {
    super(name, type);
    this.attack = attack;
    this.stoned = stoned;
    this.distance = 1;
  }

  get stoned() {
    return this.xstoned;
  }

  set stoned(value) {
    this.xstoned = value;
  }

  set attack(value) {
    this.xattack = value;
  }

  get attack() {
    this.xattack -= this.xattack * ((this.distance - 1) / 10);
    if (this.stoned) {
      this.xattack -= Math.log(this.distance) * 5;
    }
    return (this.xattack > 0) ? Math.floor(this.xattack) : 0;
  }
}
