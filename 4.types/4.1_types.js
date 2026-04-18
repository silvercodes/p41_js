
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



//#endregion