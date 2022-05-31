# Table of contents 🧾

-   [Testing App NextJS](#testing-app-nextjs)
    -   [Jest](#jest)
    -   [Testing Library](#testing-library)
    -   [Cypress](#cypress)
    -   [Difference between them](#difference-between-them)
    -   [Sintax differences between them](#sintax-differences-between-them)
    -   [Conclusion](#conclusion)

---

# Testing App NextJS 📟

Front End Testing validates that said GUI elements are functioning as expected. For example, it checks if input fields accept the right characters, if forms are being submitted only after the required fields are filled, if navigation is easy enough, if the page is loading fast enough, etc.
The goal of Front End Testing is to test functionalities and verify that a website or app’s presentation layer is bug or error-free. This has to be done after every single update to ensure recent changes have not degraded any aspect of the UI.

## Jest 🃏

![image](https://user-images.githubusercontent.com/73659203/170248591-1f6de57c-420d-40c0-9cdd-352e4fb12a0f.png)

According to their website, “Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly. Jest is well-documented, requires little configuration and can be extended to match your requirements.”

According to their website, <b>Enzyme</b> is a “JavaScript Testing utility for React that makes it easier to test your React Components’ output”. So here we use it in order to render our app and its components, so that Jest can run tests on it. <b>Enzyme</b> also provides us with the ability to simulate events in our tests, such as clicking and typing input, among other things. It’s quite common to see Jest used with <b>Enzyme</b>

## Testing Library 🐙

![image](https://user-images.githubusercontent.com/73659203/170248707-4a002f65-810e-4c3e-b1a2-f1edf4aa186a.png)

According to their website, “the Testing Library family of libraries is a very light-weight solution for testing without all the implementation details. The main utilities it provides involve querying for nodes similarly to how users would find them. In this way, testing-library helps ensure your tests give you confidence in your UI code.” Their philosophy is that “the more your tests resemble the way your software is used, the more confidence they can give you”.

## Cypress 🌳

![image](https://user-images.githubusercontent.com/73659203/170248803-05840215-01db-4b34-bfc0-05f7f963b3c5.png)

According to their website, Cypress is an end-to-end (e2e) “test runner built for humans”, with tests that “are easy to read and understand” and can be run in your browser and “run as fast as your browser can render”. Finally, Cypress provides “readable error messages [that] help you to debug quickly”. As you may have noticed, there wasn’t a nice chunk of text that I could pick up from the website, but rather I had to pick out sentences from their Features page.

## Difference between them

A key difference I should mention here is that Jest and Testing Library are typically what you might refer to as Unit Testing and Integration Testing libraries, whereas Cypress is typically used for End-To-End (e2e) testing. This means that you would test your application from start to finish, as if you were a user using your application (with all the clicks and page navigations included and so on).

## Sintax differences between them

### Jest

```
describe("<App/>", () => {
  it("Renders without crashing", () => {
    const app = mount(<App />);
    expect(app.find(".ToDo-Header").text()).toEqual("React To Do");
  });
});
```

### Testing Library

```
describe("<App/>", () => {
  it("Renders without crashing", () => {
    const { getByText } = render(<App />);
    expect(getByText("React To Do")).toBeInTheDocument();
  });
});
```

### Cypress

```
describe("<App/>", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });
  it("Renders without crashing", () => {
    cy.get("h1").contains("React To Do");
  });
});
```

## Conclusion

In my opinion, any of these 3 is valid for our project, We have decided to use in first instance Jest and React Testing Library to do unit and integration testing and we have to do some actions to test this test after push at some branch. In the next issues we will create some test.config files and do these actions.
