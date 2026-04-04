'use strict';

//#region ========== Function declaration

// function render() {
//     console.log('🟢', 'test render');
// }

// console.log('🟢', render());




// let email = 'vasia@mail.com';
// function render() {
//     let email = 'petya@mail.com';
//     email = 'dima@mail.com';
//     console.log('🟢', email);
// }

// render();
// console.log('🟢', email);




// let email = 'petya@mail.com';
// function render() {
//     email = 'dima@mail.com';
//     console.log('🟢', email);
// }
// render();
// console.log('🟢', email);




// function render(message) {
//     console.log('🟢', message);
// }

// function render(message = 'no_message') {
//     console.log('🟢', message);
// }

// render('Vasia');
// render();



// function func(a) {
//     console.log('🟢', a);
// }
// function func(a, b) {
//     console.log('🟢', a, b);
// }

// func();
// func(1);
// func(2, 3);
// func(5, 6, 7);




// function getRandom() {
//     return 4;
// }

// function render(val = getRandom()) {
//     console.log('🟢', val);
// }

// console.log('🟢', getRandom());
// render();
// render(101);
// render('Message from script');





// function render(message) {
//     // if (message === undefined)
//     //     console.log('🟢', 'error');
//     // else
//     //     console.log('🟢', message);

//     message ??= 'error';
//     console.log('🟢', message);
// }

//#region 




//#region Function expression

// ФУНКЦИЯ - ЭТО ОБЪЕКТ !!!

// const user = {
//     id: 101
// };

// // render();

// const render = function() {
//     console.log('🟢', 'test render');
// }

// render();




// f();
// function f() {
//     console.log('🟢', 'f');
// }
// const render = f;
// render();





// function validate(val, success, error) {
//     if (val < 0)
//         error();
//     else
//         success();
// }

// function successHandler() {
//     console.log('🟢', 'SUCCESS');
// }

// function errorHandler() {
//     console.log('🟢', 'ERROR');
// }

// // validate(-3, successHandler, errorHandler);

// validate(
//     -5, 
//     function() {console.log('🟢', 'success');}, 
//     function(){console.log('🟢', 'error');}
// );





// let f;
// {
//     f = function() {
//         console.log('🟢', 'f');
//     };
// }
// f();

//#endregion





// #region  Arrow function

// let f = () => console.log('🟢', 'test');
// f();

// let g = (a, b) => {
//     //
//     //
//     return a + b;
// };
// g(4, 5);

// function validate(val, success, error) {
//     if (val < 0)
//         error();
//     else
//         success();
// }

// validate(
//     -4,
//     () => console.log('🟢', 'ok'),
//     () => console.log('🟢', 'error')
// );


// #endregion

// function creator(val) {
//     return function() {
//         console.log('🟢', ++val);
//     }
// }

// const a = creator(10);
// a();
// a();
// a();






