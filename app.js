let questionCounter = 0;
let numberOfQuestion = 28;
let solicitation = `Please enter a`;
let questionArray = [
    `${solicitation} year(2011, 2022, etc)`,
    `${solicitation} person full name`,
    `${solicitation} computer-specific model ("commodore 64" etc)`,
    `${solicitation} famous school`,
    `${solicitation} word for people you know (friends, family etc)`,
    `${solicitation} type of bug`,
    `${solicitation} computer-specific part (plural-tense, ie "screens")`,
    `${solicitation} profession (plural-tense, i.e. "painters")`,
    `${solicitation} type of book`,
    `${solicitation} verb (past-tense)`,
    `${solicitation} nother verb (past-tense)`,
    `${solicitation} n adjective`,
    `${solicitation} pronoun`,
    `${solicitation} noun`,
    `${solicitation} verb`,
    `${solicitation} month, day and year (long-form, ie January, 1 2000)`,
    `${solicitation} number`,
    `${solicitation} noun (plural-tense)`,
    `${solicitation} famous museum`,
    `${solicitation} city, state (ie Washington, D.C)`,
    `${solicitation} n adjectiv`,
    `${solicitation} physics-specific noun (ie "gravity")`,
    `${solicitation} person's full name`,
    `${solicitation} number`,
    `${solicitation} type of document (ie "poem", "essay" etc)`,
    `${solicitation} bad thing (ie an "error")`,
    `${solicitation} n old machine`,
    `${solicitation} tool used for hunting`,
    `${solicitation} verb (infinitive-tense)`,
]
let userInputs = [];

for(let i=numberOfQuestion; i>=0; i--){
    console.log(questionArray[questionCounter]);
    questionCounter++;

}

let originalStory = `In ${userInputs[0]},computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}`
console.log(originalStory);
