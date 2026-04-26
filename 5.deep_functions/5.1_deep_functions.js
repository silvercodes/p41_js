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


let a;
a = 10;

let b = 12;

const f1 = function() {
    let a;
    a = 100;
    let b = 120;

    const f1 = function() {
        console.log('🟢', a);
    };

    const f2 = () => console.log('🟢', b);

    f1();

    function f0() {
        let c = 100;
        console.log('🟢', 'c', c);
        console.log('🟢', 'b', b);
        // console.log('🟢', 'x', x);
    }

    f0();
};

const f2 = () => console.log('🟢', b);

f1();

function f0() {
    let c = 100;
    console.log('🟢', 'c', c);
    console.log('🟢', 'b', b);
    console.log('🟢', 'x', x);
}

f0();




//#endregion



