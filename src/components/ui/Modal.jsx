import React, { useRef } from "react";
import { CircleX } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-blue-300/40 backdrop-blur-sm font-mono"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg shadow-lg  overflow-y-scroll"
        style={{
          width: "80vw",
          height: "70vh",
          maxWidth: "1000px",
          maxHeight: "1200px",
        }}
      >
        <button
          className="absolute top-2 right-3 max-sm:hidden text-gray-600 hover:text-gray-800 text-lg hover:cursor-pointer hover:shadow-2xl"
          onClick={onClose}
        >
          <CircleX color="gray" size={30} />
        </button>
        <div className="mt-7 flex-grow overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
