React JS – Day 3

📚 What I Learned Today

Today, I explored some important React concepts and practices:

✅ 1. Calling Functions in React

Without Parameters

Created a simple function and called it inside a component without passing any arguments.

Example:

function greet() {
  alert("Hello from React!");
}

function App() {
  return (
    <button onClick={greet}>Click Me</button>
  );
}


With Parameters

Learned how to pass parameters while calling functions inside JSX using arrow functions.

Example:

function greetUser(name) {
  alert(`Hello, ${name}!`);
}

function App() {
  return (
    <button onClick={() => greetUser("Kosar")}>Greet User</button>
  );
}




---

✅ 2. Upgrading and Downgrading React Version

Discovered how to update or revert React version by modifying the package.json file.

Steps:

1. Open package.json.


2. Update the version of react and react-dom.
Example:

"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}


3. Run:

npm install



This helps in managing React version compatibility for different projects.



---

🔗 Key Takeaways

Event handling in React becomes more dynamic when you pass parameters.

Always use arrow functions for inline parameter passing to avoid immediate execution.

React version control is essential for working on legacy or updated projects.



---

✅ Day 3 Completed! 🚀

Next, I’ll dive deeper into state management in React.

