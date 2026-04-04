
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





const user = {
    id: 101,
    email: 'vasia@mail.com',

    func: () => console.log('🟢', 'Arrow function' ),

    render: function() {
        console.log('🟢', 'render');
    },

    info() {
        console.log('🟢', 'info');
    }
};

user.func();
user.render();
user.info();

//#endregion