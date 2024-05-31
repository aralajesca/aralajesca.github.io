function mySum(a,b) {return a+b}
function mySubstract(a,b) {return a-b}
function myProduct(a,b) {return a*b}
function myDivide(a,b) {return a/b}
function myExp(a,b) {return a**b}
function myRemainder(a,b) {return a%b}

const myFirstVariable = 50
const mySecondVariable = 3

const sum = myFirstVariable + mySecondVariable
const subtract = myFirstVariable - mySecondVariable
const product = myFirstVariable * mySecondVariable
const divide = myFirstVariable / mySecondVariable
const exp = myFirstVariable ** mySecondVariable
const remainder = myFirstVariable % mySecondVariable

console.log(mySum(myFirstVariable,mySecondVariable))
console.log(mySubstract(myFirstVariable,mySecondVariable))
console.log(myProduct(myFirstVariable,mySecondVariable))
console.log(myDivide(myFirstVariable,mySecondVariable))
console.log(myExp(myFirstVariable,mySecondVariable))
console.log(myRemainder(myFirstVariable,mySecondVariable))

if (10 > 1) {console.log("I am true")}
else {console.log("I am false")}

const iceCream = "Coke"

if (iceCream === "Chocolate") {console.log("This is not my favorite flavor")}
else if (iceCream === "Strawberry") {console.log ("This is my favorite flavor")}
else {console.log("This is not an ice cream flavor")}

for(let i = 0; i <= 5; i++) {console.log(i)}
for(let i = 5; i >= 1; i--) {console.log(i)}

for(let i = 1; i <= 100; i=i+2) {console.log(i)}