var currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75
}

// console.log(currentWeather.temp);
// console.log(currentWeather.humidity);
// console.log(currentWeather.feels_like);

// console.log(currentWeather["temp"]);
// var whatImInterestedIn = "humidity";
// console.log(currentWeather[whatImInterestedIn]);

// console.log("The current temperature is " + currentWeather.temp);
//
// function fahrenheitToCelsius(tempInF) {
//     return ((tempInF - 32) * 5)/9;
// }
//
// console.log("The current temperature is " + currentWeather.temp + "F, " + fahrenheitToCelsius(currentWeather.temp).toFixed(2) + "C");
//
// if (currentWeather.temp > 95) {
//     console.log("It's hot!");
// } else {
//     console.log("Not real Texas heat!");
// }


// you can add new properties to an existing object
currentWeather.uvIdex = 9.79;

// loop through the object and get the property names
for (var prop in currentWeather) {
    console.log(prop + ": " + currentWeather[prop])
}

console.log("The UV index is  " + currentWeather.uvIdex);

// you can also delete properties from an object
delete currentWeather.uvIdex;
console.log("The UV index is  " + currentWeather.uvIdex);


var hourlyWeather = [
    {
        time: "08:00",
        temp: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temp: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temp: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temp: 84.49,
        feels_like: 89.24
    }
];







