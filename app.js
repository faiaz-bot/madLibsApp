let userInputs = [];

for(let i=0; i < 5; i++){

    userInputs.push(prompt("Enter a word"));
}

let originaStory = `In ${userInputs[0]},computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}`
console.log(originaStory);