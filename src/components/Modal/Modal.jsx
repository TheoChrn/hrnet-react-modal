import React from "react";
import styles from "./styles.module.scss";

export const Modal = ({
  onClose,
  children,
  display,
  className,
  containerClassName,
  modalClassName,
  closeButtonClassName,
  btnIcon,
}) => {
  if (!display) {
    return null;
  }

  const btnIcons = btnIcon ? btnIcon : <>&#10006;</>;
  const modalContainerClasses = containerClassName
    ? containerClassName
    : styles.modalContainer;
  const modalClasses = modalClassName ? modalClassName : styles.modal;
  const closeButtonClasses = closeButtonClassName
    ? closeButtonClassName
    : styles.closeModalBtn;
  return (
    <div className={modalContainerClasses}>
      <div className={modalClasses}>
        <button className={closeButtonClasses} onClick={onClose}>
          {btnIcons}
        </button>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};
