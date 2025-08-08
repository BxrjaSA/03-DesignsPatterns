
// --------------------------------------------
// --------------  INTERFAZ  ------------------
// --------------------------------------------
interface Character {
  class: string;
  name: string;
  level: number;
  power: number;
  defense: number;
  health: number;
  exp?: number;
  skills?: string[];
  items?: string[];
}

interface Sheet {
  title: string;
  description: string;
  stats: Record<string, number>;
  skills: string[];
  items: string[];
}

interface InterfaceCharacterBuilder {
  class: string;
  name: string;
  level: number;
  power: number;
  defense: number;
  health: number;
  exp?: number;
  skills?: string[];
  items?: string[];
}

// --------------------------------------------
// ------------  CLASE BUILDER  ---------------
// --------------------------------------------
class CharacterBuilder{
  private character: Character;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.character = {
      class: '',
      name: '',
      level: 0,
      power: 10,
      defense: 10,
      health: 50,
      exp: 0,
      skills: [],
      items: []
    }    
  }


  setClass(characterClass: string): CharacterBuilder {
    this.character.class = characterClass;
    return this;
  }
  
  setName(characterName: string): CharacterBuilder {
    this.character.name = characterName;
    return this;
  }
  
  setLevel(characterLevel: number): CharacterBuilder {
    this.character.level = characterLevel;
    return this;
  }
  
  setPower(characterPower: number): CharacterBuilder {
    this.character.power = characterPower;
    return this;
  }
  
  setDefense(characterDefense: number): CharacterBuilder {
    this.character.defense = characterDefense;
    return this;
  }

  setHealth(characterHealth: number): CharacterBuilder {
    this.character.health = characterHealth;
    return this;
  }

  setExp(characterExp: number): CharacterBuilder {
    this.character.exp = characterExp;
    return this;
  }

  addSkill(characterSkill: string): CharacterBuilder {
    this.character.skills?.push(characterSkill);
    return this;
  }

  addItem(characterItem: string): CharacterBuilder {
    this.character.items?.push(characterItem);
    return this;
  }
}





// --------------------------------------------
// -----------  CLASE DIRECTOR   --------------
// --------------------------------------------





// --------------------------------------------
// ----------  CONCRETE BUILDER   -------------
class NpcCharacterBuilder {

}




// ----------  CONCRETE BUILDER   -------------
class EnemyCharacterBuilder {

}






// --------------------------------------------
// ------------  INICIALIZADOR  ---------------
// --------------------------------------------
// Main



