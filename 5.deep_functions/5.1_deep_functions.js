'use strict'

//#region Intro

// let a = 45;
// function f() {
//     console.log('🟢', a);
// }
// f();




// function f1() {
//     f2();
//     function f2() {
//     }
//     const f3 = function() {}
//     f3()
// }

// f1();





// function creator() {
//     let count = 0;

//     const func = function() {
//         console.dir(creator);
//         return count++;
//     };

//     return func;
// }

// const a = creator();
// const b = creator();

// console.log('🟢', a());
// console.log('🟢', a());
// console.log('🟢', a());

// console.log('🟢', b());
// console.log('🟢', b());
// console.log('🟢', b());


//#endregion



//#region EXAMPLE 1


// let a;
// a = 10;

// let b = 12;

// const f1 = function() {
//     let a;
//     a = 100;
//     let b = 120;

//     const f1 = function() {
//         console.log('🟢', a);
//     };

//     const f2 = () => console.log('🟢', b);

//     f1();

//     function f0() {
//         let c = 100;
//         console.log('🟢', 'c', c);
//         console.log('🟢', 'b', b);
//         // console.log('🟢', 'x', x);
//     }

//     f0();
// };

// const f2 = () => console.log('🟢', b);

// f1();

// function f0() {
//     let c = 100;
//     console.log('🟢', 'c', c);
//     console.log('🟢', 'b', b);
//     console.log('🟢', 'x', x);
// }

// f0();


//#endregion


//#region EXAMPLE 2


// function execute() {
//     let a = 23;

//     function creator() {
//         let count = 0;

//         const temp = function() {
//             return ++count;
//         };

//         return temp;
//     }

//     const res = creator();
//     console.log('🟢', res());
//     console.log('🟢', res());
//     console.log('🟢', res());
// }

// execute();


//#endregion


//#region EXAMPLE_3

// function creator(init) {
//     let count = init;

//     return function() {
//         return ++count;
//     }
// }

// const a = creator(10);
// const b = creator(200);

// console.log('🟢', a());
// console.log('🟢', a());

// console.log('🟢', b());
// console.log('🟢', b());


//#endregion



//#region TASK_1

// let email = 'vasia@mail.com';

// function render() {
//     console.log('🟢', `email: ${email}`);
// }

// email = 'petya@mail.com';

// render();

// email = 'dima@mail.com';

// render();

//#endregion





//#region TASK_2

// function createLogger() {
//     let path = 'app.log';

//     return function() {
//         console.log('🟢', `log path: ${path}`);
//     }
// }

// let path = '2.log';

// let logger = createLogger();

// logger();

// //#endregion




//#region TASK_3

// function Counter() {
//     // this = {};                   // неявно

//     let count = 0;

//     this.count = 10;

//     this.up = function() {
//         this.count = 15;
//         return ++count;
//     };

//     this.down = function() {
//         return --count;
//     }

//     // return this;                 // неявно
// }

// let counter = new Counter();

// console.log('🟢', counter.up());
// console.log('🟢', counter.up());
// console.log('🟢', counter.down());

// console.log('🟢', counter);

//#endregion




//#region TASK_4

// let name = 'Vasia';

// {
//     let role = 'admin';

//     function render() {
//         console.log('🟢', `name: ${name}, role: ${role}`);
//     }

//     render();
// }

// render();                   // ERROR


//#endregion




//#region TASK_5

// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// const sum = a => b => a + b;

// let calc1 = sum(10);
// console.log('🟢', calc1(5));
// console.log('🟢', calc1(12));

// let calc2 = sum(100);
// console.log('🟢', calc2(5));
// console.log('🟢', calc2(12));


// const creator = a => (b, c) => d => a * (b + c) / d;
// const func = creator(2)(4, 6);
// console.log('🟢', func(4));
// console.log('🟢', func(10));

//#endregion



//#region TASK_6

// const arr = [3, 5, 4, 8, 2, 9];

// // const filteredArray = arr.filter(v => v % 2 === 0);
// // console.log('🟢', filteredArray);

// // console.log('🟢', arr.filter(v => v >= 3 && v <= 7));



// // function between(from, to) {
// //     return function(v) {
// //         return v >= from && v <= to;
// //     }
// // }

// const between = (from, to) => v => v >= from && v <= to;

// console.log('🟢', arr.filter(between(3, 7)));
// console.log('🟢', arr.filter(between(0, 4)));

//#endregion



//#region TASK_7

const users = [
    { id: 101, name: 'vasia', age: 23 },
    { id: 107, name: 'petya', age: 31 },
    { id: 102, name: 'dima', age: 21 },
    { id: 105, name: 'kolya', age: 20 },
];

// console.log('🟢', users.sort((a, b) => a.age - b.age));
// console.log('🟢', users);


// function by(field) {
//     return function(a, b) {
//         return a[field] > b[field] ? 1 : -1;
//     }
// }

// const by = field => (a, b) => a[field] > b[field] ? 1 : -1;


// function by(field, dir = 'asc') {
//     return function(a, b) {
//         if (a[field] === b[field])
//             return 0;

//         if (dir === 'asc')
//             return a[field] > b[field] ? 1 : -1;
//         else
//             return a[field] > b[field] ? -1 : 1;
//     }
// }


// // users.sort(by('id', 'desc'));
// users.sort(by('name', 'desc'));
// console.log('🟢', users);

//#endregion





//#region Lexical Environment (Global), Execution Cntext (Global)

var a = 10;
let b = 20;

console.log('🟢', a + b);




//#endregion

