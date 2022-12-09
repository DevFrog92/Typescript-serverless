type USER_TYPE = "TESTER" | "ADMIN"

let userType: USER_TYPE = 'TESTER';

console.log(userType);

interface Size {
  width: number;
  height: number;
}

interface Label {
  title: string;
  size: Size;
}

function labelPrint(label: Label): void {
  console.log(label);
};

let myLabel = <Label>{
  title: 'Typescript book', size: { width: 20, height: 20 },
};

labelPrint(myLabel);

class Animal {
  public name: string;
  private legs: number;

  constructor(name: string, legs: number = 4) {
    this.name = name;
    this.legs = legs;
  }

  info(): string {
    return `${this.name} has ${this.legs} legs`;
  }
}

let dog: Animal = new Animal('Happy');
console.log(dog.info());