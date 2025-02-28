import React from "react";
import TicketNum from "./ticketNum";
import "./ticket.css"; // Make sure the path matches the location of your CSS file
//<Ticket ticket={[8,3,4]} />
const ticket = ({ ticket }) => {
  return (
    // ticket is an array of numbers. We map over it to create a new array of TicketNum components.
    <>
      <h1>Tickets</h1>
      <div className="ticket">
        {ticket.map((num, id) => (
          <TicketNum key={id} num={num} />
        ))}
      </div>
    </>
  );
};

export default ticket;
// num = is just an attribute passing as a prob to the TicketNum and in the {num} the array values are accessed
// <TicketNum num={ticket[0]} />
// ticket={[8,3,4]}
// app -> ticket -> ticketNum
//{/* again we craeted a prop */}
// <TicketNum num={ticket[0]} />  {/* Access the first element of the ticket array */}
// <TicketNum num={ticket[1]} />  {/* Access the first element of the ticket array */}
// <TicketNum num={ticket[2]} />  {/* Access the first element of the ticket array */}
//  key is necessary for react to identify unique elements in the array. id is a unique identifier generated by react.
