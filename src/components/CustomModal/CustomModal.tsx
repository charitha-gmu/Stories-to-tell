import React from "react";

type ModalProps = {
  isConfirmationPopup?: boolean;
  children: JSX.Element | React.ReactNode;
  contentStyle?: React.CSSProperties; // Style for modal content
};

const CustomModal = (props: ModalProps) => {
  const { isConfirmationPopup, children, contentStyle } = props;

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
        style={contentStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
