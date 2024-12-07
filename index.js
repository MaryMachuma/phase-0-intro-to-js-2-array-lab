// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Destructive Methods
function destructivelyPrependCat(name = "Ralph") {
    cats.unshift(name);
    console.log(cats);
}

function destructivelyAppendCat(name) {
    cats.push(name);
    console.log(cats);
}

function destructivelyRemoveLastCat() {
    cats.pop();
    console.log(cats);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    console.log(cats);
}

// Non-Destructive Methods
function appendCat(name) {
    const cat = [...cats, name];
    return cat;
}

function prependCat(name) {
    const cat = [name, ...cats];
    return cat;
}

function removeLastCat() {
    const cat = cats.slice(0, -1);
    return cat;
}

function removeFirstCat() {
    const cat = cats.slice(1);
    return cat;
}
