// let num: number;

// num = 23;
// num = -10;
// num = 10.3;
// num = 3 + 5;

// let str: string;

// str = 'string';

// // const  arrString: string[];
// const arrString = ['drt', 'null', '234']

// function foo(num: number, str: string, bool: boolean, empty: null) {
//     console.log(str="10",);

// }

// // const obj: { name: string } = { name: 'Max' }

// const  obj: { name?: string } = {};
// obj.name = 'Yan'
//-------------------------------------------------------------------------------

// const data: {
//   id: number;
//   price: number;
//   permission: string[];
//   details: {
//     title: string;
//     description: string;
//   };
// } = {
//   id: 1,
//   price: 10.99,
//   permission: ['read', 'write'],
//   details: {
//     title: 'New product',
//     description:
//       'This is awesome product!',
//   },
// };

//-----------------------------------------------------------------------------------

// let some: any;

// some = 10;
// some = 'qweqwe'
// some = [];
// some = {};

// let num: number;
// num = some;

//------------------------------------------------------
// enum Role { ADMIN, USER };

// const person = {
//     role: Role.ADMIN
// };

// if (person.role === Role.ADMIN) {
//     console.log('Role:',Role.ADMIN);

// }

//=---------------------------------------------------------

// function combine(data1: string | number, data2: string | number) {
//     return data1 + data2;
// }

// function combine(data1: string | number, data2: string | number) {
//     if (typeof data1 === 'number' && typeof data2 === 'number') {
//         return data1 + data2
//     } else {
//       return data1.toString() + data2.toString()
//     }
// }

//-----------------------------------------------------------------

// const greeting = (action: 'hello' | 'bye') => {
//     if (action === 'hello') {
//          console.log('Hello user!');

//     } else {
//          console.log('Bye user!');
//     }
// }

// greeting('qweqweqwe')

//---------------------------------------------------------------------

let age: number;
age = 40;

let snake: string;
snake = 'Max';

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback: (a: number) => number;
callback = (a) => { return 100 + a };


//-----------------------------------------------------------

let anything: any;
anything = -10;
anything = 'Max';
anything = true;
anything = {};

//------------------------------------------------------------

let some: unknown;
some = 'Text';
some = 15;

let str: string;
if (typeof some === 'string') {
  str = some;
}
console.log('Error');

//----------------------------------------------------------------------
let person: [string, number];
person = ['Max', 21];

//-------------------------------------------------------------------------

enum Loader {
  LOADING,
  READY,
}

const service = {
  loading: Loader.READY,
};

if (service.loading === Loader.LOADING) {
  console.log('LOADING',Loader.LOADING);
} 
if (service.loading === Loader.READY) {
  console.log('LOADING',Loader.READY);
} 


//-----------------------------------------------------------------------------

let union: string | number;

let data: 'enable' | 'disable'

//--------------------------------------------------------------------------
const showMessage = (message:string): void => {
    console.log(message);
};

const calc = (num1:number, num2:number):number =>{
    return num1+num2
}

function customError():never {
    throw new Error("Error");
    
}

//-----------------------------------------------------------
type BookType = {
    readonly title: string;
    likes: number;
    accounts: string[];
    status: "open"|'close';
    details?: {
        createAt: Date;
        updateAt: Date;
    } 
    
};

const page1:BookType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2:BookType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

console.log(page1,page2);
