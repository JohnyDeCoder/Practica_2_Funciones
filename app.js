function greet() {
    console.log('Hello');
}

// functions as parameters
function logGreeting(fn) {
    fn();
};

logGreeting(greet);

// greet(); //Invoke