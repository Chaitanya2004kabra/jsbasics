var cowsay = require("cowsay")
var onelinerjoke = require("one-liner-joke")
var getrandomjoke = onelinerjoke.getRandomJoke()
var math = require("math")
console.log(cowsay.say({
    text : getrandomjoke.body,
    e : "oO",
    T : "U "
}));