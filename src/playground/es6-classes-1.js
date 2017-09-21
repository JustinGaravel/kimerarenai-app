class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Hello! I am ' + this.name + '!';
    return `Hello! I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor (name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }

    return description;
  }
}

// Traveller extends Person
// homeLocation as 3rd arguement
// Override getGreeting if there is a homeloc, 'Hi i am ${this.name}. 
// I'm visiting from ${this.homeLoc}`
// if not home loc, just stick w parent string
class Traveller extends Person {
  constructor(name, age, homeLoc) {
    super(name, age);
    this.homeLoc = homeLoc;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homeLoc) {
      greeting += ` I'm visiting from ${this.homeLoc}.`;
    }

    return greeting;
  }
}



const me = new Traveller('Justin Garavel', 28, 'Connecticut');
console.log(me.getGreeting());


const you = new Traveller();
console.log(you.getGreeting());


