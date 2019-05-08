This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Gift Giver

This project serves as an example of using Test Driven Development to create a React Project. The gift giver project let's a user keep a list of names and gifts that they will want to give to a friend or loved one. This project will use Jest and Enzyme to test the various features of the project.

## Technologies used

- React - Stateful and Presentaional Components
- Jest - for unit testing
- Enzyme - for testing React components and DOM interactions
- Snapshot testing - can be useful if you want to test for changes in the DOM.
  `press u` to update the snapshot if you want to keep an update to the DOM.
- TypeScript - type definitions and interfaces
- Semantic HTML5
- CSS3
- Flexbox
- Github Pages

## Features

1.  The ability to create a gift.
    - Two input forms are to be used to add a name and present.
2.  The ability to delete a gift.
    - A delete button will be created when a user clicks on the add button.
3.  The List of Gifts

4.  Run Coverage Tests
    `npm run test -- --coverage`

        Testing components that use the redux connect function. Always use named exports for testing.
        Example -
        `
        import React from "react";
        import { configure, shallow } from "enzyme";
        import Adapter from "enzyme-adapter-react-16";
        // named export statement IMPORTANT
        import { Wallet } from "./Wallet";

        // required to make enzyme work
        configure({ adapter: new Adapter() });

        describe("Wallet", () => {
        const wallet = shallow(<Wallet />);

        it("renders properly", () => {
                expect(wallet).toMatchSnapshot();
            });
        });

    `

    Or you will get an error in regards to not finding the "store" in either the context or or props of "Connect(Wallet)"
