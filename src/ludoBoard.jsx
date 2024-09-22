import { useState } from "react"
export default function ludoBoard(params) {

    let [isMoves, setMoves] = useState({
        blue:0,
        yellow:0,
        green:0,
        red:0
    });

    // let [isArr, setArr] = useState(["NO MOVES"])

    // let [count,setCount] = useState(0)

    let updateBlue = () => {
        //console.log(`blue moves ${isMoves.blue}`);

        //isMoves.blue += 1 // passing the reference | isMoves.blue = isMoves.blue + 1
        //setMoves({...isMoves}) // cannot call directly so we did this | it cannot detech chnage in the state it just can detect the change in the key of the obvject but not the object
        // to detech the change in the object we have to copy the object in the state variable which has its own address with it we can make js detech the change in the object
        
        isMoves.blue += 1
        setMoves((prevState) => {
            return {...prevState, isMoves}
        })

        // we can use spread operator (...) it creates a copy of the object in the memory the the copy pass on to detech the change in the state variable
        // setMoves({...isMoves, blue: isMoves.blue + 1 });// spread the indiavidual value and create the copy object the object

        // we can use this as well | ...prevState joto gulo ismoves chilo sob ase galo 
        //setMoves((prevState) => ({...prevState,blue: prevState.blue + 1 })) // this line will work remember concept of closures
        
        // setMoves((prevState) => {
        //     return {...prevState,blue: prevState.blue + 1 }
        // }) // this line will work remember concept of closures

        // setMoves(() => {
        //     isMoves.blue += 1
        // }) // this line wont work remember concept of closure
        //setMoves({...isMoves, blue: isMoves.blue + 1 });

        // setArr((prevArr) => [...prevArr, "NEW MOVE"]) // this will create a new array and push the new element in it
        // setArr((prevArr) => [...prevArr, isMoves]) // this will create a new array and push the new element in it

        //isArr.push("blue moves")
        //setArr(...isArr,"blue moves")// when we push an element in to array we dont get new array new id we get get the same old array with added new element that have the same memory address
        //console.log(isArr);// updated array

        //setArr((prevArr)=> ([...prevArr, "blue moves"]))
        // setArr((prevArr)=> {
        //     return [...prevArr, "blue moves"]
        // })
        
    }

    let updateYellow = ()=>{
        setMoves((prevMoves)=> {
           return {...prevMoves,
            yellow : prevMoves.yellow +1}
        })
    }

    let updateGreen = ()=>{// the 'blue' is coming/getting access from prevMoves cause its copying the objects with its keys and values 
        setMoves((prevMoves)=> (
            {...prevMoves, green: prevMoves.green + 1}
        ))
    }

    // let updateRed = ()=>{
    //     setMoves((prevMoves)=> {return {...prevMoves, red: prevMoves.red + 1}})
    // }

    return (
        <div className="ludo" id="Board">
            <p>Game Begins </p>
            {/* <p>{isArr}</p> */}
            <div className="board-cells">
                <p>Blue moves= {isMoves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves= {isMoves.yellow} </p>
                <button style={{backgroundColor: "rgb(200, 200, 0)", fontWeight: 900}} onClick={updateYellow}>+1</button>
                <p>Green moves= {isMoves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red moves= {isMoves.red} </p>
                <button style={{backgroundColor: "red"}} onClick={()=> setMoves((prevMoves)=> ({...prevMoves, red: prevMoves.red + 1}))} >+1</button>
            </div>
        </div>

    )
}

/*
object 
{
a:1,
b:2,
c:3
}
id: abcd
{
a:1,
b:2
d:4
}
id: abcd

Their id will remain 
the same case will happen to array also even if we change the elements the array id will remai the same

array

[1,2,3]
id:zyxw
to
[1,2,4]
id:zyxw

*/