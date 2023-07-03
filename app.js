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
var age;
age = 40;
var snake;
snake = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
//-----------------------------------------------------------
var anything;
anything = -10;
anything = 'Max';
anything = true;
anything = {};
//------------------------------------------------------------
var some;
some = 'Text';
some = 15;
var str;
if (typeof some === 'string') {
    str = some;
}
console.log('Error');
//----------------------------------------------------------------------
var person;
person = ['Max', 21];
//-------------------------------------------------------------------------
var Loader;
(function (Loader) {
    Loader[Loader["LOADING"] = 0] = "LOADING";
    Loader[Loader["READY"] = 1] = "READY";
})(Loader || (Loader = {}));
var service = {
    loading: Loader.LOADING,
    ready: Loader.READY,
};
if (service.loading === Loader.LOADING) {
    console.log('LOADING', Loader.LOADING);
}
else {
    console.log('READY');
}
//-----------------------------------------------------------------------------
var union;
var data;
//--------------------------------------------------------------------------
var showMessage = function (message) {
    console.log(message);
};
var calc = function (num1, num2) {
    return num1 + num2;
};
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
console.log(page1, page2);
