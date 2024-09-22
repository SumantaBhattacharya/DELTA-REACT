import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import LikeButton from './LikeButton'
import LudoBoard from './ludoBoard'
import Todo from './Todo'
import Lottery from './lottery'

// App component which renders all the other components.
import TicketNum from './ticketNum'
import Ticket from './ticket'
import { genTicket, sum } from "./helper";

import LotteryP from './LotteryP'
import Form from './Form'

import CommentsForm from './CommentsForm'
import Comments from './comments'


import CommentsForms from './Comment-Forms'
import Counter from './Counter'

import Jokes from './Jokes'

import CurrencyApp from './CurrencyApp'

function App() {
  
  let winC = (ticket)=>{
    return sum(ticket) === winningSum;
    
    //return ticket.every((num) => num === ticket[0])
    
  }

  return (
    <>

    {/* <LudoBoard/> */}
    {/* <Todo /> */}
    {/* <LotteryP n={3} winCon={winC} /> */}
    {/* <Lottery/> */}
    {/* <TicketNum num={5} />
    <TicketNum num={9} />
    <TicketNum num={7} /> */}
    {/* <Ticket ticket={[8,3,4]} /> */}
    {/* <Ticket ticket={[8,3,4,0]} /> */}
    {/* <Form /> */}
    {/* <CommentsForm /> */}
    {/* <Comments /> */}
    {/* <CommentsForms /> */}
    {/* <Counter /> */}
    {/* <Jokes /> */}
    <CurrencyApp/>
    </>
  )
}
//fragment
export default App
