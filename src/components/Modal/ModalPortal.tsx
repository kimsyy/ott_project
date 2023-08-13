import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: ReactNode;
}

function ModalPortal({ children }: Props) {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  return ReactDOM.createPortal(children, modalRoot);
}

export default ModalPortal;
