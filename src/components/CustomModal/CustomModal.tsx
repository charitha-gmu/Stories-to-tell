import React from "react";

type ModalProps = {
  isConfirmationPopup?: boolean;
  children: JSX.Element | React.ReactNode;
  onClickOutSide?: () => void;
};

const Modal = (props: ModalProps) => {
  const { isConfirmationPopup, children, onClickOutSide } = props;

  const handleOnClickOutSide = () => {
    if (onClickOutSide) {
      onClickOutSide();
    }
  };

  return (
    <div
      className={`modal-container ${
        isConfirmationPopup ? "dark-background" : ""
      }`}
      onClick={handleOnClickOutSide}
    >
      <div
        className={`modal-content ${
          isConfirmationPopup ? "confirmation-modal-body" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
