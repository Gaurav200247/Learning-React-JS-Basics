import React from "react";
import { useState } from "react";

const id = new Date().getTime().toString(); //generates random unique id each second (required for key for list)

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault(); //prevents reload

    if (firstName && email) {
      //if firstName and email are entered
      const obj = { id: id, firstName, email }; //making an object with id,firstName,email [ we dont use {firstName :firstName, email:email} because both variable and key firstName are same ]
      setPeople((item) => {
        return [...item, obj]; //add obj to the array
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <div className="ControlledInputs">
      <h2>Controlled Inputs in Forms</h2>

      <section>
        <form onSubmit={HandleSubmit}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              id="firstName"
              type="text"
              className="form-control"
              placeholder="Enter Name "
              value={firstName} //value setted to currentstate
              onChange={(e) => setFirstName(e.target.value)}
              // when e.target.value changes it triggers setFirstName() function which changes the current state
            />
          </div>
          <div className="form-group">
            <label htmlFor="">E-mail</label>
            <input
              id="emailId"
              type="text"
              className="form-control"
              placeholder="Enter E-mail address : "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>

      <section>
        {people.map((item) => {
          const { id, firstName, email } = item;
          return (
            <li key={id} className="item-conatainer">
              <h5>{firstName}</h5>
              <p>{email}</p>
            </li>
          );
        })}
      </section>
    </div>
  );
};

export default ControlledInputs;
