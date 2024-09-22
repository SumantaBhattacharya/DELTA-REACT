import React, { useState, useEffect, useId } from 'react';

export default function CurrencyApp() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencyInfo, setCurrencyInfo] = useState({});

  const amountInputId = useId();

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${from}.json`)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyInfo(data[from]);
      });
  }, [from]);
  // This means currencyInfo now holds the conversion rates or information for the "from" currency.


  const options = Object.keys(currencyInfo);//NOW CURRENCY INFO HAS ALL THE DATA
  //Creates an array of currency options from the fetched data.

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
  };
  //Swaps the from and to currencies and updates the amount to the converted amount.

  //Calculates the converted amount using the exchange rate.
  const convert = () => {
    const rate = currencyInfo[to];//conversationrates[EUR] like this as it contains all the convertion rates we want to slect only one which i conveted into so
    if (rate) {
      setConvertedAmount(amount * rate);
    }// amount is given and it is * by the exchange rate
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div>
          <label htmlFor={amountInputId}>From</label>
          <input
            id={amountInputId}
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {options.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
              //form ke under to sirf usd he
              //  value will be choosen and these are the options
            ))}
          </select>
        </div>

        <button type="button" onClick={swap}>
          Swap
        </button>

        <div>
          <label>To</label>
          <input type="number" placeholder="Amount" disabled value={convertedAmount} />
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {options.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
              // value will be choosen and these are the options
            ))}
          </select>
        </div>

        <button type="submit">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

/*
useEffect: Runs the fetch operation whenever the from currency changes.
fetch: Retrieves currency data from the API.
setCurrencyInfo: Updates the state with the fetched data.
Why from is in the dependency array?
The from variable determines the URL from which the currency data is fetched. If from changes (e.g., from USD to EUR), you need to fetch the new exchange rates for that currency. So the effect re-runs whenever from changes.
*/