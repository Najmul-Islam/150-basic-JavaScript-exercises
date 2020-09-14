function printThePage() {
    window.print();
}

// Tips of the Day

// Create custom errors
function greeintg() {
    throw "Hello World!";
}

function sayHi() {
    try {
        const data = greeintg();
        console.log('It worked!', data);
    } catch (e) {
        console.log('Oh no an error:', e);
    }
}

sayHi();