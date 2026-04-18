'use strict';

// const user = {
//     id: 101,
//     email: 'vasia@mail.com'
// };


// const copy = {};
// for(let k in user)
//     copy[k] = user[k];

// console.log('🟢', user, copy);
// console.log('🟢', user === copy);





// const user = {
//     id: 101,
//     email: 'vasia@mail.com'
// };

// // const obj =  Object.assign(user, {role: 'admin'});
// // console.log('🟢', obj);
// // console.log('🟢', user);
// // console.log('🟢', obj === user);

// const obj = Object.assign({}, user);
// console.log('🟢', obj);
// console.log('🟢', user);
// console.log('🟢', obj === user);






const user = {
    id: 101,
    email: 'vasia@mail.com',
    permissions: {
        read: true,
        write: true,
        delete: false
    }
};

// // Поверхностное копирование
// const obj = Object.assign({}, user);
// obj.id = 202;
// obj.permissions.write = false;
// console.log('🟢', user);
// console.log('🟢', obj);



// Глубокое копирование
// const obj = structuredClone(user)
// obj.id = 202;
// obj.permissions.write = false;
// console.log('🟢', user);
// console.log('🟢', obj);




// Глубокое копирование
const obj = _.cloneDeep(user);
obj.id = 202;
obj.permissions.write = false;
console.log('🟢', user);
console.log('🟢', obj);

