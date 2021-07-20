"use strict";

// alert("Hi, I am a Javascript alert!");

// confirm

// var userDecision = confirm("Are you sure you don't want to buy stuff on sale!")
// console.log(userDecision);
//
// if (userDecision === true) {
//     alert("Wise choice!");
// } else {
//     alert("Oh no, your loss!");
// }

// prompt

var currentSpeedInMPH = 65;
var plannedSpeedInMPH = prompt("How fast do you plan to go in mph");
var distanceLeftInMiles = prompt("How many miles away are you from your destinaiton?")
var timeToDestinationArCurrentSpeed = (distanceLeftInMiles/currentSpeedInMPH) * 60;
var timeToDestinationAtPlannedSpeed = (distanceLeftInMiles/plannedSpeedInMPH) * 60;
var timeGain = timeToDestinationArCurrentSpeed - timeToDestinationAtPlannedSpeed;
var minutesGained = Math.floor(timeGain);
var seconds = Math.round((timeGain - minutesGained) * 60);
console.log("If you drive at " + plannedSpeedInMPH + " mph, you will arrive " + minutesGained + " minutes and " + seconds + " seconds earlier");