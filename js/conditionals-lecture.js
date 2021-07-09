// alert("Hello World");

// var flavor = prompt("Welcome to Codeup Ice Cream! What flavor do you want?");

// if-else
// if - else if - else


// if (flavor === "chocolate") {
//     alert("One chocolate coming right up!");
// } else if (flavor === "vanilla") {
//     alert("One vanilla coming right up!")
// } else {
//     alert("We do not have that color :(")
// }

// switch
// hey browser, look at the value of the flavor variable and
// switch your response depending on the value

// switch(flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up!");
//         break;
//     default:
//         alert("We do not have that flavor. Sorry! :(");
// }

// function getIceCreamOrder(flavor) {
//     if (flavor === "chocolate") {
//         alert("One chocolate coming right up!");
//     } else if (flavor === "vanilla") {
//         alert("One vanilla coming right up!")
//     } else {
//         alert("We do not have that color :(")
//     }
// }


// function checkIfWeHaveTheFlavor(flavor) {
//     var weHaveThat = false;
//         if (flavor === "chocolate") {
//         weHaveThat = true;
//     } else if (flavor === "vanilla") {
//         weHaveThat = true;
//     } else if (flavor === "strawberry") {
//             weHaveThat = true;
//         }
//
//         return weHaveThat;
// }



// function getIceCreamOrder(flavor) {
//     if (flavor === "chocolate" || flavor === "vanilla" || flavor === "strawberry") {
//         alert("One " + flavor + " coming right up!")
//     } else {
//         alert("We do not have that flavor. Sorry! :(");
//     }
// }

// function getIceCreamOrder() {
//     return prompt("Welcome to Codeup Ice Cream! What flavor do you want?")
// }

// function replyToCustomer(flavor) {
//     if (checkIfWeHaveTheFlavor(flavor)) {
//         alert("One " + flavor + " coming right up!")
//     } else {
//         alert("We do not have that flavor. sorry!");
//     }
// }

// replyToCustomer(getIceCreamOrder())

// var decision = confirm("Are you sure you want to close this page?");
// alert(decision);

// if (decision) {
//     alert("OK, closing the page ...");
// } else {
//     alert("Yay! Keeping the page open!");
// }

// alert( (decision === true)? "Ok closing the page" : "Yay! Keeping the page open!");





// var num = 10;

// if (num % 5 === 0) {
//     alert("That number is divisible by 5!")
// } else {
//     alert("That number is not divisible by 5!");
// }

// function divisibleByFive(num) {
//     if (num % 5 === 0) {
//         alert("That number is divisible by 5!");
//     } else {
//         alert("That number is not divisible by 5!");
//     }
// }



// function divisibleByFive(num) {
//     alert( (num % 5 === 0)? "That number is divisible by 5!" : "That number is not divisble by 5!");
// }



// function isdivisibleByFive(num) {
//    if (num % 5 ===0){
//        return true;
//    } else {
//        return false;
//    }
// }



// function isdivisibleByFive(num) {
//     return num % 5 === 0;
// }

// var email;
//
// if (typeOf email === "undefined") {
//     alert("That's undefined");
// } else {
//     alert("That's not undefined");
// }

// function isUnderfined(input) {
//     if (typeof input === "undefined") {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isUnderfined(input) {
//     return typeof input === "undefined";
// }
//
// function alertMVPCustomer(totalPurchase) {
//     if (totalPurchase > 1000) {
//         alert("We have an MVP customer!")
//     }
// }

// function alertMVPCustomer(totalPurchase) {
//     if (totalPurchase > 1000) {
//         return true;
//     } else {
//         return false;
//     }
// }

function isMVPCustomer(totalPurchase) {
    return totalPurchase > 1000;
}

var totalPurchase = 1001;

if (isMVPCustomer(totalPurchase)) {
    alert("We have an MVP Customer!");
}