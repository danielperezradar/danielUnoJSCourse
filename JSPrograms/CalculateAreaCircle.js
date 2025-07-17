const prompt = require("prompt-sync")({ sigint: true });

var radius = prompt("Please enter the redius: ");
var circleArea = 0;

circleArea = calculateAreaOfACircle(radius);
console.log("The circle's area is: " + circleArea);

function calculateAreaOfACircle(radius) {
    const PI = 3.14159;
    return PI * (radius * radius);
}