import React from "react";
import { useState } from "react";

const id = new Date().getTime().toString(); //generates random unique id each second (required for key for list)

const ControlledInputs = () => {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
    address: "",
  });
  const [people, setPeople] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.age && person.address) {
      const obj = { ...person, id: id };
      setPeople([...people, obj]);
      setPerson({
        firstName: "",
        email: "",
        age: "",
        address: "",
      });
    } else {
      console.log("empty value");
    }
  };

  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  return (
    <div className="ControlledInputs">
      <h2>Multiple Inputs in Forms</h2>

      <section>
        <form onSubmit={HandleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Name</label>
            <input
              id="firstName"
              type="text"
              className="form-control"
              placeholder="Enter Name "
              name="firstName"
              value={person.firstName}
              onChange={HandleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="text"
              className="form-control"
              placeholder="Enter E-mail address"
              name="email"
              value={person.email}
              onChange={HandleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="text"
              className="form-control"
              placeholder="Enter Age"
              name="age"
              value={person.age}
              onChange={HandleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              className="form-control"
              placeholder="Enter Address"
              name="address"
              value={person.address}
              onChange={HandleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>

      <section>
        {people.map((item) => {
          const { id, firstName, email, age, address } = item;
          return (
            <li key={id} className="item-conatainer">
              <h5>Name : {firstName}</h5>
              <h6>Age : {age}</h6>
              <p>E-mail : {email}</p>
              <p>Address : {address}</p>
            </li>
          );
        })}
      </section>
    </div>
  );
};

export default ControlledInputs;
