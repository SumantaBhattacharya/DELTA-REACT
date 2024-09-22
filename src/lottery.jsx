import React from 'react';
import { useState } from 'react';
// import './lottery.css';
import { genTicket, sum} from './helper';


const Lottery = () => {

  let [isTicket, setTicket]= useState(genTicket(3))
  // const [isTicket, setTicket] = useState([0,0,0]);

  let isWinning = sum(isTicket) === 15;

  /*
  let buyTicket = () =>{
    setTicket(genTicket(3))
    }
  onClick={buyTicket}
  */
  
  const isMatches = () => {
    if (isTicket[0] === isTicket[1] && isTicket[1] === isTicket[2]) {
      return <h2>You have won the lottery!</h2>;
    } else {
      return <h2>Try again next time</h2>;
    }
  };
  // (isTicket[0] === isTicket[1] && isTicket[1] === isTicket[2] ? <p>❤</p> : <p>❌</p>)
  

  // generate a random ticket number for each slot

  return (
    <div className='main' style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" , height: "100%" ,padding: "0.4vw", backgroundColor: "#f4f4f9", }}>
      <div>
      <h1 style={{ fontFamily: 'Luckiest Guy, cursive', color: '#ff0028' }}>Lottery Game</h1>
      <div className='ticket'>
        <div>
          <h2 style={{fontFamily: 'Luckiest Guy, cursive'}}>Ticket:</h2>
          <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[0]}</p>
          <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[1]}</p>
          <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[2]}</p>
        </div>
        <div>
          <button style={{fontFamily: 'Luckiest Guy, cursive'}} className='button' 
          onClick={() => setTicket(genTicket(3))}
          >
            Generate New Ticket
          </button>
        </div>
        <h3>{isWinning ? "Congrats Man!" : "soory for your loss" }  </h3>
        {isMatches()}
      </div>
      </div>
    </div>
  );
}
// {isWinning && "congrats , you won!"}
export default Lottery;
// 1st way variable variable variable 
// array size = 3 numbers will generated randomly 
// single componet lottery
// i want to create a game in a array of 3 numbers the the 3 generated number be the same the the user wins if not user losses the change of getting 3 the same is comparatively higher
// props - 0 states - ticket events onClick buyTicket
/*
he state isTicket is already initialized with [0, 0, 0] through useState([0, 0, 0]). So why use Array(3).fill(0) again?

The reason is that every time the button is clicked, you need to generate a new ticket with random values. 
The array [0, 0, 0] used in useState is only the initial state for the component when it first renders. 
To create a fresh array with new random values each time the button is clicked, without modifying the original state array.
you can’t modify the existing isTicket array directly (because state should be treated as immutable), 
so you create a new array.

Here’s why Array(3).fill(0) is used again:

Creating a new array dynamically: Using Array(3).fill(0) ensures you are starting from scratch with a new array of 3 elements. 
*/
/*
The new array created using Array(3).fill(0).map(...) isn't directly accessing or modifying the useState state. Instead, 
it’s being used to generate a fresh array of random numbers, which is then passed to the setTicket() function to update the state.
*/
/*
Generating a new ticket:

A new array newTicket is created using Array(3).fill(0).map(() => Math.floor(Math.random() * 9) + 1).
Array(3).fill(0) initializes an array of three elements, each set to 0.
.map(() => Math.floor(Math.random() * 9) + 1) replaces each element in the array with a random number between 1 and 9 (inclusive). The Math.random() function generates a random decimal between 0 and 1, which is multiplied by 9 and then rounded down using Math.floor(). Adding 1 ensures the number is between 1 and 9.
Updating state:

The new array newTicket is passed to setTicket(newTicket), 
which updates the state isTicket with the new random numbers. This causes the component to re-render, 
displaying the updated ticket values (isTicket[0], isTicket[1], and isTicket[2]) on the screen.
*/

/*
          <button style={{fontFamily: 'Luckiest Guy, cursive'}} className='button' onClick={() => {
            let newTicket = Array(3).fill(0).map(() => Math.floor(Math.random() * 9) + 1);
            setTicket(newTicket);
          }}>Generate Ticket</button>
*/

/*
          <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[0]}</p>
          <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[1]}</p>
          <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[2]}</p> 
break them down into 3 components 
*/