function isOdd(number) {
    if (number % 2 !== 0) {
        return true;
    }
}

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
}

function identity(input) {
    return input === input;
}

function isFive(input) {
    return input = 5;
}

function addFive(input) {
    return input + 5;
}

function isMultipleOfFive(input) {
    if (input % 5 === 0) {
        return true;
    }
}

function isThree(input) {
    return input = 3;
}

function isMultipleOfThree(input) {
    if (input % 3 === 0) {
        return true;
    }
}

function isMultipleOfThreeAndFive(input) {
    if (input % 3 === 0 && input % 5 === 0) {
        return true;
    }
}

function isMultipleOf(target, n) {
    if (target % n === 0) {
        return true;
    }
}

function isTrue(boolean) {
    return true;
}

function isFalse(boolean) {
    return false;
}

function isTruthy(input) {
    if (input) {
        return true;
    } else {
        return false;
    }
}

function isFalsy(input) {
    if (!input) {
        return true;
    } else {
        return false;
    }
}

function isVowel(letter) {

}








// Simple Function Drills

function returnTwo() {
    return 2;
}
console.log(returnTwo());


function sayHowdy() {
    return "Howdy!";
}
console.log(sayHowdy())


function returnName() {
    return "Nicholas";
}
console.log(returnName());


function addThree(number) {
    return number + 3;
}
console.log(addThree(5));


function sayString(input) {
    return input;
}
console.log(sayString('codeup'));