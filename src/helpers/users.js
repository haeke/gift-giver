export class User {
  constructor(name, email, quizScores, currentScore) {
    this.name = name;
    this.email = email;
    this.quizScores = quizScores;
    this.currentScore = currentScore;
  }

  saveScore(scoreToAdd) {
    this.quizScores.push(scoreToAdd);
  }

  showNameAndScores() {
    let scores =
      this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";

    return this.name + " scores: " + scores;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
    return "New Email Saved : " + this.email;
  }
}
