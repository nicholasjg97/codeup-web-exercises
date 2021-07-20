// var currentWeather = {
//     humidity: 77,
//     temp: 82.33,
//     feels_like: 88.79,
//     clouds: 75
// }

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
// currentWeather.uvIdex = 9.79;

// loop through the object and get the property names
// for (var prop in currentWeather) {
//     console.log(prop + ": " + currentWeather[prop])
// }

// console.log("The UV index is  " + currentWeather.uvIdex);

// you can also delete properties from an object
// delete currentWeather.uvIdex;
// console.log("The UV index is  " + currentWeather.uvIdex);


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

// console.log(hourlyWeather[0]);

// for (var i = 0; i < hourlyWeather.length; i++) {
//     console.log("At " + hourlyWeather[i].time + " the temperature will be " + hourlyWeather[i].temp + " and feel like " + hourlyWeather[i].feels_like);
// }

// hourlyWeather.forEach(function(hourlyForecast, index) {
//     console.log("Object number: " + index + " At " + hourlyForecast.time + " the temperature will be " + hourlyForecast.temp + " and feels like " + hourlyForecast.feels_like);
// })

var texasInfo = [
    {
        city: "San Antonio",
        latitude: 29.423017,
        longitude: -98.48527,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 77,
            temp: 82.33,
            feels_like: 88.79,
            clouds: 75
        }
    },
    {
        city: "Houston",
        latitude: 29.7915,
        longitude: -95.093,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 68,
            temp: 87.44,
            feels_like: 97.7,
            clouds: 75
        }
    }
]

// console.log("The temperature in " + texasInfo[1].city + " is " + texasInfo[1].currentWeather.temp);

var fighter = {
    // state: what the object knows about itself
    name: "Arata",
    hitpoints: 18,
    maxDamage: 8,
    // behavior: what the object does
    // this is a method
    // a method is function inside a object
    // attack: function(target){
    //     console.log(this.name + " attacks " + "the " + target.name + "!");
    //     console.log(target.name + " has " + target.hitpoints + " hit points.");
    //     var damage = Math.ceil(Math.random() * this.maxDamage);
    //     console.log(this.name + " does " + damage + " points of damage!");
    //     // let's have an object's behavior affect another object's state
    //     target.hitpoints -= damage;
    //     console.log(target.name + " now has " + target.hitpoints + " hit points left.");
    // }
}

// the this keyword

var monster = {
    name: "Goblin",
    hitpoints: 8,
    maxDamage: 6,
}

// fighter.attack(monster);
// monster.attack()

var controller = {
    attack: function (attacker, defender) {
        console.log(attacker.name + " attacks " + "the " + defender.name + "!");
        console.log(defender.name + " has " + defender.hitpoints + " hit points.");
        var damage = Math.ceil(Math.random() * this.maxDamage);
        console.log(attacker.name + " does " + damage + " points of damage!");
        // let's have an object's behavior affect another object's state
        defender.hitpoints -= damage;
        console.log(defender.name + " now has " + defender.hitpoints + " hit points left.");
        console.log("----------------");
    }
}

// controller.attack(fighter, monster);
// controller.attack(monster, fighter);