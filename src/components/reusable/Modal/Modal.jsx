import ReactDom from "react-dom";
import Alert from "./Alert";

const Modal = () => {
  const modal = document.querySelector("#modal");
  const handleClickClose = () => {
    modal.style.display = "none";
  };
  return ReactDom.createPortal(<Alert close={handleClickClose} />, modal);
};

export default Modal;
