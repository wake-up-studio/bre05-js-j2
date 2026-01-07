let value = 0

function add(nbr1, nbr2){
   let value = nbr1 + nbr2
    return value;
}

function sub(nbr1, nbr2){
    let value = nbr1 - nbr2
    return value;
}

function mult(nbr1, nbr2){
    let value = nbr1 * nbr2
    return value;
}

function div(nbr1, nbr2){
    let value = nbr1 / nbr2
    return value;
}

function mod(nbr1, nbr2){
    let value = nbr1 % nbr2
    return value;
}

console.log(add(21, 21)); // doit afficher 42
console.log(sub(63, 21)); // doit afficher 42
console.log(mult(21, 2)); // doit afficher 42
console.log(div(84, 2)); // doit afficher 42
console.log(mod(42, 2)); // doit afficher 0


// ***********************************************************************************
// ***********************************************************************************


function askUserOperation(){
    let operation = window.prompt("Choisissez une opération (+, -, *, / et %)")
    return operation
}

function askUserFirstNumber(){
    let nbr1 = parseInt(window.prompt("Choisissez un premier nombre"))
    return nbr1
}

function askUserSecondNumber(){
    let nbr2 = parseInt(window.prompt("Choisissez un second nombre"))
    return nbr2
}

// console.log(askUserOperation())
// console.log(askUserFirstNumber())
// console.log(askUserSecondNumber())

// ***********************************************************************************
// ***********************************************************************************


function calculator(){
    let nbr1 = askUserFirstNumber()
    let operation = askUserOperation()
    let nbr2 = askUserSecondNumber()
    
    console.log(operation);
    
    if (operation === "+"){
        add(nbr1, nbr2)
    }
    else if (operation === "-"){
        sub(nbr1, nbr2)
    }
    else if (operation === "*"){
        mult(nbr1, nbr2)
    }
    else if (operation === "/"){
        div(nbr1, nbr2)
    }
    else if (operation === "%"){
        mod(nbr1, nbr2)
    }
    else{
        window.alert("oops")
    }
    
    window.alert(`Le résultat est ${value}`)
}

calculator()