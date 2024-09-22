# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# ***Lottery***
- We are given Lottery tickets with a 3 digit number
- The number is generated randomly
- if the sum of all digits is 15, we win the lottery and get the prize

[4 , 2 , 4]

[***G***](https://github.dev/facebook/react/blob/main/)

Both implementations of the `genTicket` function generate an array of random numbers between 1 and 9, but they do so using different methods. comparing the two approaches:

### 1. **First Implementation**:

```js
function genTicket(n) {
    let generateTic = Array(n).fill(0).map(() => Math.floor(Math.random() * 9) + 1);
    return generateTic;
}
```

#### Explanation:
- **`Array(n).fill(0)`**: Creates an array with `n` elements, all initialized to `0`. For example, if `n = 3`, it creates `[0, 0, 0]`.
- **`.map(() => Math.floor(Math.random() * 9) + 1)`**: Transforms each element of the array using the provided function. This function generates a random number between 1 and 9 for each element of the array.
  - `Math.random()` generates a floating-point number between 0 (inclusive) and 1 (exclusive).
  - `Math.random() * 9` scales it to between 0 and 9.
  - `Math.floor()` rounds it down to the nearest integer (0 through 8).
  - Adding `1` shifts the range to 1 through 9.
- **Result**: An array with `n` random numbers between 1 and 9.

### 2. **Second Implementation**:

```js
function genTicket(n) {
  let arr = new Array(n); // Creates an array of size n with undefined elements.
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 9) + 1;
  }
  return arr;
}
```

#### Explanation:
- **`new Array(n)`**: Creates an array with `n` empty slots (undefined elements). For example, if `n = 3`, it creates `[undefined, undefined, undefined]`.
- **`for (let i = 0; i < n; i++) { arr[i] = ... }`**: Loops through each index of the array and assigns a random number between 1 and 9 to each slot.
  - Inside the loop, the random number is generated and assigned to each index `i`.
- **Result**: An array with `n` random numbers between 1 and 9.

### Comparison:
- **Effectiveness**: Both implementations generate an array with `n` random numbers between 1 and 9.
- **Performance**: Both are quite efficient, but the first approach is more concise and uses modern JavaScript methods (`Array.fill()` and `map()`), which are often preferred for their readability and functional style.
- **Initialization**: 
  - The first approach initializes the array with `0` values and then uses `.map()` to replace these values with random numbers.
  - The second approach uses a `for` loop to directly assign random numbers to each index of an initially undefined array.

### Correcting the First Implementation:

The `Array(3).fill(0)` part of the first function is not affected by the `n` parameter. To use `n`, you should modify it as follows:

```js
function genTicket(n) {
    let generateTic = Array(n).fill(0).map(() => Math.floor(Math.random() * 9) + 1);
    return generateTic;
}
```

### Conclusion:
Both functions will work, but the first implementation (using `Array.fill()` and `map()`) is more concise and leverages modern JavaScript features. The second implementation (using a `for` loop) is more traditional but equally effective.

`JavaScript is case-sensitive, and Math should be used with a capital "M".`

The function using `Array.prototype.reduce()` is a more concise and functional approach to calculating the sum of an array's elements. Let's compare the two methods:

### 1. **Manual Iteration Approach**:

```js
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
```

#### Explanation:
- **Initialization**: `let total = 0;` initializes a variable to keep track of the running total.
- **Looping**: `for (let i = 0; i < arr.length; i++)` iterates over each element in the array.
- **Accumulation**: `total += arr[i];` adds the current element to the running total.
- **Return**: `return total;` returns the computed sum.

### 2. **Using `Array.prototype.reduce()`**:

```js
function sum(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}
```

#### Explanation:
- **`arr.reduce()`**: The `reduce` method applies a function against an accumulator (`sum` in this case) and each element in the array (`value`), resulting in a single output value (the sum).
- **Callback Function**: `(sum, value) => sum + value` is a callback function passed to `reduce`. It takes two arguments:
  - `sum`: The accumulator that stores the running total.
  - `value`: The current element in the array.
- **Initial Value**: `0` is the initial value for the accumulator (`sum`). It ensures that the first call to the callback function uses this initial value as `sum`.

### Comparison:

1. **Readability**:
   - **Manual Iteration**: More verbose but explicit. It shows each step of the calculation.
   - **`reduce` Method**: More concise and functional. It abstracts away the details of iteration and accumulation.

2. **Performance**:
   - Both methods have similar performance characteristics, but `reduce` might be slightly more optimized in some JavaScript engines due to its functional nature.

3. **Functional Programming**:
   - **Manual Iteration**: Imperative style. You explicitly manage the loop and accumulation.
   - **`reduce` Method**: Declarative style. You describe what you want (sum of the array) without specifying the how of iteration and accumulation.

4. **Error Handling**:
   - Both methods assume that the input is a valid array of numbers. Additional error handling (e.g., checking if `arr` is indeed an array) would be required for robustness.

### Example Usage:

For both methods, given an array `arr = [1, 2, 3, 4]`, both will produce the same result:

```js
let arr = [1, 2, 3, 4];
console.log(sum(arr)); // Outputs: 10
```

### ***Conclusion:***
- Use the **manual iteration approach** if you prefer explicit control over the iteration process.
- Use **`reduce`** if you prefer a more concise and functional style for summing up the elements of an array.

## ***Changes to Lottery Game***
- Make the Lottery tikcets of N digit number
- The Winning sum could be any feasible number

app component(props) ➡  lottery(props) ➡ Ticket(props) 🔀 Ticket[0] Ticket[1]
                                                         ↪  Ticket[2]

In React, the concepts of **Logical Components** (or **Smart Components**) and **Presentational Components** (or **Dumb Components**) refer to a design pattern that separates the logic of an application from its presentation. This pattern helps keep your code organized and improves readability, scalability, and testability.

### 1. ***Logical Components (Smart Components):***
- **Purpose**: Handle application logic, data-fetching, and state management.
- **Characteristics**:
  - They are aware of how the app works.
  - Manage their own state (using hooks like `useState`, `useReducer`, etc.).
  - Often communicate with APIs or services to retrieve data.
  - Can pass state or event handlers (via props) to presentational components.
  - Typically contain less markup and focus on managing behavior.
  
**Example:**
```jsx
import React, { useState } from 'react';
import PresentationalComponent from './PresentationalComponent';

function SmartComponent() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Smart Component</h1>
      <PresentationalComponent count={count} onIncrement={increment} onDecrement={decrement} />
    </div>
  );
}

export default SmartComponent;
```

In this example, the **SmartComponent** manages the state (`count`) and passes it, along with event handlers (`onIncrement`, `onDecrement`), to the presentational component.

---

### 2. ***Presentational Components (Dumb Components):***
- **Purpose**: Render UI based on the props they receive.
- **Characteristics**:
  - Focus on the visual representation.
  - Do not contain any application logic or manage state (except for UI-specific state like toggle switches or form input).
  - Rely on props passed down from the smart component.
  - Can be stateless (functional components).
  - Easier to test since they don’t have much logic.

**Example:**
```jsx
function PresentationalComponent({ count, onIncrement, onDecrement }) {
  return (
    <div>
      <h2>Presentational Component</h2>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}

export default PresentationalComponent;
```

In this case, the **PresentationalComponent** does not manage any state of its own. It receives the state (`count`) and handlers (`onIncrement`, `onDecrement`) from the smart component, focusing only on how the UI is displayed.

---

### ***Summary of Differences***:

| **Smart (Logical) Components**                     | **Dumb (Presentational) Components**              |
| -------------------------------------------------- | ------------------------------------------------ |
| Manages state and logic (e.g., API calls, event handlers). | Focuses on UI and rendering.                     |
| Contains application behavior.                     | Contains very little to no logic.                 |
| Often passes props to presentational components.   | Receives props from smart components.            |
| Can be class or functional components (with hooks). | Typically functional (stateless) components.      |
| Example: Parent component managing business logic. | Example: Child component displaying data/UI.     |

### ***Benefits of this Separation:***
- **Better code organization**: Separation of concerns (logic and presentation).
- **Reusability**: Presentational components can be reused across multiple projects or parts of the app.
- **Testability**: Presentational components are easier to test as they don’t have complex logic.
- **Maintainability**: Changes to logic (business rules) are isolated from changes to the UI, making the code easier to maintain.

### ***Modern Usage in React***:
While the pattern is still useful, with React hooks like `useState`, `useEffect`, and context, many components in modern React applications tend to handle a mix of both logic and UI to some degree. However, keeping components as focused as possible on their core responsibilities (logic or presentation) is still considered a good practice.

```
App ➡ Lottery(Logical componenet) ➡ Ticket (Presentational componenet) 🔀 ticket[1] ticket[2] 
                            ↪  ticket[3]
```
```jsx
          <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[0]}</p>
          <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[1]}</p>
          <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[2]}</p> 
```
`break them down into 3 components` 
```
App ➡ Lottery(3,5,6) ➡ Ticket ticket[1]->(3) ticket->[2](5)
                            ↪  ticket[3]->(6)
                        Ticket pass down the random values in the form of props
logical components is a componenet which has state and professional component is a component which has no state 
```
```
Componenet Props StatesVariables Events
```
Components Types
1.FunctionalComponents 
2.Class Components

Logical Component
smart components 

Presentational Components 
dumb components

## ***Ticket Componenet ***
`TicketNum`
- Props : num
- State: none
- Events: none

`Ticket`
Props: ticket[] of size n
State: none
Evenets: none

## ***Lottery Componenet***
`Lottery`
```javascript
Props: n, winningSum
State: ticket[] //generate random number
Evenets: buyTicket()
```

## Forms in React
***The standcard way with Forms is to use*** `Controlled Componenets`.***So we make React state to be "single source of truth.***

```Markdown
- In HTML, form element such as <input>, <textarea>, and <select> typically maintain their own state and updates it based on user input. In React, mutable state is typically kept in the state property of components and only updated with setState().

- We can combine the two by making the React state to be the "single source of truth". Then the React component that renders a form also controls what happend in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component
```
`react old docs`


## ***Handling*** `Multiple Inputs`
- ***We create a common handleInputChange() for all elements***

***`evenet.target.name`*** ***changed field***
***`evenet.target.value` new value of the field***

```javascript
import React, { useState } from 'react'

const Form = () => {

    let [isFullName , setFullName] = useState("")
    let [isUsername, setUsername] = useState("")

    

    let handleNameChange = (e)=>{
        setFullName(e.target.value)
        console.log(e.target.value);
    }

    let handleUsernameChange = (e)=>{
        setUsername(e.target.value)
    }// update the value of isFullname and isUsername

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted')
        console.log(`Name: ${isFullName}, Email: ${isUsername}`);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Your Name!</label>
            <input id='fullName' value={isFullName} onChange={handleNameChange} type="text" placeholder='name?' />

            <label htmlFor="username">Your email_id!</label>
            <input id='username' value={isUsername} onChange={handleUsernameChange} type="email" placeholder='email?' />
            <button>Submit</button>
        </form>
        </>
    )

}

export default Form

/* useState is used to manage the state of the component

Form Component
useState for Full Name and Email
handleInputChange for Full Name and Email
Form Submit Event


Forms in React
The standcard way with Forms is to use Controlled Componenets. So we make React state to be "single source of truth.

Markdown
In HTML, form element such as <input>, <textarea>, and <select> typically maintain their own state and updates it based on user input. In React, mutable state is typically kept in the state property of components and only updated with setState().

We can combine the two by making the React state to be the "single source of truth". Then the React component that renders a form also controls what happend in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component

react old docs


Handling Multiple Inputs
We create a common handleInputChange() for all elements

evenet.target.name changed field
evenet.target.value new value of the field
*/

```

## ***Validations***
`Formik`
```bash
npm install formik
```
*like the form cannot be empty*

<u>***useEffect***</u>

*The Effect Hook lets you perform side effects in function components*

*Data Fetching, setting up a subscription, and manually changing the DOM in React components are all example of side effects*


