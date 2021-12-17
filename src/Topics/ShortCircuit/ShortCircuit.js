import React from "react";
import { useState } from "react";

// (*) For || Operator :-
// If there is text then print text else print "Gaurav Gupta

// (*) For && Operator :-
// if text is empty then print nothing else print "Kunal Gupta" if it has some value

const ShortCircuit = () => {
  const [text, settext] = useState("--");
  const [iserror, setiserror] = useState(false);

  return (
    <div className="container">
      <h1>Short Circuit</h1>
      <h2>-{text || "Gaurav Gupta"}-</h2>
      <button className="btn" onClick={() => setiserror(!iserror)}>
        toggle error
      </button>
      {iserror && <h2>Error...</h2>}
      {!iserror ? <h2>there is no error</h2> : <p>there is some error</p>}
    </div>
  );
};

export default ShortCircuit;
