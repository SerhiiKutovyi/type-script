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

// class Component<T> {
//   constructor(public props: T) {

//   }
// }

// interface IProps {
//   title:string;
// }

// class Page extends Component<IProps> {
//   pageInfo() {
//     console.log(this.props.title);
//   }
// }

//==================================================================

// function repeat(text: string, count: number) {
//   let result = '';
//   for (let i = 0; i < count; i += 1) {
//     result += text;
//   }
//   return result;
// }

// console.log(repeat('hexlet', 2));
// console.log(repeat('wo', 3));

//===================================================================

// function getHiddenCard(card: string, count?: number): string | number {
//   const visiblePart = '*'.repeat(4);
//   const hiddenPart = card.slice(-4);

//   if (count !== undefined) {
//    return '*'.repeat(count) + hiddenPart;
//   }
//   return visiblePart + hiddenPart;
// }

// console.log(getHiddenCard('123456789', 2));
// console.log(getHiddenCard('1234567812345678', 3));
// console.log(getHiddenCard('1234567812345678'));
// console.log(getHiddenCard('2034399002121100', 1));

// 2 test =================================================================

// function getHiddenCard(cardNumber: string, count = 4):string {
//   const visiblePart = cardNumber.slice(-4) ;
//   return visiblePart.padStart(count+4, '*');
// }

// console.log(getHiddenCard('123456789', 2));
// console.log(getHiddenCard('1234567812345678', 3));
// console.log(getHiddenCard('1234567812345678'));
// console.log(getHiddenCard('2034399002121100', 1));

//===================================================================

// const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

// const getEvenNumbers = (numbers: number[]) =>
//   numbers.filter(data => data % 2 === 0);

// console.log(getEvenNumbers(numbers));

//================================Anagrams===================================

// function filterAnagrams(text: string, anagrams: string[]) {
//   const standard = text.split('').sort().join('');
//   console.log(standard);

//   return anagrams.filter(data => data.split('').sort().join('') === standard);
// }

// console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

//==========================================================================
// const course = {
//   name: 'Java',
//   lessons: ['variables', 'functions', 'conditions'],
// };

// const isComplete = (course: { name: string; lessons: string[] }):boolean => {
//   // for (let i = 0; i < course.lessons.length; i += 1) {
//   //   if (course.lessons.length <= 3) {
//   //     return false;
//   //   }
//   // }
//   return course.lessons.length >= 4;
// };

// console.log(isComplete(course));
// ======================================================================

// import concatenation from "./concatenation";

// const button = document.querySelector('button');
// const input = document.querySelector('input');

// if (button && input) {
//   button.addEventListener('click', () => {
//     concatenation(input.value,'hello!');
//   })
// }

// function fetchUserData() {
//   return 'Tom';
// }

// const userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
// if (typeof userData === 'string') {
//   console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
// }
//======================================================================
// console.log(fetchUserData());

// type User = {
//   id: number;
//   name: string;
// };

// const getUserNames = (users: User[]): number[] => {
//   return users.map(data => data.id);
// };

// const users: User[] = [
//   { id: 1, name: 'Yan' },
//   { id: 2, name: 'Vas' },
//   { id: 3, name: 'Ya' },
// ];

// console.log(getUserNames(users));

// function logMessage(message: string): void {
//   console.log(message);
// }

// logMessage('Hello,world!');

// let myFunc: (firstArg: string, secondArg: number) => void;

// // eslint-disable-next-line prefer-const
// myFunc = (first: string, second: number) => {
//   console.log(`First: ${first}, Second: ${second}`);
// };

// myFunc('Hello', 42);

// ============================================================



// type UserWithCoords = {
//   id: number;
//   name: string;
//   coords: Coordinate;
// };

// type Coordinate = [string, number];

// const userWithCoords: UserWithCoords = {
//   id: 123,
//   name: 'Max',
//   coords:[ 20,30]
// };

// console.log(userWithCoords);
// ================================================================

// enum AnimalIds {
//   cat = 'cat',
//     dog = 'dog',
//     fish = 'fish',
// }

// type Animal = {
//   [AnimalIds.cat]: {
//     meow: () => string;
//   };
//   [AnimalIds.dog]: {
//     bark: () => string;
//   };
//   [AnimalIds.fish]: {
//     swim: () => void;
//   };
// };

// const cat: Animal[AnimalIds.cat] = {
//   meow: () => 'Hello I am cat!',
// };


// const  dog: Animal[AnimalIds.dog] = {
//   bark: () => 'Woof! I am a dog',
// };

// const  fish: Animal[AnimalIds.fish] = {
//   swim: () => undefined,
// };

// console.log(cat, dog, fish);
// ===============================================================


// const greet = (name?:string) => {
//   if (name) {
//     return `Hello ${name}`
//   } else {
//     return `No name`
//   }
// };

// console.log(greet('Alice')); // Виводить: Hello, Alice!
// console.log(greet()); // Виводить: Hello!

// type Person = {
//   name: string,
//   age?: number,
// }

// const alice: Person = { name: 'Alice', age: 27 };
// const bob: Person = { name: 'Bob' };

// console.log(alice);
//  console.log(bob);

// =============================================================