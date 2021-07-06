// console.log("Hello from external JavaScript");
//
// alert("Welcome to my Website");
// var userColor = prompt("What is your favorite color?")
// console.log(userColor);
// alert("Nice, " + userColor + " is my favorite color too!");


var mermaidDays = prompt("How many days will you be watching The Little Mermaid?");
var brotherBearDays = prompt("How many days will you be watching Brother Bear?");
var herculesDays = prompt("How many days will you be watching Hercules?");
var rentalPerDayDollars = prompt("How much is it to rent a movie per day?")
var totalRentalCost = parseFloat(mermaidDays * rentalPerDayDollars) + parseFloat(brotherBearDays * rentalPerDayDollars) + parseFloat(herculesDays * rentalPerDayDollars)
alert("Nice, your total cost for all movies will be $" + totalRentalCost.toFixed(2));
console.log(totalRentalCost);


var googleHourlyRateDollars = prompt("How much does Google pay you?")
var amazonHourlyRateDollars = prompt("How much does Amazon pay you?");
var facebookHourlyRateDollars = prompt("How much does Facebook pay you?")
var googleHours = prompt("How many hours did you work for Google this week?");
var amazonHours = prompt("How many hours did you work for Amazon this week?");
var facebookHours = prompt("How many hours did you work for Facebook this week?");
var googlePayRate = googleHourlyRateDollars * googleHours;
var amazonPayRate = amazonHourlyRateDollars * amazonHours;
var facebookPayRate = facebookHourlyRateDollars * facebookHours;
var totalPayment = parseFloat(googlePayRate) + parseFloat(amazonPayRate) + parseFloat(facebookPayRate);
alert("You got paid $" + totalPayment.toFixed(2) + " this week!")
console.log(totalPayment);


