
//#region ==================== Symbol =========================

// let a = Symbol();
// console.log('🟢', a);

// let b = Symbol('description');
// let c = Symbol('description');
// console.log('🟢', b === c);



// const user = {
//     email: 'vasia@mail.com',
// };

// const id = 'id';
// user[id] = 101;
// console.log('🟢', user);

// console.log('🟢', user[id]);

// for (let key in user)
//     console.log('🟢', key);




// const user = {
//     email: 'vasia@mail.com',
// };

// const id = Symbol('id');
// user[id] = 101;
// console.log('🟢', user);

// console.log('🟢', user[id]);

// for (let key in user)
//     console.log('🟢', key);





// const id = Symbol('id');
// const container = {
//     [id]: 101
// };

// container.id = 10000;
// console.log('🟢', container);




// const id = Symbol('id');
// const role = 'role';

// const user = {
//     [id]: 101,
//     [role]: 'admin',
//     email: 'vasia@mail.com',
//     'name': 'Vasia',
//     34: 'value'
// };

// console.log('🟢', user);
// console.log('🟢', user[id]);
// for(let k in user)
//     console.log('🟢', k);






// const a = Symbol.for('a_key');
// const b = Symbol.for('a_key');
// console.log('🟢', a === b);
// const c = Symbol.for('app.user.id');

// console.log('🟢', Symbol.keyFor(a));


//#endregion






//#region ================== Object type casting =========================

// const a = {};
// const b = {};

// console.log('🟢', a + b);


// --------- STRING or NUMBER --------

// --------- хинт (hint) ===> 'string' / 'number' / 'default'

// const a = {};
// const b = {};
// b[a] = 101;
// console.log('🟢', b);
// // alert(a);

// const val = Number(a);
// console.log('🟢', val);
// console.log('🟢', +a);


// **************************************************
// 1. obj[Symbol.toPrimitive](hint)
// 2. 'string'                      => obj.toString()       ----->      obj.valueOf()
// 3. 'number' / 'default'          => obj.valueOf()        ----->      obj.toString()
// **************************************************


// const user = {
//     id: 101,
//     email: 'vasia@mail.com',

//     [Symbol.toPrimitive](hint) {
//         console.log('🟢', hint);

//         return hint === 'string' ? `id: ${this.id}, email: ${this.email}` : this.id;
//     }
// };

// console.log('🟢', String(user));
// console.log('🟢', +user);
// console.log('🟢', user + 100);



// const user = {
//     id: 101,
//     email: 'vasia@mail.com',

//     toString() {
//         return `id: ${this.id}, email: ${this.email}`;
//     },

//     valueOf() {
//         return this.id;
//     }
// };

// console.log('🟢', String(user));
// console.log('🟢', +user);
// console.log('🟢', user + 100);



// const user = {
//     //
//     //
//     toString() {
//         return '101';
//     }
// };
// console.log('🟢', String(user));
// console.log('🟢', +user);
// console.log('🟢', user + 100);

//#endregion







//#region ======================== Iterable object / pseudoarray / array ======================

// --------- Itarable object (есть метод [Symbol.iterator])


// const container = {
//     from: 0,
//     to: 10,

//     [Symbol.iterator]() {
//         return {                                // <--- Объект итератора
//             current: this.from,
//             end: this.to,
//             next() {
//                 if (this.current <= this.end)
//                     return {
//                         done: false,
//                         value: this.current++
//                     };
//                 else
//                     return {
//                         done: true
//                     }
//             }
//         };
//     }
// };

// for (let item of container)
//     console.log('🟢', item);

// let iterator = container[Symbol.iterator]();
// console.log('🟢', iterator);
// while(true) {
//     let next = iterator.next();
//     if (next.done)
//         break;
//     console.log('🟢', next.value);
// }


// for (let item of 'Vasia')
//     console.log('🟢', item);

// const str = 'vasia';
// console.log('🟢', str);
// console.dir(str);
// console.dir(String);




// --------- Pseudoarray (Целочисленные упорядоченные ключи + св-во length)

// const obj = {
//     0: 'Mercury',
//     1: 'Venus',
//     2: 'Earth',
//     3: 'Mars',
//     length: 4
// }

// for(let item of obj)                // ERROR
//     console.log('🟢', item);





// --------- Array (Оъект, созданный ф-цией конструктором Array)

// const arr1 = new Array();
// const arr2 = [];

// const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn']
// console.log('🟢', planets);
// console.log('🟢', planets[1]);
// console.log('🟢', planets.length);
// console.log('🟢', planets.at(-1));







// function f() {
//     console.log('🟢', arguments);
//     console.log('🟢', Array.from(arguments));
// }

// f(2, 3);





// const container = {
//     from: 0,
//     to: 10,

//     [Symbol.iterator]() {
//         return {                                // <--- Объект итератора
//             current: this.from,
//             end: this.to,
//             next() {
//                 if (this.current <= this.end)
//                     return {
//                         done: false,
//                         value: this.current++
//                     };
//                 else
//                     return {
//                         done: true
//                     }
//             }
//         };
//     }
// };

// console.log('🟢', Array.from(container));
// console.log('🟢', Array.from(container, v => v * 2));
// console.log('🟢', Array.from(container, v => {
//     return {id: v * 2};
// }));

//#endregion






//#region ======= **** Array под капотом =============

// PACK ---> элементы одного типа ===> непрерывная область памяти --> O(1)
//          int* arr = new int[1000]{};
//          arr[500] --> *(arr + 500 * sizeof(int))

// Dictionary Mode ---> для очень разряженных массивов ==> ХЭШ-ТАБЛИЦА --> O(1)

// Holley arrays ---> Элементы разного типа или есть дыры --> Динамический массив


//#endregion




//#region ================= Map / Set / WeakMap / WeakSet ================

const map = new Map();
console.dir(Map);
console.log('🟢', map);

map.set('101', 'vasia');
map.set(101, 'Petya');
map.set(false, 'Kolya');
console.log('🟢', map);

console.log('🟢', map.get(101));
console.log('🟢', map.size);
map.size = 10;
console.log('🟢', map);

const map = new Map();
map.set(101, 'vasia').set(102, 'petya');




//#endregion



