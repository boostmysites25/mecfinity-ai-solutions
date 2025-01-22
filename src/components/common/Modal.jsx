import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, title, storageKey, children }) => {
  const [mounted, setMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    setMounted(true);
    const modalClosed = localStorage.getItem(storageKey);
    setShouldShow(modalClosed !== "true");

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, storageKey]);

  if (!mounted || !isOpen || !shouldShow) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <IoClose className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 max-h-[80vh] overflow-y-scroll">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
