// Good Luck! You got this 💪🏾
// Write your code here.

// Assignment

//describeCountry
function describeCountry(country,population,capticalCity){
    return `${country} has a ${population} million people and it's capital city is ${capticalCity}`
}
let hargeisa=describeCountry("somaliland","3.5","Hargeisa") 
let paris= describeCountry("France","67.5",'Paris')
let doha=describeCountry("Qatar","2.931","Doha")

console.log(hargeisa)
console.log(paris)
console.log(doha)

//PercentageOfWorld1

function percentageOfWorld1(population){
    return ((population/7900000000)*100)
    
}

console.log("India is about " + percentageOfWorld1(1393000000) + "% of the world's population")
console.log("Somaliland is about " + percentageOfWorld1(3500000) + "% of the world's population")
console.log("France is about " + percentageOfWorld1(67500000) + "% of the world's population")

// Array

let popoulation=["1393000000","3500000","67500000","1441000"]
let neighbourhood=["15700000","45000000","14300000","79500000"]

const neighbourhoods = ["15700000","45000000","14300000","79500000"]; 
console.log(neighbourhoods.length === 4); 
const percentages = [ 
percentageOfWorld1(neighbourhood[0]) ,
percentageOfWorld1(neighbourhood[1]), 
percentageOfWorld1(neighbourhood[2]), 
percentageOfWorld1(neighbourhood[3])
 ];
