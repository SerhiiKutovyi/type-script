// // class Key {
// //   private signature: number;

// //   constructor() {
// //     this.signature = Math.random();
// //   }

// //   getSignature(): number {
// //     return this.signature;
// //   }
// // }

// // class Person {
// //   constructor(private key: Key) {}
// //   getKey(): Key {
// //     return this.key;
// //   }
// // }

// // abstract class House {
// //   protected door = false;
// //   private tenants: Person[] = [];
// //   constructor(protected key: Key) {}

// //   comeIn(person: Person): void {
// //     if (!this.door) {
// //       throw new Error('Door is close');
// //     }

// //     this.tenants.push(person);
// //     console.log('Person inside');
// //   }

// //   abstract openDoor(key: Key): boolean;
// // }

// // class MyHouse extends House {
// //   openDoor(key: Key) {
// //     if (key.getSignature() !== this.key.getSignature()) {
// //       throw new Error('Key to another door');
// //     }

// //     return (this.door = true);
// //   }
// // }

// // const key = new Key();

// // const house = new MyHouse(key);
// // const person = new Person(key);

// // house.openDoor(person.getKey());

// // house.comeIn(person);

// // type Admin = {
// //   name: string;
// //   privileges: string[];
// // };

// // type Employee = {
// //   name: string;
// //   startDate: Date;
// //   eig: number;
// // }

// // type AdminEmployee = extends: Admin,Employee

// // const e1: AdminEmployee = {
// //   name: 'Max',
// //   privileges: ['Supermen'],
// //   startDate: new Date(),
// //   eig: 23

// // };

// // console.log(e1);

// // interface Admin {
// //   name: string;
// //   privileges: string[];
// // }

// // interface Employee {
// //   name: string;
// //   startDate: Date;
// // }

// // type ElevatedEmployee = Admin & Employee;

// // type Admin = {
// //   name: string;
// //   privileges: string[];
// // };

// // const admin: Admin = {
// //   name: 'Max',
// //   privileges:['Supermen','X-men'],
// // };

// // type Employee = {
// //   name: string;
// //   startDate: Date;
// // };

// // const empl: Employee = {
// //   name: 'Yan',
// //   startDate: new Date(),
// // };

// // type UnknownObject = Employee | Admin;

// // function showFields(e1: UnknownObject) {
// //   console.log(e1.name);
// //   if ('privileges' in e1) {
// //     console.log(e1.privileges);
// //   }
// //   if ('startDate' in e1) {
// //     console.log(e1.startDate);
// //   }
// // }

// // showFields(admin);
// // showFields(empl);

// class Car {
//     drive() {
//         console.log('Driving...');

//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...');
//     }
//     loadCargo(amount: number) {
//         console.log('Loading cargo ... ' + amount);

//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// const useVehicle = (vehicle: Vehicle) => {
//     vehicle.drive();
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000)
//     }
// };
// useVehicle(v1);
// useVehicle(v2);

// function getPromise(): Promise<Array<string | number>> {
//   return new Promise(resolve => {
//     resolve(['Generic', 50]);
//   });
// }

// getPromise().then(data => {
//   console.log(data);
// });

// type AllType = {
//   name: string;
//   siname: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare(
//   top: Pick<AllType, 'name' | 'siname'|'color'>,
//   bottom: Pick<AllType, 'position' | 'weight'>
// ): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     siname: top.siname,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// const topObject = { name: 'Предмет A',color:'red', siname: 'qweqwe' };
// const bottomObject = { position: 1, weight: 10 };

// console.log(compare(topObject, bottomObject));

//----------------------------------------------------------------------------

// const objA = { name: 'qwewe' };
// const objB = { age: 23 };

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// console.log(merge(objA, objB));

//----------------------------------------------------------------------

class Component<T> {
  constructor(public props: T) {
    
  }
}

interface IProps {
  title:string;
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

