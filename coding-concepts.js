// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "India 2023"
//console.log(cohort.split(" "))

// a) Your answer: The split command will seperate the words in the string " "
// b) Verify and explain: As expected the split command seperated the words with the quotation mark string.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: It should log error or undefined 
// b) Verify and explain: It logged  Undefined due to the function lacking a return statement.

// --------------------3) What will this log?

 const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//  console.log(onlyOdds)

// a) Your answer: It will only logg the odds everything looks as should be.
// b) Verify and explain: The .filter method is used correctly and creates a new array containing only the numbers that pass the modulo.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: It should only return "Javascript" due to the index position [0] being specified in the brackets in the console log.
// b) Verify and explain: As expected it only logged "Javascript " due to the [0] being input. If I replace [0] with [1] it will log next input.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: It should return an error, due to us declaring const learnStudent when we have a Learn class.
// b) Verify and explain: The output gave us an incorrect utlization of a class. Followed by our incorrect use of console log.learnStudent . 
// output - { student: 'George', cohort: 'India', year: 2023 }