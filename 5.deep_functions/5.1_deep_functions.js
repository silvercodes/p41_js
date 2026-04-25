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




function creator() {
    let count = 0;

    return function() {
        return count++;
    }
}

const a = creator();
const b = creator();






//#endregion



