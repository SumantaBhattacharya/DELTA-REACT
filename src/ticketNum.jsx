// imr - import React from 'react';
// imdr - import ReactDOM from 'react-dom';
// control + shift + x
// rafce

/*Ticket Componenet 
TicketNum`
Props : num
State: none
Events: none

Ticket
Props: ticket[] of size n
State: none
Evenets: none

App(logical component)(props) ➡ Lottery(props)(3,5,6) ➡ Ticket ticket[1]->(3) ticket->[2](5)
                            ↪  ticket[3]->(6)
                        Ticket pass down the random values in the form of props
logical components is a componenet which has state and professional component is a component which has no state 

*/

import React from 'react'
import "./ticketNum.css"

const ticketNum = ({num}) => {
  return (
    <div>
      <p style={{fontFamily: 'Luckiest Guy, cursive', border: "2px solid black", padding: "0.2vw", alignItems: "center", borderRadius: "10px", backgroundColor: "white"}} className='ticket-number'>{num}</p> 
    </div>
  )
}

export default ticketNum
// {/* The 'num' prop is used here to display the ticket number */}
// <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[2]}</p>
//<p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{num}</p>