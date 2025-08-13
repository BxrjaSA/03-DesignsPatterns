
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

interface Builder {
  reset(): void;
  setClass(className: string): void;
  setName(name: string): void;
  setLevel(level: number): void;
  setPower(power: number): void;
  setDefense(defense: number): void;
  setHealth(health: number): void;
  setExp(exp: number): void;
  addSkill(skill: string): void;
  addItem(item: string): void;
}

// --------------------------------------------
// ------------  CLASE BUILDER  ---------------
// --------------------------------------------
class CharacterBuilder implements Builder {
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


  setClass(className: string): void {
    this.character.class = className;
  }
  
  setName(name: string): void {
    this.character.name = name;
  }
  
  setLevel(level: number): void {
    this.character.level = level;
  }
  
  setPower(power: number): void {
    this.character.power = power;
  }
  
  setDefense(defense: number): void {
    this.character.defense = defense;
  }

  setHealth(health: number): void {
    this.character.health = health;
  }

  setExp(exp: number): void {
    this.character.exp = exp;
  }

  addSkill(skill: string): void {
    this.character.skills?.push(skill);
  }

  addItem(item: string): void {
    this.character.items?.push(item);
  }

  build(): Character {
    const character = { ...this.character };
    this.reset();
    return character;
  }
}


class CharacterSheetBuilder implements Builder {
  private sheet: Sheet;

  constructor() {
    this.reset();
  }

  reset() {
    this.sheet = {
      title: '',
      description: '',
      stats: {},
      skills: [],
      items: []
    }
  }

  setClass(className: string): void {
    this.sheet.title = `${className} - Hoja de Personaje`; 
  }

  setName(name: string): void {
    this.sheet.description = `Nombre: ${name}`
  }

  setLevel(level: number): void {
    this.sheet.stats[`Nivel`] = level;
  }

  setPower(power: number): void {
    this.sheet.stats[`Poder`] = power;
  }

  setDefense(defense: number): void {
    this.sheet.stats[`Defensa`] = defense;
  }

  setHealth(health: number): void {
    this.sheet.stats[`Salud`] = health;
  }

  setExp(exp: number): void {
    this.sheet.stats[`Experiencia`] = exp;
  }

  addSkill(skill: string): void {
    this.sheet.skills.push(skill);
  }

  addItem(item: string): void {
    this.sheet.items.push(item);
  }

  build(): Sheet {
    const sheet = { ...this.sheet };
    this.reset();
    return sheet;
  }

}




// --------------------------------------------
// -----------  CLASE DIRECTOR   --------------
// --------------------------------------------

class Director {
  constructorWarrior(builder: Builder): void {
    builder.setClass("Guerrero");
    builder.setName("Conan");
    builder.setLevel(1);
    builder.setPower(15);
    builder.setDefense(12);
    builder.setHealth(60);
    builder.setExp(0);
    builder.addSkill("Furia");
    builder.addItem("Espada");
  }

  constructorMage(builder: Builder): void {
    builder.setClass("Mago");
    builder.setName("Gandalf");
    builder.setLevel(1);
    builder.setPower(12);
    builder.setDefense(8);
    builder.setHealth(40);
    builder.setExp(0);
    builder.addSkill("Conjuro");
    builder.addItem("Bastón Mágico");
  }
}












// --------------------------------------------
// ---------------  CLIENTE  ------------------

// 1. Instanciamos el Director
const director = new Director();

// OBTENER UN PJ GUERRERO
// 2. Creamos un CharBuilder
const charBuilder = new CharacterBuilder();
// 3. Pasamos el Builder al Director para crear un Guerrero
director.constructorWarrior(charBuilder);
// 4. Creamos el Guerrero y lo obtenemos con el método .build() del constructor
const warrior = charBuilder.build();


// OBTENER UNA HOJA DE PJ MAGO
// 2. Creamos un sheetBuilder
const sheetBuilder = new CharacterSheetBuilder();
// 3. Pasamos el Builder al Director para crear un Mago
director.constructorMage(sheetBuilder);
// 4. Creamos la hoja del Mago y lo obtenemos con el método .build() del constructor
const mageSheet = sheetBuilder.build();



console.log('NPC Guerrero', warrior)
console.log('Hoja de PJ Mago', mageSheet)