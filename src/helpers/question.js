export class Question {
  constructor(theQuestion, theChoices, theCorrectAnswer) {
    this.question = theQuestion;
    this.choices = theChoices;
    this.correctAnswer = theCorrectAnswer;
    this.userAnswer = "";
    this.newDate = new Date().toLocaleDateString();
    console.log("quiz created on: " + this.getQuizDate());
  }

  getQuizDate() {
    return this.newDate;
  }

  getCorrectAnswer() {
    return this.correctAnswer;
  }

  getUserAnswer() {
    return this.userAnswer;
  }

  displayQuestion() {
    let choiceCounter = 0;
    let choiceQuestion = this.choices.map(choice => {
      choiceCounter += 1;
      return choice;
    });
    let questionToDisplay = `${this.question} - ${choiceQuestion}`;

    return questionToDisplay;
  }
}
let q1 = new Question(
  "What is a closure?",
  ["Feature", "Function", "Class"],
  "Feature"
);

console.log(q1.displayQuestion());

class MultipleChoiceQuestion extends Question {
  constructor(theQuestion, theChoices, theCorrectAnswer) {
    super(theQuestion, theChoices, theCorrectAnswer);
    this.multipleChoice = false;
  }

  // override the display question function from the parent class
  displayQuestion() {
    return this.question;
  }
}
let mc1 = new MultipleChoiceQuestion(
  "Do arrow functions have a this keyword binding?",
  ["true", "false"],
  "false"
);
console.log(mc1.displayQuestion());
