'use strict';

//#region Simple call

// function renderInfo() {
//     console.log('🟢', 'renderInfo');
// }

// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// };

// user.age = 23;
// user.render = renderInfo;

// console.log('🟢', user);
// user.render();

// user.info = function() {
//     console.log('🟢', 'INFO');
// };

// user.info();





// const user = {
//     id: 101,
//     email: 'vasia@mail.com',

//     func: () => console.log('🟢', 'Arrow function' ),

//     render: function() {
//         console.log('🟢', 'render');
//     },

//     info() {
//         console.log('🟢', 'info');
//     }
// };

// user.func();
// user.render();
// user.info();






// const admin = {
//     id: 101,
//     email: 'vasia@mail.com',

//     render: function() {
//         // console.log('🟢', email);                // ERROR

//         console.log('🟢', this.email);

//         // console.log('🟢', user.email);

//         // console.log('🟢', user === this);
//     }
// };

// admin.render();

// // const client = user;
// // client.render();







// function renderInfo() {
//     console.log('🟢', this.email);
// }

// // renderInfo();

// const a = {
//     email: 'vasia@mail.com',
// };

// const b = {
//     email: 'petya@mail.com'
// }

// a.render = renderInfo;
// b.render = renderInfo;

// a.render();
// b.render();





// const user = {
//     id: 101,
//     render() {
//         // this === user

//         const handler1 = () => console.log('🟢', this.id);
//         handler1();

//         const handler2 = function() {
//             console.log('🟢', this.id);
//         };
//         handler2();
//     }
// };

// user.render();





// function builder() {
//     return {
//         id: 101,
//         reference: this,
//     }
// }

// // const obj = builder();
// // console.log('🟢', obj);

// const user = {};
// user.method = builder;
// console.log('🟢', user);

// const obj = user.method();
// console.log('🟢', obj);






// const counter = {
//     count: 0,
//     add() {
//         // this === counter

//         this.count++;

//         return this;
//     },
//     render() {
//         console.log('🟢', `count = ${this.count}`);
//     }
// };

// // counter.add().add().add();
// // counter.render();
// // console.log('🟢', counter);


// const f = counter.render;
// f();


//#endregion


//#region new

// function builder(id, email) {
//     const obj = {};

//     obj.id = id;
//     obj.email = email;

//     return obj;
// }

// const obj = builder(101, 'vasia@mail.com');
// console.log('🟢', obj);






// function User(id, email) {
//     // this = {}                // неявно

//     this.id = id;
//     this.email = email;

//     // return this;             // неявно
// }

// // const result = User(202, 'vasia@mail.com');
// // console.log('🟢', result);                       // ERROR

// const user = new User(101, 'petya@mail.com');
// console.log('🟢', user);






// function createUser(id, email) {
//     this.id = id;
//     this.email = email;
// }

// // const a = new createUser(202, 'a@m.c');
// // console.log('🟢', a);

// const obj = {};
// obj.buider = createUser;
// obj.buider(303, 'x@m.c');
// console.log('🟢', obj);






// function f() {
//     console.log('🟢', new.target);
// }

// f();
// new f();




// function User(email) {
//     if (! new.target)
//         return new User(email);

//     this.email = email;
// }

// console.log('🟢', new User('vasia@mail.com'));
// console.log('🟢', User('petya@mail.com'));






// function User(email) {
//     this.email = email;

//     // return this;                // неявно
//     // return {test: true};        // -----> {test: true}
//     // return 34;                  // -----> this
//     // return;                     // -----> this
// }

// console.log('🟢', new User('vasia@mail.com'));





// function User(email) {
//     this.id = 101;
//     this.email = email;

//     this.render = function() {
//         console.log('🟢', `id: ${this.id}, email: ${this.email}`);
//     }
// }

// const obj = new User('vasia@mail.com');
// console.log('🟢', obj);
// obj.render();

// const f = obj.render;

// new f();

// const temp = {
//     id: 202,
//     email: 'petya@mail.com',
//     show: f
// }
// temp.show();







// const obj = {};

// function A() {
//     return obj;
// }

// function B() {
//     return obj;
// }

// const a = new A();
// const b = new B();
// console.log('🟢', a === b);






// const counter = {
//     count: 0,
//     add() {
//         this.count++;

//         return this;
//     },
//     render() {
//         console.log('🟢', `count = ${this.count}`);
//     }
// };


// function Counter(initValue) {
//     this.count = initValue;
//     this.add = function() {
//         this.count++;
//         return this;
//     };
//     this.render = function() {
//         console.log('🟢', `count = ${this.count}`);
//     }
// }

// const counter1 = new Counter(0);
// console.log('🟢', counter1);
// counter1.add().add().add();
// counter1.render();


// const counter2 = new Counter(100);
// console.log('🟢', counter2);
// counter2.add().add().add();
// counter2.render();





// const user = {};

// const email = user.email ?? 'no_email';
// console.log('🟢', email);

// user.email ??= 'no_email';
// console.log('🟢', user);

// console.log('🟢', user?.email);
// console.log('🟢', user?.role);
// console.log('🟢', user?.role?.title);



// const user = {
//     email: 'vasia@mail.com',
//     render() {
//         console.log('🟢', 'render');
//     }
// };

// user.render?.();
// user.show?.();

// const key = 'email';
// console.log('🟢', user?.[key]);


//#endregion
