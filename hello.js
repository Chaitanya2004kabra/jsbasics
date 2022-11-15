console.log("hello")

const a = 10
const b = 20
const n = 10
console.log("a is " + a)
console.log("b is" + b)

if (a>b) {
console.log ("a is greater " + a)    
}
else {
    console.log ("b is greater " + b)
}
for (let i=0 ; i<n ; i++ ){
    console.log(i)
}
try {
    throw new Error("cant divide 0")
}catch(err){
    console.log(err)
}
