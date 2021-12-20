import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "./ReducerFunction";
// ***********INITIAL  STATE*********************
const initialState = {
  people: [],
  isModal: false,
  ModalContent: "This is Modal !!",
};
// ********************** MAIN FUNCTION **************************
const UseReducerBasics = () => {
  // ********************* HOOKS INITIALISATION *********************
  const [name, setname] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  // ****************** FUNCTIONS **********************************
  const DeleteItem = (id) => {
    dispatch({ type: "DeleteItem", id: id });
  };

  const HideModal = () => {
    dispatch({ type: "HideModal" });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime().toString();
    if (name) {
      const newItem = { id: id, name: name };
      dispatch({ type: "AddItem", payload: newItem });
      setname("");
    } else {
      dispatch({ type: "EmptyValue" });
    }
  };
  // ***************************** RETURN **********************************
  return (
    <div>
      {state.isModal && (
        <Modal modalContent={state.ModalContent} modalhider={HideModal} />
      )}

      <h1>UseReducer</h1>
      {/* ******************** FORM STARTS ************************** */}
      <form onSubmit={HandleSubmit}>
        <div className="form-group" onSubmit={HandleSubmit}>
          <label>Name :</label>
          <input
            className="form-control"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {/* ******************** FORM ENDS ************************** */}

      {/********************* SHOW LIST STARTS *********************** */}
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <li key={id} className="list-content">
            {name}
            <button className="mybtn-trash" onClick={() => DeleteItem(id)}>
              <i className="far fa-trash-alt fa-2x"></i>
            </button>
          </li>
        );
      })}
      {/********************* SHOW LIST ENDS *********************** */}
    </div>
  );
};

export default UseReducerBasics;
