import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="fixed bg-white p-8 rounded-3xl shadow-lg w-1/4 max-md:w-[60%] max-sm:w-[95%] max-md:p-5 max-sm:p-0 max-sm:py-5">
                <button className="absolute top-5 right-8 text-slate-600 text-3xl font-bold transition-transform ease-in-out hover:scale-125" onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
