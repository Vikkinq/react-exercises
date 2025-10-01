import { useState } from "react";
import { useEffect } from "react";

const QUOTES_API = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function Quote() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
    setIsLoading(false);
  }, []);

  async function fetchQuote() {
    const response = await fetch(QUOTES_API);
    const jsonResponse = await response.json();
    console.log(jsonResponse.quote.text);
    const random = jsonResponse.quote;
    setQuote(random);
  }

  return (
    <div>
      {/* <button onClick={fetchQuote}>Random Quote</button> */}
      {isLoading ? <h1>Loading...</h1> : null}
      <h1>{quote.text}</h1>
      <h3>- {quote.author}</h3>
    </div>
  );
}
