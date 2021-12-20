// *************** REDUCER FUNCTION ***********************
export const reducer = (state, action) => {
  switch (action.type) {
    case "AddItem":
      const newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        isModal: true,
        ModalContent: "Item Added Successfully !!!",
      };
    case "EmptyValue":
      return {
        ...state,
        isModal: true,
        ModalContent: "Please Enter Something !",
      };
    case "DeleteItem":
      const delPeople = state.people.filter(
        (person) => person.id !== action.id
      );
      return {
        ...state,
        people: delPeople,
        isModal: true,
        ModalContent: "Item Deleted Succesfully !",
      };
    case "HideModal":
      return { ...state, isModal: false };
    default:
      console.log("Error...");
      break;
  }
  return state;
};
