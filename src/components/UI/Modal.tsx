import React, { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  onClick: () => void;
  children?: ReactNode;
}

const Modal = (props: ModalProps) => {
  return (
    <>
      <div className={styles.overlay} onClick={props.onClick} />
      <div className={styles.modal}>{props.children}</div>
    </>
  );
};

export default Modal;
