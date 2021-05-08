class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string): string {
    return `${name} and TS Version is ${this.version}`
  }
}

// class Car {
//     readonly model: string,
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
  readonly numberOfWheels: number = 4
}
