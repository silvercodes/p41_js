'use strict';

// const a = {};
// const b = new Object();

// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read'
// };

// console.log('🟢', user.id);
// user.email = 'petya@mail.com';

// console.log('🟢', user);

// console.log('🟢', user['id']);
// user['email'] = 'dima@mail.com';
// user['main permission'] = 'write';
// console.log('🟢', user);





// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read'
// };

// const key = 'email';
// user[key] = 'petya@mail.com';
// console.log('🟢', user);





// const key = 'age';
// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
//     [key]: 23
// };







// function builder(id, email, key, val) {
//     return {
//         id,
//         'email': email,
//         [key]: val,
//         1: 'test value'
//     };
// }
// const obj = builder(101, 'vasia@mail.com', 'age', 31);
// console.log('🟢', obj);





// const obj = {
//     return: 123,
//     const: 'vasia',
//     let: {},
//     34: 34
// };
// console.log('🟢', );






// function f(user) {
//     // console.log('🟢', user.email === undefined);

//     console.log('🟢', 'email' in user);
// }

// f({
//     id: 101,
//     email: undefined
// });






// const obj = {
//     return: 123,
//     const: 'vasia',
//     let: {},
//     34: 34
// };

// console.log('🟢', obj);
// console.log('🟢', JSON.stringify(obj));
// obj.email = 'vasia@mail.com';
// console.log('🟢', obj);
// console.log('🟢', JSON.stringify(obj));






// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     age: 23
// };

// for (let key in user)
//     console.log('🟢', `key: ${key}, value: ${user[key]}`);





// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
//     23: 'one',
//     12: 'two',
//     34.5: 'three'
// };

// for (let key in user)
//     console.log('🟢', `${key}: ${user[key]}`);

// console.log('🟢', user);





// const codes = {
//     '+54': 'country_1',
//     '+26': 'country_2',
//     '+27': 'country_3'
// };

// console.log('🟢', codes);
// for (let key in codes)
//     console.log('🟢', `${key}: ${codes[key]}`);






// let a = {
//     id: 101,
// };

// let b = a;
// b.id = 202;
// console.log('🟢', a);

// console.log('🟢', a == b);
// console.log('🟢', a === b);






// const a = {
//     id: 101,
// };

// const b = {
//     id: 101,
// };

// console.log('🟢', a == b);
// console.log('🟢', a === b);

// console.log('🟢', a > 4);
// console.log('🟢', a == 4);

