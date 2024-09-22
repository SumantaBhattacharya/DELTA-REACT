import React, { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./ticket";

const Lottery = ({ n = 3, winningSum = 14 }) => {
  const [isTicket, setTicket] = useState(genTicket(n));
 const isWinning = sum(isTicket) === winningSum;
//  const iWinning = winC(isTicket)



  return (
    <div
      className="main"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "0.4vw",
        backgroundColor: "#f4f4f9",
      }}
    >
      <div>
        <h1 style={{ fontFamily: "Luckiest Guy, cursive", color: "#ff0028" }}>
          Lottery Game
        </h1>
        <Ticket ticket={isTicket} />
        <div className="ticket">
          <button
            style={{ fontFamily: "Luckiest Guy, cursive" }}
            className="button"
            onClick={() => setTicket(genTicket(n))}
          >
            Generate New Ticket
          </button>
        </div>
        <h3>{isWinning ? "Congrats Man!" : "Sorry for your loss"}</h3>
      </div>
    </div>
  );
};

export default Lottery;
