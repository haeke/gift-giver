import { User } from "./users";

describe("the User class instance", () => {
  let edwin = new User("Edwin", "erivera@gmail.com", [], 0);
  it("Creates a user with name Edwin", () => {
    expect(edwin.name).toEqual("Edwin");
  });

  it("Adds test scores for the user", () => {
    edwin.saveScore(80);
    edwin.saveScore(78);
    expect(edwin.showNameAndScores()).toEqual("Edwin scores: 80,78");
  });
});
