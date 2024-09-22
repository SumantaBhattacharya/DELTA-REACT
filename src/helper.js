// function genTicket(n) {
//   let arr = new Array(n); // [n] [undefined, undefined, undefined].
//   for (let i = 0; i < n; i++) {
//     arr[i] = Math.floor(Math.random() * 9) + 1;
//   }
//   return arr;
// }


function genTicket(n){
    let generateTic = Array(3).fill(0).map((i)=> Math.floor(Math.random() * 9) + 1)
    return generateTic;
}

//genTicket(3)

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        // total = total + arr[i]
    }
    return total;
}

/*const isMatches = () => {
    // if (isTicket[0] === isTicket[1] && isTicket[1] === isTicket[2]) {
    //   return true;
    // } else {
    //   return false;
    // }
    return ticket[0] === ticket[1] && ticket[1] === ticket[2];
  };

isMatches(isTicket) ? <p> You won the game!</p> : <p> You have lost the game! </p>*/

/*
function sum(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}
*/


export { genTicket, sum};



// arr[i] = Math.floor(Math.random() * 9) + 1 -> 1-9 |  arr[i] = Math.floor(Math.random() * 10) => 0-9
/*
The function genTicket accepts one argument: n. This value is passed when the function is called. 
For example, when you call genTicket(3), the value of n will be 3. This means you want an array of 3 random numbers.

new Array(n) creates an array with space for n elements, but the elements are not yet initialized (they are undefined).
If n is 3, this creates an array like this: [undefined, undefined, undefined]. There are 3 slots, but no values are assigned yet.

initially it will be undefined the we fill the number inside it 

*/

/*
const genT = function genearteTicket(n){
    const Arr = Array(n);
    for(let i = 0; i < n; i++){
        Arr[i] = Math.floor(Math.random() * 9);
    }
    return Arr;
}
*/

/*
The error you're encountering is due to the fact that you are trying to use JSX syntax (i.e., <h2>You have won the lottery!</h2>) in a JavaScript file (helper.js) that is not being treated as a React component file. JSX syntax is only valid in files with the .jsx or .tsx extensions.
*/