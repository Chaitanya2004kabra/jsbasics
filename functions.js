var cowsay = require("cowsay")
var onelinerjoke = require("one-liner-joke")
var getrandomjoke = onelinerjoke.getRandomJoke()
var math = require("math")
console.log(cowsay.say({
    text : getrandomjoke.body,
    e : "oO",
    T : "U "
}));
var a = math.random()
console.log (a)
console.log (math.floor(a*10))
