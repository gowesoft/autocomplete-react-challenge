# Interview Questions

## 1. What is the difference between Component and PureComponent? Give an example where it might break my app.

React.Component and React.PureComponent are very similar. The key difference is that PureComponent implements a shallow prop and state comparison into `shouldComponentUpdate`, thereby skipping unnecessary re-renders when the state or props haven't actually changed. This is unlike Component, which does not have a built-in shouldComponentUpdate method.

However, this difference could break your application if you're not careful. For example, if you mutate a property within an object in your state, a shallow comparison won't detect this mutation. As a result, PureComponent won't re-render, leading to outdated UI.

## 2. Context + ShouldComponentUpdate might be dangerous. Why is that?

The main danger here is that `shouldComponentUpdate` does not check for changes in context. This means that if you're using context in a component that implements `shouldComponentUpdate`, the component might not update when the context changes, leading to stale or incorrect UI.

## 3. Describe 3 ways to pass information from a component to its PARENT.

1. **Callbacks:** A parent can pass a callback function to a child via props. The child can then call this function and pass data back to the parent.
2. **Refs:** A parent can create a ref to a child component, giving it access to that child's props, state, and methods.
3. **Lifting State Up:** If both the parent and child need access to the same data, it often makes sense for the parent to manage this state and pass it down to the child via props.

## 4. Give 2 ways to prevent components from re-rendering.

1. **Using shouldComponentUpdate:** This lifecycle method can be used to prevent unnecessary re-renders by returning false when a re-render is not necessary.
2. **Using React.memo:** This is a higher-order component that will prevent a functional component from re-rendering if its props have not changed.

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

A Fragment in React allows us to return multiple elements in a component's render method without creating an unnecessary DOM node. It's useful for keeping your DOM tree as clean and minimal as possible.

However, if you're relying on the extra wrapper element for styling (for example, you're applying CSS to the wrapper), removing this element and replacing it with a Fragment could break your styles.

## 6. Give 3 examples of the HOC pattern.

1. **Redux's `connect` function:** This HOC allows a React component to subscribe to updates in the Redux store.
2. **React Router's `withRouter` function:** This HOC injects the history object and related router props into a component.
3. **React's `memo` function:** This HOC is similar to `PureComponent` for function components, preventing re-renders when props are the same.

## 7. What's the difference in handling exceptions in promises, callbacks and async…await?

1. **Callbacks:** You need to handle errors directly inside the callback function. Failing to catch exceptions here could lead to a program crash.
2. **Promises:** Uncaught exceptions result in rejected promises. You can catch these using a `.catch` at the end of your promise chain.
3. **Async/await:** Uncaught exceptions can be caught using a `try/catch` block. Without this, the exception results in a rejected promise.

## 8. How many arguments does setState take and why is it async?

`setState` can take up to two arguments. The first argument is an updater function or an object to merge into the current state. The second argument is a callback function that will be executed once `setState` is finished and the component is re-rendered.

`setState` is asynchronous to improve performance. By batching multiple `setState` calls together, React can minimize re-renders and deliver a smoother user experience.

## 9. List the steps needed to migrate a Class to Function Component.

1. Replace the `render` method with the body of a function component.
2. Replace instances of `this.props` with just `props`.
3. Replace `this.state` with `useState` calls.
4. Replace lifecycle methods with equivalent `useEffect` calls.
5. Replace `this.setState` with the setters from `useState`.

## 10. List a few ways styles can be used with components.

1. **Inline Styles:** Directly style your components using JavaScript objects.
2. **CSS Classes:** Apply classes to your elements and style them using CSS.
3. **CSS-in-JS Libraries (e.g., styled-components):** Style your components using JavaScript with the help of a library.
4. **CSS Modules:** Locally scope your styles to avoid conflicts.

## 11. How to render an HTML string coming from the server.

React provides a prop called `dangerouslySetInnerHTML` that can be used to insert HTML directly into a component. However, as the name suggests, this is a dangerous operation and can open your application up to cross-site scripting (XSS) attacks. It's crucial to sanitize any HTML before rendering it in this way.

Example:

```jsx
<div dangerouslySetInnerHTML={{ __html: yourHTMLString }} />
```
