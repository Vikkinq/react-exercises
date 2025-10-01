import { useState } from "react";
import { useEffect } from "react";

const QUOTES_API = "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random";

export default function Quote() {
  const [quote, setQuote] = useState({ q: "", a: "" });

  async function fetchQuote() {
    const response = await fetch(QUOTES_API);
    const jsonResponse = await response.json();
    console.log(jsonResponse[0]);
    const random = jsonResponse[0];
    setQuote(random);
  }

  return (
    <div>
      <button onClick={fetchQuote}>Random Quote</button>
      <p>{quote.q}</p>
      <h5>- {quote.a}</h5>
    </div>
  );
}
