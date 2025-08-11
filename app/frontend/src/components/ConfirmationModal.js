import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="modal-btn confirm">Yes</button>
          <button onClick={onClose} className="modal-btn cancel">No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;