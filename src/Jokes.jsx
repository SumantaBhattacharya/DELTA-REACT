import React , {useState} from "react";

const url = "https://official-joke-api.appspot.com/jokes/random";

const Jokes = () => {
    
    const GetJoke = async () => {
        // fetch(url)
        //  .then(response => response.json())
        //  .then(data => console.log(data))
        let response = await fetch(url);
        if (!response.ok) {
            // Check if the response is ok (status code in the range 200-299)
            throw new Error("Network response was not ok");
        }
        let jsonResponse = await response.json();
        //setJoke(jsonResponse); // Update state with fetched joke
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
        console.log(jsonResponse);
    };

    const [joke, setJoke] = useState(GetJoke); // State to store the fetched joke

  return (
    <div>
      <h1>Jokes</h1>
      {/* Fetch data from the API */}
      <button onClick={GetJoke}>GetJoke</button>
      {joke && (
        <div>
          {/* <p><strong>Setup:</strong> {joke.setup}</p>
          <p><strong>Punchline:</strong> {joke.punchline}</p> */}
          <p><strong>Setup:</strong> {joke.setup}</p>
          <p><strong>Punchline:</strong> {joke.punchline}</p>
        </div>
      )}
    </div>
  );
};

export default Jokes;
// https://github.com/15Dkatz/official_joke_api
