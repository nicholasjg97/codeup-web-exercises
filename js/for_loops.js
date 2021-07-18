function showMultiplicationTable(input) {
    for (i = 1; i < 11; i++) {
        console.log(input + " * " + i + " = " + (input * i));
    }
}


// function randomOddEven() {
//      for (let i = 1; i <= 10; i++) {
//         let randomNumber = Math.floor(Math.random() * 180) + 20;
//         if (randomNumber % 2 === 0) {
//             console.log("The number " + randomNumber + " is even.")
//         } else {
//             console.log("The number " + randomNumber + " is odd.")
//         }
//     }
// }
// randomOddEven();


// for (let i = 1; i < 11; i++) {
//     let randomNumber = Math.floor(Math.random() * 180) + 20;
//     if (randomNumber % 2 === 0) {
//         console.log("The number " + randomNumber + " is even.")
//     } else {
//         console.log("The number " + randomNumber + " is odd.")
//     }
// }

// var j = 1;
// for (i = 1; i < 10; i++) {
//     console.log(i * j);
//     j = j.toString() + 1;
// }


// This for loop does not work properly
for (i = 1; i < 10; i++) {
    var number = i;
    var count = 0;
    var outputString = "";
    while (count < number) {
        outputString = outputString + number.toString();
        count = count + 1;
    }
    console.log(outputString);
}

// This is the cleaned up version for the for while loop above
// for (var i = 1; i < 10; i++) {
//     var output = "";
//     for (var j = 1; j <= i; j++) {
//         output += i;
//     }
//     console.log(output);
// }

// most efficient way for exercises above
for (i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}

// for (i = 100; i > 0; i -= 5) {
//     console.log(i);
// }
