const { CharacterMod } = require('./CharacterMod');

class Magician extends CharacterMod {
  constructor(name, attack, stoned = false) {
    const type = 'Magician';
    super(type, attack, stoned);
    this.name = name;
  }
}

module.exports = {
  Magician,
};
