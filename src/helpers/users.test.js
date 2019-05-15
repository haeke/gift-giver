import { User } from "./users";

describe("the User class instance", () => {
  let edwin = new User("Edwin", "erivera@gmail.com", [], 0);
  edwin.saveScore(80);
  edwin.saveScore(78);
  it("Creates a user with name Edwin", () => {
    expect(edwin.name).toEqual("Edwin");
  });

  it("Adds test scores for the user", () => {
    expect(edwin.showNameAndScores()).toEqual("Edwin scores: 80,78");
  });

  it("allows a user to change their email", () => {
    edwin.changeEmail("e@gmail.com");
    expect(edwin.email).toEqual("e@gmail.com");
  });
});
