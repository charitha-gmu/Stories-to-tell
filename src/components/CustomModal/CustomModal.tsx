import React from "react";

type ModalProps = {
  isConfirmationPopup?: boolean;
  children: JSX.Element | React.ReactNode;
};

const CustomModal = (props: ModalProps) => {
  const { isConfirmationPopup, children } = props;

  return (
    <div
      className={`modal-container ${
        isConfirmationPopup ? "dark-background" : ""
      }`}
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

export default CustomModal;
