function greet() {
    console.log('Hello');
}

// functions as parameters
function logGreeting(fn) {
    fn();
};

// function expression
let greetMe = function () {
    console.log('Hello from the function expression');
}

let saludo = (nombre, tratamiento) => {
    console.log('Hola ' + tratamiento + ' ' + nombre);
}

greet(); //Invoke
logGreeting(greet);
greetMe();
saludo('Miguel', 'sr.');