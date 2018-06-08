//same result
// var square = (x) => {
//     var result = x * x;
//     return result;
// };

// var square = (x) => x * x;
var square = x => x * x;

console.log(square(9));

var user = {
    name: 'Lugas',
    //arrow functions => not work when it's called
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi, I'm ${this.name}`);
    },
    //regular functions => work
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi, I'm ${this.name}`);
    }
};

user.sayHiAlt(1, 2, 3);