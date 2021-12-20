import React, { useEffect } from "react";

const Modal = (props) => {
  useEffect(() => {
    setInterval(() => {
      props.modalhider();
    }, 3000);
  });
  return <div className="alert">{props.modalContent}</div>;
};

export default Modal;
